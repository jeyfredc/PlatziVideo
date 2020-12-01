class MediaPlayer {
    constructor(config){
      this.media = config.movie;
      this.plugins = config.plugins || [];
      this.initPlugins();
    }

    initPlugins(){
      const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
          return this.media.muted;
        },

        set muted(value) {
          this.media.muted = value;
        }
      };

      this.plugins.forEach(plugin => {
        plugin.run(player);
      });
    };
    
    play(){
      this.media.play();
    }
    
    pause(){
      this.media.pause();
    }
    
    mute(){
      this.media.muted = true;
    }

    unmute(){
      this.media.muted = false;
    }

    ejec(){
      if(this.media.paused){
        this.play();
      }else{
        this.pause();
      }
    }

    sonido(){
      if(this.media.muted){
        this.unmute();
      }else{
        this.mute();
      }
    }
}

export default MediaPlayer;