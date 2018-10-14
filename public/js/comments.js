var newComment = new Vue({
  el: '#profileContainer',
  data: {
    jsonResults: []
},

methods: {
  fetchComment(){
    fetch('http://ec2-34-223-213-113.us-west-2.compute.amazonaws.com/api/comment.php')
      .then(response => response.json())
      .then(json => {this.jsonResults = json.results})
      .catch( err => {
        console.log(err);
      })
  }
},
created:  function(){
  this.fetchComment();
  console.log(this.jsonResults);
}
});
