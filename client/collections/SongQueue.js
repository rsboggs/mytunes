// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('add', function() {
      console.log(this);
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      //if last song, make sure it stops playing at removal  
      if(this.length === 1){
        //set current song to null
        console.log('');
        this.trigger('stop');
        this.remove(song)
      } else if (song === this.at(0)){
        this.remove(song);
        this.playFirst();

      } else {
        this.remove(song);
      }
    }, this);
    
    this.on('ended', function(song) {
      this.remove(song);      
    }, this);
  },

  
  playFirst: function(){
    this.models[0].play();
  }

});