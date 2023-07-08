module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: `${__dirname}/build`,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: "/\.ts$/",
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ]
    }
}