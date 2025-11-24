// babel.config.cjs
module.exports = function (api) {
    api.cache(true);
    return {
        // ✅ NativeWind는 preset 쪽에 둡니다
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
        // ✅ expo-router만 plugins로
        plugins: [
            "expo-router/babel",
            [
                "babel-plugin-module-resolver",
                {
                    root: ["./"],
                    alias: {
                        "@": "./",
                    },
                },
            ],
        ],
    };
};
