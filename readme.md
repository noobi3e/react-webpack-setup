## Command to run before creating a Production Build

#### npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader file-loader html-loader html-webpack-plugin mini-css-extract-plugin sass sass-loader webpack webpack-cli webpack-dev-server webpack-merge

this is beacuse vite build is not optimal for old browser so if you want to use webpack for build process run above command and use webpack.config.js and babel.config.json file you have prepared.
