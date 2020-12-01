import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const buttonPlay = document.querySelector('#play');
const buttonSonido = document.querySelector('#sonido');
const player = new MediaPlayer({ movie : video, plugins : [new AutoPlay()] 
})

buttonPlay.onclick = () => player.ejec()
buttonSonido.onclick = () => player.sonido()