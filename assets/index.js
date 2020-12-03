import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video');
const buttonPlay = document.querySelector('#play');
const buttonSonido = document.querySelector('#sonido');
const player = new MediaPlayer({ movie : video,
     plugins : [new AutoPlay(), new AutoPause()] 
})

buttonPlay.onclick = () => player.ejec()
buttonSonido.onclick = () => player.sonido()

if('serviceWorker' in navigator) {
     navigator.serviceWorker.register('/sw.js')
}