var axios = require("axios");

export default = {

  save: function(title, publish, link) {
    var newArticle = {title: title, publish: publish, link: link};
    return axios.post("/api/saved", newArticle)
      .then(function(results){
        return results;
      })
  },
  find: function(){
    return axios.get("/api/saved")
      .then(function(results){
        return results;
      })
  }
}