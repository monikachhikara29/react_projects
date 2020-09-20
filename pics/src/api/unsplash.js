import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: 'your client token'
  }
})