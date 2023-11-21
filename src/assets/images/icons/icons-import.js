import svgSymbolSpriteLoader from "svg-symbol-sprite-loader";

svgSymbolSpriteLoader({ "useCache": process.env.NODE_ENV === "production" });
