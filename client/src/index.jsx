import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
    this.showcaseRepos = this.showcaseRepos.bind(this);
  }
  componentDidMount() {
    // setTimeout(() => this.showcaseRepos(), 0);
    this.showcaseRepos();
  }

  search(term) {
    console.log(`${term} was searched`);
    axios
      .post("/repos", { search: term })
      .then(() => {
        this.showcaseRepos();
      })
      .catch(error => console.log(error));
  }

  showcaseRepos() {
    const repos = [];
    axios
      .get("/repos")
      .then(allRepos => {
        allRepos.data.forEach(aRepo => {
          repos.push(aRepo);
        });
        this.setState({ repos });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <Search onSearch={this.search.bind(this)} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
