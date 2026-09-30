#!/usr/bin/env bash
# Fails if a page references a file (src="/...", poster="/...", ![](/...)) that
# is not in public/. Page links (/docs/... without an extension) are skipped.
set -euo pipefail
cd "$(dirname "$0")/.."

missing=0
while IFS= read -r ref; do
  path="${ref%%[?#]*}"
  [[ "$path" =~ \.[A-Za-z0-9]+$ ]] || continue
  if [[ ! -f "public$path" ]]; then
    echo "missing asset: $path" >&2
    missing=1
  fi
done < <(grep -rhoE '(src|poster)="/[^"]+"|\]\(/[^)[:space:]]+' content/docs | sed -E 's/^(src|poster)="//; s/"$//; s/^\]\(//' | sort -u)

exit "$missing"
