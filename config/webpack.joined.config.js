const path = require("path");

module.exports = {
    mode: "none",
    target: ["web", "es6"],
    entry: path.resolve(__dirname, "../src/js/pages/united.js"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js",
    },
};
