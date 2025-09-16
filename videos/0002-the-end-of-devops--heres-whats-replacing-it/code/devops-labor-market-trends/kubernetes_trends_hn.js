// kubernetes_trends_hn.js
// Usage: node kubernetes_trends_hn.js > kubernetes_trends_hn.csv
// Requires: node >=18 (fetch natif) ou `npm i node-fetch` et remplace globalThis.fetch par require('node-fetch')

const TERM = /security\sengineer/i;

// Trouve les IDs des topics "Who is hiring?" (un par mois)
async function findHiringPostIds() {
  // Large page to get a long history; on filtre ensuite
  const url = 'https://hn.algolia.com/api/v1/search_by_date?query=%22Who%20is%20hiring%3F%22&tags=story&hitsPerPage=1000';
  const res = await fetch(url);
  const data = await res.json();
  // Garde les posts mensuels Ask HN: Who is hiring?
  return data.hits
    .filter(h =>
      h.author == 'whoishiring' && h.created_at
    )
    .map(h => ({ id: h.objectID, created_at: h.created_at }))
    // tri décroissant (plus récent d’abord)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

// Récupère tous les commentaires d’un topic et retourne le décompte du terme
async function countTermInTopic(objectID) {
  const url = `https://hn.algolia.com/api/v1/items/${objectID}`;
  const res = await fetch(url);
  const data = await res.json();

  let count = 0;
  const stack = [...(data.children || [])];
  while (stack.length) {
    const c = stack.pop();
    if (!c) continue;
    const text = (c.text || '').replace(/<[^>]+>/g, ' ');
    if (text) {
      const matches = text.match(new RegExp(TERM, 'gi'));
      if (matches) count += matches.length;
    }
    if (c.children && c.children.length) stack.push(...c.children);
  }
  // date = mois du post (arrondi au 1er du mois)
  const d = new Date(data.created_at);
  const month = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-01`;
  return { month, count };
}

function withinRange(dateStr, min = '2014-01-01') {
  return new Date(dateStr) >= new Date(min);
}

(async () => {
  const topics = await findHiringPostIds();

  // Compte par topic (≈1 par mois)
  const results = [];
  for (const t of topics) {
    const r = await countTermInTopic(t.id);
    if (withinRange(r.month)) results.push(r);
    // Optionnel: limite si tu veux seulement jusqu’à aujourd’hui
  }

  // Agrège par mois (au cas où il existe des posts spéciaux)
  const byMonth = new Map();
  for (const { month, count } of results) {
    byMonth.set(month, (byMonth.get(month) || 0) + count);
  }

  // Trie par date croissante et imprime CSV
  const rows = [...byMonth.entries()].sort((a, b) => new Date(a[0]) - new Date(b[0]));
  console.log('date,count');
  for (const [month, count] of rows) {
    console.log(`${month},${count}`);
  }
})();