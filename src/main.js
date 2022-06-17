import { marquee } from './marquee.js'
import { tab } from './tab.js'
// import { app } from './app.vue'

// app.vue()
tab()
marquee()

import './styles/index.css'
import './styles/index.less'
import './src/app.vue'

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'  

const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'

const fn= ()=> {
    console.log("陈惜缘");
 }
 fn()