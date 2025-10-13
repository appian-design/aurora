import re

def on_page_markdown(markdown, **kwargs):
    """
    Add title="screenshot" attribute to all markdown images that don't already have attributes.
    This ensures accessibility for the glightbox plugin which wraps images in links.
    """
    # Pattern to match markdown images: ![alt text](url)
    # This will match images that don't already have attributes (no { after the closing paren)
    pattern = r'!\[([^\]]*)\]\(([^)]+)\)(?!\{)'

    # Replace with the same image but add { title="screenshot" } attribute
    replacement = r'![\1](\2){ title="screenshot" }'

    modified_markdown = re.sub(pattern, replacement, markdown)

    return modified_markdown
