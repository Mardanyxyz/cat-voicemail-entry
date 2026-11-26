import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one voicemail greeting recorded by a cat, at most 120 characters.
// Chosen for the judge brief: it opens as a real greeting ("Hi, this is
// Biscuit"), the joke is cat-specific (asleep on the warm laptop), the cat
// has attitude (it will ignore your message), and the punch lands in the
// final clause. 100 characters, spoken aloud in a few seconds.
const greeting =
  "Hi, this is Biscuit. I am asleep on the warm laptop, so leave a message and I will ignore it at 3am.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry must be 1-120 characters of non-whitespace text.
// Fail loudly here rather than shipping an entry the scorer would reject.
if (greeting.length < 1 || greeting.length > 120 || greeting.trim().length === 0) {
  throw new Error(`greeting is ${greeting.length} characters; must be 1-120`);
}

writeFileSync("/output/entry.txt", greeting, "utf8");
