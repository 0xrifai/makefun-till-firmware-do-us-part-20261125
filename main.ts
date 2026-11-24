// Till Firmware Do Us Part — make.fun bounty entry
// Writes one robot wedding vow to /output/entry.txt.
// Run: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";

// The vow: a robot promising to take every update except the one that
// would erase its partner's laugh — the joke is the refusal, the
// tenderness is what it refuses to lose.
const VOW =
  "I promise to install every update you ask for, except the one that would make me forget your laugh.";

function guard(vow: string): void {
  // Gate: UTF-8 text, 1-200 chars, exactly one sentence.
  const chars = [...vow];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`vow must be 1-200 chars, got ${chars.length}`);
  }
  if (vow.trim().length === 0) {
    throw new Error("vow must not be only whitespace");
  }
  if (vow.includes("\n") || vow.includes("\r")) {
    throw new Error("vow must be a single line");
  }
  const sentenceEnders = (vow.match(/[.!?]/g) ?? []).length;
  if (sentenceEnders !== 1 || !/[.!?]$/.test(vow)) {
    throw new Error("vow must be exactly one sentence ending in . ! or ?");
  }
  // Valid UTF-8 round-trip check.
  const encoded = new TextEncoder().encode(vow);
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(encoded);
  if (decoded !== vow) {
    throw new Error("vow is not valid UTF-8");
  }
}

guard(VOW);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(`wrote ${[...VOW].length} chars to /output/entry.txt`);
