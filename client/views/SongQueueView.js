// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render(); //renders when add or remove event fires from the song queue collection
  },

  render: function() {
    // return this.$el;
    // // console.log("SQ THIS: ", this)
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render(); //this is totally like fake.
      })
    );
  }


});


  