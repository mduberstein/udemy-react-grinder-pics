import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    // spans - number of vertical rows the image should cover
    this.state = {spans: 0};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);
    // add vanilla JavaScript event listener, to determine the height of the image only after it has really loaded
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({spans}); // ES2015 shortcut to this.setState({spans: spans});

  }
  render () {
    // console.log(this.props);
    const {description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        {/* this img is not an HTML tag, this is jsx code from which React will generate HTML */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
} 

export default ImageCard;