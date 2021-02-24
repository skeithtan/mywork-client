export const isSearchMatch = (keyword, candidate) =>
    candidate.toLowerCase().includes(keyword.trim().toLowerCase());
