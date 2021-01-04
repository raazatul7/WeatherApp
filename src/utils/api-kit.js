import {create} from 'apisauce';
// Create apisauce client, pre-configured with baseURL
let APIKit = create({
  timeout: 10000,
});

export default APIKit;
