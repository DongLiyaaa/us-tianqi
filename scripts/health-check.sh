#!/usr/bin/env bash
set -euo pipefail

HOST="${1:-127.0.0.1}"

for port in 4200 4201 4202 4203 4204 4205 4206 4207 4208 4209 4210 4211 4212 4213 4214 4215 4216 4217; do
  if curl -fsS "http://${HOST}:${port}/api/health" >/dev/null 2>&1; then
    echo "OK http://${HOST}:${port}/api/health"
    exit 0
  fi
done

echo "No healthy local dashboard API found on ports 4200-4217." >&2
exit 1
