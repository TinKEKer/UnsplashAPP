

export default {
    "expo": {
    "name": "TestTask",
        "slug": "TestTask",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/icon.png",
        "splash": {
        "image": "./assets/splash.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
    },
    extra: {
        keys:{
            publicKey:'1q37BRycToFsvntTshROfuXUPOEdDneRB06YYOIJ4CA',
            privateKey:'cslaWdTqZEtnvkwvC9o6hZ2PINXVFReBBg4oP4b181Q'
        }
    },
        "updates": {
        "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
        "**/*"
    ],
        "ios": {
        "supportsTablet": true
    },
    "android": {
        "adaptiveIcon": {
            "foregroundImage": "./assets/adaptive-icon.png",
                "backgroundColor": "#FFFFFF"
        },
        "package": "UnsplashTask.apk"
    },
    "web": {
        "favicon": "./assets/favicon.png"
    }
}

}