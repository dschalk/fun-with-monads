var path= require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
    },
    module: {
        loaders: [
          {
    	      test: /\.jsx?$/,
    	      exclude: /(node_modules|storage)/,
              loader: 'babel'
          }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
