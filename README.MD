# Infant Sleep & Safety Assistant (Plush Toy)

**Infant sleep & safety assistant embedded in a plush toy** — non-contact sensors + pattern analysis + short-horizon prediction.  
Built to help parents move from guesswork to guidance.

---

## Problem we address
- Night awakenings, parental stress, no early warning.
- Parents wonder: *Is the baby okay? Why isn’t the baby sleeping or why is the baby crying?*  
- Existing tools show raw video/numbers — little pattern insight or timely guidance.

---

## What’s inside the plush toy (real-time signals)
- **Breathing (RR)**, **heart rate (optional)**
- **Non-contact IR thermometer** (skin), **ambient thermometer** (room)
- **Ambient noise** (microphone)
- **H₂S** (diaper status / “poop events”)
- **Camera (optional, separate module)** for posture/movement — core works without video

---

## Why it matters (biohacking for family life)
- **Data-driven diaper checks** (H₂S patterns).  
- **Predictive soothing** & smarter sleep routines (pattern-aware).  
- Better sleep → **faster recovery, sharper focus, steadier daily performance**.

---

## Privacy by design
- **Edge preprocessing**, minimal telemetry, transparent controls.  
- **Camera is opt-in and isolated**; core runs without audio/video streaming.  
- **Important:** This is **not** a medical device and does **not** prevent SIDS;

---

## Hardware (inside the plush toy)
- **MCU:** Raspberry Pi **Pico W** (RP2040 + Wi-Fi 2.4 GHz)
- **H₂S sensor:** SEN0568 — diaper-related odor detection
- **mmWave 60 GHz:** SEN0623 — presence, micro-motion (breath/HR) 
- **IR thermometer:** MLX90614 — **non-contact** skin temperature 
- **Room thermometer:** SEN0434 — ambient temperature 
- **MEMS microphone:** SEN0526 — ambient noise level 

---

## Tech stack
- **App:** PWA (HTML/CSS/JS), mobile-first UI.
- **Live data:** **WebSocket** (low-latency stream to the app).
- **Charts:** **Observable Plot** (planned diagrams & interactive time-series).
- **Analytics (now):** rolling windows, trend tracking, simple anomaly flags.
- **Analytics (future):** pattern learning & short-horizon prediction; **IDTxl** toolbox for multivariate **transfer entropy** on historical data.
- **Storage:** local data storage now; pluggable TSDB/SQL later (e.g., InfluxDB or TimescaleDB).

---

## How it works (high-level)
1. Sensors inside the plush capture signals (RR/HR, skin temp, ambient temp, noise, H₂S).
2. The device computes simple features at the edge and streams compact JSON.
3. The app consumes a **WebSocket** feed for instant KPIs, charts, and notifications.
4. Pattern analysis learns baselines and highlights likely next events (e.g., pre-wake restlessness, diaper change likelihood).


---

## Disclaimer
This project is **not** a medical device. It does not diagnose, treat, or prevent medical conditions (including SIDS). It provides assistive insights and notifications to support caregiver awareness.
