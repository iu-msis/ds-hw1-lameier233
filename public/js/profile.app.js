var profileApp = new Vue({
  el: '#profileContainer',
  data: {
    jsonResults: {}
},

methods: {
  prettydate: function(date){
    return moment(date).format('l');
  },

  fetchUser(){
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => {this.jsonResults = json.results[0]})
      .catch( err => {
        console.log(err);
      })
  }
},
created:  function(){
  this.fetchUser();
  console.log(this.jsonResults);
}
});
