// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      this.remove(song);      
    }, this);

    this.on('ended', function(song) {
      // console.log("IN SONG QUEUE: ", this);
      this.remove(song);      
    }, this);

    // this.on('enqueue', function() {this.playFirst(); });
    

  },

  playFirst: function(){
    // console.log("THIS[0]: ", this.models)
    this.models[0].play();

  }

});