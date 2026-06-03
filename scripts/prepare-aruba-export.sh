#!/usr/bin/env bash
set -euo pipefail

# Aruba FTP: cartelle che iniziano con "_" spesso falliscono (es. _next).
ASSETS_DIR="assets"

if [[ ! -d out/_next ]]; then
  echo "out/_next non trovata: build statico non valida."
  exit 1
fi

mv out/_next "out/${ASSETS_DIR}"

find out -type f \
  \( -name '*.html' -o -name '*.js' -o -name '*.css' -o -name '*.json' -o -name '*.txt' \) \
  -exec perl -pi -e '
    s|/_next/|/'"${ASSETS_DIR}"'/|g;
    s|"_next/|"/'"${ASSETS_DIR}"'/|g;
    s|'\''_next/|'\''/'"${ASSETS_DIR}"'/|g;
  ' {} +

if ! compgen -G "out/${ASSETS_DIR}/static/css/*.css" > /dev/null; then
  echo "CSS mancante in out/${ASSETS_DIR}/static/css/"
  exit 1
fi

if grep -r '/_next/' out --include='*.html' --include='*.js' --include='*.css' -q; then
  echo "Trovati riferimenti /_next/ residui dopo la preparazione."
  grep -r '/_next/' out --include='*.html' --include='*.js' --include='*.css' | head -20
  exit 1
fi

echo "Export pronto: asset in /${ASSETS_DIR}/"
