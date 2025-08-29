export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function mark(text: string, q?: string) {
  if (!q) return text;
  try {
    const r = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig');
    return text.replace(r, '<mark>$1</mark>');
  } catch { return text; }
}
