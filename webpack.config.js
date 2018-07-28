module.exports = {
	entry:{
		js : "./src/app.js",
		css: "./css/style.css",

		
	},

	output: {
		/*path: 'build',*/

		filename:'bundle.js'

	},
	
	module: {
		rules: [{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
			{
			  test: /\.(gif|png|jpe?g|svg)$/,
			  use: [
			    'file-loader',
			    {
			      loader: 'image-webpack-loader',
			      options: {
			        bypassOnDebug: true, // webpack@1.x
			        disable: true, // webpack@2.x and newer
			      },
			    },
			  ],
			}
		],
		loaders:[
		 {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
         
        }
      }, 
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
			{
 			 test: /\.(ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
			  loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'

			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(scss|css)$/,
				loader:"style-loader!css-loader!sass-loader"
			},
  		{
    	 test: /\.json$/,
        loader: 'json-loader'
  		},

		]

	}


};