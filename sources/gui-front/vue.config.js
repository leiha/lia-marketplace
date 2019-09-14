module.exports = {
    lintOnSave: false,

    devServer: {
        disableHostCheck: true,
        port: 8080,
        https: false
    },

    configureWebpack : {
        devServer: {
            host: '0.0.0.0'
        },
        resolve: {
            alias: {
                '@plugins': '/code/src/plugins',
                '@app'    : '/code/src/app',
                '@lia'    : '/code/src/lia',
                'vue$'    : 'vue/dist/vue.esm.js' // 'code/dist/vue.common.js' for webpack 1
            }
        },
        // optimization: {
        //     splitChunks: {
        //         cacheGroups: {
        //             commons: {
        //                 test: /\/node_modules\//,
        //                 name: 'vendor',
        //                 chunks: 'all',
        //             }
        //         }
        //     },
        // },
    },

    chainWebpack: config => {

        config.module
            .rule( 'html' )
            .test( /\.html$/ )
            .use ( 'html-loader' )
                .loader( 'html-loader' )
                .end( )
            .end( )

        config.module
            .rule( 'pug' )
            .test( /\.pug$/ )
            .use ( 'pug-loader' )
            .loader( 'html-loader' )
            .end( )
            .end( )

    },

    pluginOptions: {
      i18n: {
        locale: 'fr',
        fallbackLocale: 'fr',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
};
