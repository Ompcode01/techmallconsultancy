# Tech Mall Consultancy — Website

**Founder:** Ashish Kumar Mall  
**Co-Founders:** Ayush Aaryan · Omparkash Pandey  

---

## 📁 File Structure

```
techmall/
├── index.html          ← Main HTML file (open this in browser)
├── css/
│   └── style.css       ← All styles (dark/light theme, animations, responsive)
├── js/
│   └── main.js         ← All JavaScript (particles, cursor, counters, filters)
└── README.md           ← This file
```

---

## 🚀 How to Run

**Option 1 — Direct browser:**  
Double-click `index.html` to open in any modern browser. No server or build step needed.

**Option 2 — Local server (recommended for best experience):**  
```bash
# Using Python
cd techmall
python -m http.server 8080
# Then open http://localhost:8080

# Using Node.js / npx
npx serve .
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 Theme | Cyberpunk dark (default) + light mode toggle |
| 🖱 Custom Cursor | Neon glow cursor with ring lag effect |
| 🌌 Hero Canvas | 130-particle animated network with connections |
| ⌨️ Typing Effect | Auto-cycling service phrases |
| 📜 Scroll Reveal | Staggered fade-in animations on all sections |
| 🔢 Counters | Animated number counters (500+ clients, etc.) |
| 🗂 Portfolio Filter | Filter by Web Dev / Marketing / Legal / Career |
| 💬 Testimonials | Infinite auto-scrolling carousel (pausable on hover) |
| 📱 Responsive | Mobile-first, works on all screen sizes |
| 📊 Scroll Progress | Neon gradient bar at top of page |
| 🌙 Dark/Light | Toggle between themes instantly |

---

## 🎨 Customization

### Update Contact Info
In `index.html`, search for:
- `+91 99999 99999` → Replace with real phone number
- `hello@techmallconsultancy.com` → Replace with real email
- WhatsApp link: `https://wa.me/919999999999` → Replace with real WhatsApp number

### Update Google Maps
In `index.html`, find the `<iframe>` inside `.map-embed` and replace the `src` with your actual Google Maps embed URL.

### Social Media Links
In `index.html`, find `.footer-socials` and update the `href="#"` links.

### Colors (CSS Variables)
In `css/style.css`, edit the `:root` block:
```css
--neon-blue: #00d4ff;     /* Main accent color */
--neon-purple: #7b2fff;   /* Secondary accent */
--neon-cyan: #00ffe7;     /* Highlight color */
```

---

## 📞 Support
Built for Tech Mall Consultancy — Empowering Your Digital Future.
