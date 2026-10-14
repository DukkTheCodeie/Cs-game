# LOCKED OUT: notes for Claude

## The dev's recorded lines (Dev Line Booth)

The user records the dev's lines (every line with `who: 'dev'` in `src/game/script.js`) on their phone in
the **Dev Line Booth** artifact: https://claude.ai/artifact/J4vx5CogrEcAVMdTSpHkHe
It's built from `tools/dev-recorder.template.html` by `npm run recorder` (writes `dev-recorder.html`) and
published with the capabilities `assets`, `db` and `user`. Each take is an asset; the `takes` collection
holds one document per line: `{ asset, hash, text, mime, size, at }`.

- **Whenever a dev line is added or its text changes:** run `npm run recorder` and republish
  `dev-recorder.html` to the same URL (the takes stay), then remind the user to record the new or changed
  lines (`npm run clips-todo` lists them) and give them the link.
- **Bringing takes into the game:** `ArtifactData` `list` the `takes` collection on that URL. For each take
  whose `asset` differs from its entry in `assets/clips/recorded.json`, download it with the `Artifact` tool
  (`action: "read"`, `path` = the asset id). Write a `takes.json` of
  `{ "<lineId>": { "file", "hash", "text", "asset" } }`, run
  `node tools/import-dev-clips.mjs takes.json <download folder>` (needs ffmpeg), then `npm run build`,
  check a clip plays in the game, and commit `assets/clips/` with the rest.
- The one-file build (`npm run single`, attached to every release) packs `assets/clips/` in, so students
  see the clips there too.
