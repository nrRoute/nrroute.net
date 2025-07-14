import sys, frontmatter, datetime, subprocess
from pathlib import Path

for name in sys.argv[1:]:
    path = Path(name)
    post = frontmatter.load(path)
    if post.get("created") < datetime.datetime.today().date():
        post["modified"] = datetime.datetime.today().date()
        frontmatter.dump(post, path, sort_keys=False)
        subprocess.run(["git", "add", str(path)], check=True)
