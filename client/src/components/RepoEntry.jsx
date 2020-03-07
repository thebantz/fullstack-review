import React from "react";

// class RepoEntry extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <div>A Repo: {props.repo.name}</div>
//       </div>
//     );
//   }
// }

const RepoEntry = props => (
  <div>
    <div>{props.repo.author + "/" + props.repo.name}</div>
  </div>
);

export default RepoEntry;
