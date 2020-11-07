import React from "react";

const Author = props => {
     // let writer = "https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2018/01/25/gettyimages-2673611.jpg";
     //  if(image = true) {
     //    writer = image[0]
     //  }
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.category}</h2>
      <h3>{props.intersectionality}</h3>
    </div>
    );
  };

export default Author;
