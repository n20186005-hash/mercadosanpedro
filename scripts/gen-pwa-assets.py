#!/usr/bin/env python3
"""Generate the branded OG/hero cover and PWA icons for mercadosanpedro.com.

No network required. Run after editing the palette/name.
  python scripts/gen-pwa-assets.py
"""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES = os.path.join(ROOT, "public", "images")
ICONS = os.path.join(ROOT, "public", "icons")
os.makedirs(IMAGES, exist_ok=True)
os.makedirs(ICONS, exist_ok=True)

COCA = (49, 93, 66)
TINTA = (31, 33, 30)
MAIZ = (241, 184, 59)
WHITE = (255, 255, 255)

SERIF = "C:/Windows/Fonts/georgiab.ttf"
SANS_B = "C:/Windows/Fonts/arialbd.ttf"
SANS_R = "C:/Windows/Fonts/arial.ttf"


def vgradient(w, h, top, bottom):
    img = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(img)
    for y in range(h):
        t = y / (h - 1)
        r = int(top[0] + (bottom[0] - top[0]) * t)
        g = int(top[1] + (bottom[1] - top[1]) * t)
        b = int(top[2] + (bottom[2] - top[2]) * t)
        d.line([(0, y), (w, y)], fill=(r, g, b))
    return img


def draw_arch(d, cx, base_y, width, height, color, width_line):
    r = width / 2
    # semicircle top
    d.arc([cx - r, base_y - height, cx + r, base_y - height + width], 180, 360, fill=color, width=width_line)
    # side posts
    d.line([(cx - r, base_y), (cx - r, base_y - height + r)], fill=color, width=width_line)
    d.line([(cx + r, base_y), (cx + r, base_y - height + r)], fill=color, width=width_line)


def make_hero():
    w, h = 1200, 630
    img = vgradient(w, h, COCA, TINTA)
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)

    # soft maize sun, top-right
    cx, cy, R = 980, 150, 250
    for i, rr in enumerate(range(R, 0, -1)):
        a = int(26 * (1 - i / R))
        od.ellipse([cx - rr, cy - rr, cx + rr, cy + rr], fill=(MAIZ[0], MAIZ[1], MAIZ[2], a))

    # maize arch, bottom-left, decorative
    draw_arch(od, 250, 640, 360, 300, (MAIZ[0], MAIZ[1], MAIZ[2], 70), 22)

    # thin maize rule
    od.line([(90, 250), (430, 250)], fill=(MAIZ[0], MAIZ[1], MAIZ[2], 220), width=6)

    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    d = ImageDraw.Draw(img)

    title = ImageFont.truetype(SERIF, 78)
    subtitle = ImageFont.truetype(SANS_B, 34)
    tag = ImageFont.truetype(SANS_R, 26)

    d.text((90, 285), "Mercado Central", font=title, fill=WHITE)
    d.text((90, 370), "de San Pedro", font=title, fill=WHITE)
    d.text((92, 478), "CUSCO  ·  PERÚ", font=subtitle, fill=MAIZ)
    d.text((92, 528), "Guía de visita para viajeros", font=tag, fill=(255, 255, 255, 220))

    img.save(os.path.join(IMAGES, "hero.jpg"), "JPEG", quality=88)
    print("wrote public/images/hero.jpg")


def make_icon(size, out_name, maskable=False):
    img = Image.new("RGB", (size, size), COCA)
    d = ImageDraw.Draw(img)
    c = size // 2
    if maskable:
        # full-bleed background already; keep emblem within safe zone (<=40%)
        outer = int(size * 0.34)
        inner = int(size * 0.27)
        fs = int(size * 0.20)
    else:
        outer = int(size * 0.40)
        inner = int(size * 0.33)
        fs = int(size * 0.24)

    d.ellipse([c - outer, c - outer, c + outer, c + outer], fill=MAIZ)
    d.ellipse([c - inner, c - inner, c + inner, c + inner], fill=COCA)
    f = ImageFont.truetype(SANS_B, fs)
    name = "MSP"
    bb = d.textbbox((0, 0), name, font=f)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    d.text((c - tw / 2 - bb[0], c - th / 2 - bb[1]), name, font=f, fill=MAIZ)
    img.save(os.path.join(ICONS, out_name), "PNG")
    print("wrote public/icons/" + out_name)


if __name__ == "__main__":
    make_hero()
    make_icon(192, "icon-192.png")
    make_icon(512, "icon-512.png")
    make_icon(512, "icon-512-maskable.png", maskable=True)
