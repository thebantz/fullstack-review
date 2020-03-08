import React from "react";

const RepoEntry = props => (
  <div>{props.repo.author + "/" + props.repo.name}</div>
);

export default RepoEntry;
