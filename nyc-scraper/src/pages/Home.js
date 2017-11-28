import React, {Component} from "react";
import Hero from "../components/Hero";
import Form from "../components/Form";
import API from "../utils/API";
import Results from "../components/Results";

class Home extends Component {
  state = {
    topic: "",
    start: "",
    end: "",
    results: []
  }

  handleInputChange = event => {
    let name = event.target.name //topic
    let value = event.target.value //baseball
    console.log(this.state);
    this.setState({[name]: value}) //{topic: baseball}
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.topic, this.state.start, this.state.end)
      .then(res => {
        this.setState({results: res, start: "", end: "", topic: ""})
      })
  }

  render() {
    return(
      <div>
        <Hero>
          this is the home page
        </Hero>
        <Form
          topic={this.state.topic}
          start={this.state.start}
          end={this.state.end}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        /><br/>
        <Results results={this.state.results} />
      </div>
    )
  }
}

// const Home = props =>
//   <div>
//     <Hero>
//       <h1>this is the home page</h1>
//     </Hero>
//   </div>

export default Home;