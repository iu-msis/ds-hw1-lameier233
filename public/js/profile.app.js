var profileApp = new Vue({
  el: '#profileContainer',
  data: {
   results : ''
},
methods: {
  prettydate: function(date){
    return moment(date).format('l');
  },
  fetchUser(){
    fetch('https://randomuser.me/api')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        this.results = myJson;
      });
  }
},
created:  function(){
  this.fetchUser();
}
})
