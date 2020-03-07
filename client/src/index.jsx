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

  // TODO: Go into DBs and fetch count of entries for length of all repos
  componentDidMount() {
    // setTimeout(() => this.showcaseRepos(), 0);
    this.showcaseRepos();
  }

  search(term) {
    console.log(`${term} was searched`);
    axios
      .post("/repos", { search: term })
      .then(responses => console.log(responses))
      .catch(error => console.log(error));
  }

  showcaseRepos() {
    // console.log("TODO: Get Repos from DB Rendering");
    // TODO: DO A GET REQUEST TO SERVER
    const repos = [...this.state.repos];
    axios
      .get("/repos")
      .then(allRepos => {
        allRepos.data.forEach(aRepo => {
          repos.push(aRepo);
        });
        this.setState({ repos: repos });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
