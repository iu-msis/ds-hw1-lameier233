var profileApp = new Vue({
  el: '#profileContainer',
  data: {
    jsonResults: []
},

methods: {
  prettydate: function(date){
    return moment(date).format('l');
  },
  age: function (date){
    return moment().diff(moment(date),'years');
  },

  fetchUser(){
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(json => {this.jsonResults = json.results})
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
