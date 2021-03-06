import DS from 'ember-data';
import Publisher from './publisher';

export default Publisher.extend({

  books: DS.hasMany('book', { async: true }),

  loadedAt: function() {
    this.set('loadedAt', new Date());
  }.on('didLoad')
  
});
