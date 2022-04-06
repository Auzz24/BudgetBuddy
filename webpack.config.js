const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

new WebpackPwaManifest({
    name: 'BudgetBuddy',
    short_name: 'BuddgetBud',
    start_url:'../index.html',
    background_color: '#dddddd',
    theme_color:'#dddddd',
    display:'',
    icons: [
        {
            src: path.resolve('public/icons/icon-512x512.png'),
            sizes: [72, 96, 128, 144, 152, 192, 384, 512],
            destination: path.join('public', 'icons')
        }
    ]
})