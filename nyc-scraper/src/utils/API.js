import axios from "axios";
import Key from "./key";

export default {
  getArticles: function(search, start, end) {
    var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${Key}&page=1&q=${search}&begin_date=${start}0101&end_date=${end}0101`;
      console.log(url)
      return axios.get(url)
      .then(function(res) {
        let articles = res.data.response.docs;
        let temp = [];
        articles.forEach(function(e) {
          const obj = {
            title: e.snippet,
            link: e.web_url,
            publish: e.pub_date
          };
          temp.push(obj);
        })
        console.log(temp)
        return temp
    })
      .catch(function(err) {
        console.log(err)
      })
  }
}