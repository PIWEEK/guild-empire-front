module.exports = {
    entry: {
        app: ['./src/js/bootstrap.js']
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
        noInfo: true,
        inline: true
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    optional: ['runtime'],
                    stage: 0
                }
            }
        ]
    }
};
