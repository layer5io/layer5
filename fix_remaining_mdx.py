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

def fix_unclosed_tags(filepath):
    """Fix common unclosed tag patterns."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Fix split <a> tags (join them to single line)
    content = re.sub(r'<a\s+([^>]+)\s*>\s*\n\s*([^<]+)\s*\n\s*</a>', r'<a \1>\2</a>', content, flags=re.MULTILINE)
    
    # Fix split <Link> tags
    content = re.sub(r'<Link\s+([^>]+)\s*>\s*\n\s*([^<]+)\s*\n\s*</Link>', r'<Link \1>\2</Link>', content, flags=re.MULTILINE)
    
    # Fix unclosed <code> tags
    content = re.sub(r'<code>([^<\n]+)\n', r'`\1`\n', content)
    
    # Fix unclosed <strong> tags
    content = re.sub(r'<strong>([^<\n]+)\n', r'**\1**\n', content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# Fix specific directories
dirs_to_fix = [
    '/Users/l/code/layer5/src/collections/service-mesh-books',
    '/Users/l/code/layer5/src/collections/careers',
    '/Users/l/code/layer5/src/collections/blog'
]

for dir_path in dirs_to_fix:
    if os.path.exists(dir_path):
        for mdx_file in Path(dir_path).rglob('*.mdx'):
            if fix_p_tags_in_file(mdx_file):
                print(f"Fixed p tags: {mdx_file}")
        for mdx_file in Path(dir_path).rglob('*.md'):
            if fix_p_tags_in_file(mdx_file):
                print(f"Fixed p tags: {mdx_file}")

print("Done!")
