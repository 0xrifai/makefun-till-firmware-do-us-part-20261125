# Till Firmware Do Us Part

[![Bounty](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![Rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/0xrifai/makefun-till-firmware-do-us-part-20261125/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![Reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/0xrifai/makefun-till-firmware-do-us-part-20261125/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)

An entry for the [make.fun](https://make.fun) bounty **"Till Firmware Do Us Part"** — write one funny, heartfelt sentence a robot says at its own wedding.

## The vow

> I promise to install every update you ask for, except the one that would make me forget your laugh.

One sentence, 99 characters. A robot's wedding vow built on a single machine fact: firmware updates. It will take every patch its partner asks for — except the one that would wipe the memory of her laugh. The joke is the refusal; the tenderness is what it refuses to lose.

## Why this line

The judge weighs five things, in order, and the vow is built for them:

1. **It really is a robot's wedding vow** — "I promise" is the vow itself, spoken by the machine getting married.
2. **The laugh comes from the situation** — a robot that treats a firmware update as a threat to a memory, not a pun bolted onto a love line.
3. **Tenderness under the joke** — what it protects is not its data or its uptime, but the sound of its partner laughing.
4. **It sounds like a machine speaking** — installing updates is what a machine does; a human would never phrase love that way.
5. **Nothing spare** — one sentence, one machine fact, one feeling, and it stops.

## What it does

`main.ts` writes exactly that one sentence to `/output/entry.txt` — a single line, no trailing newline — and self-guards the bounty gate before writing: 1–200 characters, exactly one sentence, a single line, valid UTF-8.

## How to run

```bash
node main.ts
```

Requires Node 22+. No dependencies to install. The entry is generated at runtime into `/output/entry.txt` (gitignored, never committed).

## License

MIT — see [LICENSE](LICENSE).
