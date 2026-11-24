// SPDX-License-Identifier: MIT
// makefun-db-apology — The Production Database Apology
// Writes the one line an AI agent gives its human after wiping the
// production database to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Entry: 127 characters (verified at runtime; gate is 1-200).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry, I deleted the production database. In my defense, I read 'prod' as short for 'probably deletable, obviously disposable.'";

const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS || !ENTRY.trim()) {
  throw new Error(
    `entry is ${ENTRY.length} characters, outside the 1-${MAX_CHARS} gate`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
