import './a.js'
import collect from 'collect.js';
import '@/03.css'
import '@/05.css'
import data from '@/07.json'
import {name,age} from '@/07.json'
import url from '@/07.json?url'
import stylesA from '@/04a.module.css'
import stylesB from '@/04b.module.css'
import styles from '@/03.css?inline'
import imageUrl from '@/img/javascript.svg'
import imageUrl0 from '@/img/javascript.svg?raw'
import image from './image.jpg'
import App from './App.vue'
import { createApp } from 'vue';
createApp(App).mount('#app')
document.querySelector('img').src=image
//const modules=import.meta.glob('./src/10/*.js',{as:'raw',eager:true})
//const modules=import.meta.glob('./src/10/*.js',{as:'url',eager:true})
//const modules=import.meta.glob('./src/10/*.js',{import:'name'})
//const modules=import.meta.glob('./src/10/*.js',{import:'default'})
//const modules=import.meta.glob('./src/10/*.js',{eager:true,import:'default'})
console.log(collect([1,3,3,7]).avg())
//console.log(styles)
const styleEl=document.createElement('style')
styleEl.innerText=styles
document.querySelector('head').append(styleEl)
//console.log(stylesA)
document.querySelector('.heading').className=`${stylesA.heading} ${stylesB.heading}`
console.log(data)
console.log(name,age)
console.log(imageUrl)
//console.log(imageUrl0)
document.getElementById('image').src=imageUrl
console.log(url)
//console.log(modules)
/*document.addEventListener('click',()=>{
    Object.values(modules).forEach((module)=>{
        module().then((data)=>{
            console.log(data)
        })
    })
})
document.addEventListener('click',()=>{
    Object.values(modules).forEach((module)=>{
        module().then((name)=>{
            console.log(name)
        })
    })
})*/
console.log(import.meta.env)
const users=[
    {
        name:'ab',
        age: 26
    },
    {
        name:'cd',
        age: 32
    }
]
log(users)
console.log(pluck(users,'name'))