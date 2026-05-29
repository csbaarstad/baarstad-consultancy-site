# /images

Static images for the Baarstad Consultancy site.

## Expected files

| Filename | Used by | Notes |
|---|---|---|
| `chris-headshot.jpg` | `index.html` (bio block) | Portrait/4:5 ratio crops nicely. The bio frame is 230px wide on desktop, so anything ~600x750+ is plenty. Square-ish portraits also work — the layout uses `object-fit: cover` so it crops sensibly. |

## Drop in the headshot

Save the headshot JPG as **`chris-headshot.jpg`** in this folder. The site picks it up automatically — no rebuild needed.

If you want a different filename (e.g., `.png`, `.webp`), update the `<img src=...>` in the bio block of `index.html`.
