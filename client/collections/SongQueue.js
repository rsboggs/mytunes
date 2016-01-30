// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('dequeue', function(song) {
      console.log("IN SONG QUEUE: ", this)
      this.remove(song);      
    }, this);       //empty array

  }



});