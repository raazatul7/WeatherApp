import {create} from 'apisauce';
import {API_URL} from '@env';
// Create axios client, pre-configured with baseURL
let APIKit = create({
  baseURL: API_URL,
  timeout: 10000,
});

export default APIKit;
