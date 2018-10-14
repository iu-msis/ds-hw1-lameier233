var commentsApp = new Vue({
  el: '#commentMain',
  data: {
    comment: [ ],
  },

  methods: {
      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.work.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })
    },

  created () {
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/comment.php?id='+id)
    .then( response => response.json() )
    .then( json => {commensApp.comment = json} )
    .catch( err => {
      console.log('COMMENT FETCH ERROR:');
      console.log(err);
    })
  }
})
