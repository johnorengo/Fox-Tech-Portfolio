/** Use page order rather than intersection callback order at section boundaries. */
export function findActiveSection(sections: { id: string; top: number }[], readingLine: number) {
  let active = '';
  for (const section of sections) {
    if (section.top > readingLine) break;
    active = section.id;
  }
  return active;
}
