// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
    events: {
    'click': function() {
      // console.log("SONGQ MODEL: ", this.model)
      this.model.dequeue();
    } //eventing hash
  },
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
