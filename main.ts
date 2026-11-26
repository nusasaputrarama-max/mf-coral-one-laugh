// One Line, One Laugh — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
//
// The whole entry is a single funny line, at most 200 characters, written
// to /output/entry.txt and printed to stdout. The line below is original:
// a mundane dentist visit turns into a jaw that has been quietly rehearsing
// old comebacks for years — the punchline lands on the year, not the setup.

// The program is fully deterministic: no randomness, no clock, no I/O
// beyond the single write, so every run produces the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "The dentist said I grind my teeth at night; I said that's just my jaw rehearsing all the things I should have said in 2017.";

// The gate requires 1 to 200 characters of UTF-8 text, not only whitespace.
const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`Entry line must be 1-200 characters, got ${length}.`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
// No trailing newline: stdout and the file must be byte-identical.
process.stdout.write(LINE);
