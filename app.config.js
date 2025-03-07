
// Convert app.json to app.config.js to properly handle environment variables
// This allows us to use JavaScript expressions like process.env which are not valid in JSON

module.exports = {
  expo: {
    name: "muslim-todo",
    slug: "muslim-todo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    extra: {
      API_URL: process.env.API_URL,
      ENABLE_AI_FEATURES: process.env.ENABLE_AI_FEATURES === "true",
      APP_NAME: process.env.APP_NAME
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    }
  }
};
