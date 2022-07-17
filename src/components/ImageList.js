import React from "react";

const ImageList = props => {
  // console.log(props.images);
  const images = props.images.map(image => {
    // Rule: add key only to the root element of the list: div in this case
    // ALT 1 key is added to the div if it is the root element
    // return <div key={image.id}>
    //   <img src={image.urls.regular} alt={image.alt_description} />
    // </div>
    // ALT 2 key is added to the img element itself since it is the root element
    return <img key={image.id} src={image.urls.regular} alt={image.description} />
  });
  return <div>{images}</div> 
};

export default ImageList;