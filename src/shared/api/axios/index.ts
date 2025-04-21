import axios from 'axios';

const client = axios.create({
  baseURL: '', // Get url from env,
  headers: {
    'Content-Type': 'application/json'
  }
});


// Add axios interceptor configuration here