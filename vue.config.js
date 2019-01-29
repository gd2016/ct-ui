var path = require('path');
var components = require('./components.json');

// console.log(process.env.MODE);
// if (process.env.MODE === 'pack') {

// }
module.exports = {
    productionSourceMap: false,
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add(path.join(__dirname, 'packages'))
            .end();
    }
}
;
