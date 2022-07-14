import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {images: []};
  async onSearchSubmit(term) {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID XRR6Ew3YhY9B9bRtdSrfuktIS1-3AU9rNknnt7l8_0I'
        }
      });
      console.log(this);
      this.setState({images: response.data.results});
      
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} guessWhatIAam="I am the props pbject" />
        Found: {this.state.images.length} images.
      </div>
    );
  }
}

export default App;
