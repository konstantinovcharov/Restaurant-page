const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        loadPage: './src/loadPage.js',
        loadMenu: './src/loadMenu.js',
        loadContact: './src/loadContact.js',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    }
};