#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if ! command -v graphify >/dev/null 2>&1; then
  cat >&2 <<'EOF'
Graphify is not installed or is not on PATH.
Install it with:
  uv tool install graphifyy
Then register the Codex skill with:
  graphify install --project --platform codex
EOF
  exit 1
fi

echo "Indexing Wamule documentation from: $ROOT_DIR"
graphify .

echo
echo "Graphify index complete. Local output: $ROOT_DIR/graphify-out"
echo "The output is intentionally ignored by Git and is not published to GitHub Pages."
