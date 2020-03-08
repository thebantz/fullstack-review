import React from "react";
import RepoEntry from "./RepoEntry.jsx";

class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4> Repo List Component </h4>
        There are {this.props.repos.length} repos.
        {this.props.repos.map((repository, index) => (
          <RepoEntry repo={repository} key={index} />
        ))}
      </div>
    );
  }
}

export default RepoList;
