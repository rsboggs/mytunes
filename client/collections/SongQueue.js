// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    //if first song is dequeued need to call playFirst
    this.on('dequeue', function(song) {
      if (song.attributes.title === this.models[0].attributes.title){
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