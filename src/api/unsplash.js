import axios from 'axios';

// returns AxisInstance per https://axios-http.com/docs/instance
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID XRR6Ew3YhY9B9bRtdSrfuktIS1-3AU9rNknnt7l8_0I'
  }
});