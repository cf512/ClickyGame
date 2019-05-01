import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  return (
    <ul className="list-group">
      {props.rons.map(item => (
        // <li className="list-group-item" key={item.id}>
        //   {item.name}
        // </li>
        <img key={item.id} alt={item.id} src={item.url}></img>
      ))}
    </ul>
  );
}

export default List;
