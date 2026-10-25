// Fungsi murni (tanpa React) supaya mudah diuji dan nanti mudah diganti
// dengan pencarian di database.

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // buang aksen
    .replace(/[^a-z0-9\s]/g, " ") // buang tanda baca
    .trim();

const newestFirst = (a, b) => b.publishedAt.localeCompare(a.publishedAt);

export function searchClaims(claims, query) {
  const tokens = normalize(query).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [...claims].sort(newestFirst);

  const scored = [];
  for (const claim of claims) {
    const title = normalize(claim.title);
    const tags = normalize(claim.tags.join(" "));
    const summary = normalize(claim.summary);

    let score = 0;
    let matchesAll = true;
    for (const token of tokens) {
      const inTitle = title.includes(token);
      const inTags = tags.includes(token);
      const inSummary = summary.includes(token);
      if (!inTitle && !inTags && !inSummary) {
        matchesAll = false; // semua kata kunci harus ketemu
        break;
      }
      score += (inTitle ? 3 : 0) + (inTags ? 2 : 0) + (inSummary ? 1 : 0);
    }
    if (matchesAll) scored.push({ claim, score });
  }

  return scored
    .sort((a, b) => b.score - a.score || newestFirst(a.claim, b.claim))
    .map((r) => r.claim);
}
