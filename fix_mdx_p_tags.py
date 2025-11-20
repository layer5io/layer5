#!/usr/bin/env python3
import os
import re
from pathlib import Path

def fix_p_tags_in_file(filepath):
    """Remove <p> and </p> tags from MDX files."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Remove <p> tags at the start of lines (with optional whitespace)
    content = re.sub(r'^(\s*)<p>\s*\n', r'\1', content, flags=re.MULTILINE)
    
    # Remove </p> tags at the end of lines (with optional whitespace)
    content = re.sub(r'\s*</p>\s*$', '', content, flags=re.MULTILINE)
    
    # Remove inline <p> and </p> tags
    content = re.sub(r'<p>([^<\n]+)</p>', r'\1', content)
    
    # Remove remaining standalone <p> and </p> tags
    content = re.sub(r'<p>', '', content)
    content = re.sub(r'</p>', '', content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def fix_html_comments(filepath):
    """Convert HTML comments to MDX comments."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Convert HTML comments to MDX comments
    content = re.sub(r'<!--\s*(.*?)\s*-->', r'{/* \1 */}', content, flags=re.DOTALL)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Fix integrations
integrations_dir = Path('/Users/l/code/layer5/src/collections/integrations')
for mdx_file in integrations_dir.rglob('*.mdx'):
    if fix_p_tags_in_file(mdx_file):
        print(f"Fixed: {mdx_file}")

# Fix events
events_dir = Path('/Users/l/code/layer5/src/collections/events')
for mdx_file in events_dir.rglob('*.mdx'):
    if fix_p_tags_in_file(mdx_file):
        print(f"Fixed: {mdx_file}")

# Fix learning paths (HTML comments)
learn_dirs = [
    '/Users/l/code/layer5/content-learn/mastering-service-meshes-for-developers/index.mdx',
    '/Users/l/code/layer5/content-learn/mastering-meshery/index.mdx',
    '/Users/l/code/layer5/content-learn/mastering-kubernetes-for-engineers/index.mdx'
]
for filepath in learn_dirs:
    if os.path.exists(filepath):
        if fix_html_comments(filepath):
            print(f"Fixed HTML comments: {filepath}")

print("Done!")
