/**
 * Every page under docs/ starts with a "# Title" heading that duplicates the
 * frontmatter `title` Starlight already renders as the page's own <h1>.
 *
 * We keep that heading in the source markdown on purpose: the MCP sync
 * workflow (.github/scripts/check-mcp-sync.js) reads the raw files on disk
 * and takes the first "# " line as the page title, so removing it from the
 * source would silently break that automation. Instead, strip it here at
 * render time only, so the built site doesn't show the title twice.
 */
export default function remarkRemoveLeadingH1() {
  return (tree) => {
    const first = tree.children[0];
    if (first && first.type === 'heading' && first.depth === 1) {
      tree.children.shift();
      // Drop a blank-line gap left behind, if any (thematicBreak-free docs
      // don't need it and it avoids a stray gap at the top of the page).
    }
  };
}
