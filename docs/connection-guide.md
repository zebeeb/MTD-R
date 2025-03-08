
# 📱 Connecting to Expo Go from Replit

This guide explains how to properly connect your Expo project running on Replit to your mobile device using Expo Go.

## ✅ Setup Instructions

1. **Use the "Dev Server" Workflow**

   Always use the "Dev Server" workflow (which is now the default run button) instead of the "Run" workflow. This configures the necessary environment variables for proper connection.

2. **Scan the QR Code Correctly**

   - **Android**: Open Expo Go app and use "Scan QR Code" option
   - **iOS**: Use the native Camera app to scan the QR code

3. **Connection Troubleshooting**

   If you're having issues connecting:

   - Make sure your mobile device and computer can reach the internet
   - Try both WiFi and mobile data connections
   - Clear the Expo Go app cache (shake device → "Clear cache and restart")
   - Check that you're using the latest version of Expo Go
   - Verify the QR code URL contains your Replit domain

## 🔍 How It Works

The connection works through these environment variables:
- `EXPO_PACKAGER_PROXY_URL` ensures Expo uses your Replit domain
- `REACT_NATIVE_PACKAGER_HOSTNAME` tells the packager to use your Replit domain instead of localhost

This configuration ensures your mobile device can reach your Replit project over the internet.
