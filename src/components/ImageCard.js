import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);
    // add vanilla JavaScript event listener
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  }
  render () {
    // console.log(this.props);
    const {description, urls} = this.props.image;
    return (
      <div>
        {/* this img is not an HTML tag, this is jsx code from which React will generate HTML */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
} 

export default ImageCard;