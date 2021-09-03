const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin")

module.exports = {
    "entry": "index.js",
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                { family: "Kristi" },
                { family: "Roboto" }
            ]
        })
    ]
}