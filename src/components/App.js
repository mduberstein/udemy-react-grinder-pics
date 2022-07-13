import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
      axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID XRR6Ew3YhY9B9bRtdSrfuktIS1-3AU9rNknnt7l8_0I'
        }
    } );
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
