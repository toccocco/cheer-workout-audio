# 💪 Cheer Workout Timer

A motivational workout timer web app with Japanese voice encouragement. Perfect for interval training with cheerful audio support!

## Features

- 🎵 **Japanese voice encouragement** - Random motivational phrases during workouts
- 🔊 **Volume control** - Adjustable audio levels with persistent settings
- 📱 **PWA support** - Install as a mobile app
- 🔒 **Screen wake lock** - Prevents screen from turning off during workouts
- 🎨 **Visual feedback** - Animated status indicators
- 💾 **Settings persistence** - Your preferences are saved locally
- 🌐 **Cross-platform** - Works on desktop, mobile, iOS Safari, and Android

## How to Use

1. Set your workout parameters:
   - **セット (Sets)**: Number of workout rounds
   - **作業(秒) (Work seconds)**: Duration of each work interval
   - **休憩(秒) (Rest seconds)**: Duration of rest between sets

2. Adjust volume using the slider

3. Tap **🌟 Start** to begin your workout

4. Listen for motivational phrases:
   - Work phase: "がんばれー！", "頑張って！", "その調子その調子！", "フレーフレー！"
   - Rest phase: "あとちょっと〜！"
   - Completion: "やったね！", "やったーー！", "お疲れ様でした！"

## Technical Features

- **Web Audio API** with HTML Audio fallback
- **Service Worker** for offline functionality
- **Responsive design** with mobile-first approach
- **Audio buffering** for smooth playback
- **iOS/Safari compatibility** optimizations

## Installation

### As a PWA (Recommended)
1. Open in your mobile browser
2. Look for "📱 Add to Home" button
3. Add to your home screen for app-like experience

### Local Development
1. Clone this repository
2. Serve files from a local web server (due to audio file requirements)
3. Open in browser

## Browser Compatibility

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari (desktop & mobile)
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## Files Structure

```
cheer-workout-audio/
├── index.html          # Main application
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── icon-192.png       # App icon (192x192)
├── icon-512.png       # App icon (512x512)
└── audio/             # Voice files
    ├── ganbare.mp3
    ├── ganbatte.mp3
    ├── sono_choshi.mp3
    ├── hurray.mp3
    ├── ato_chotto.mp3
    ├── yatta_ne.mp3
    ├── yatta_long.mp3
    └── otsukaresama.mp3
```

## License

MIT License - Feel free to use and modify for your own projects!

---

Made with ❤️ for fitness enthusiasts who enjoy Japanese encouragement during workouts!