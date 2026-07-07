/** Builds a stable in-page anchor id for documentation sections. */
export function toSectionId(title: string, index: number): string {
  const safeTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `section-${index + 1}-${safeTitle}`;
}

/** Scrolls to a section heading on the current page. */
export function scrollToSectionId(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', `#${sectionId}`);
}
