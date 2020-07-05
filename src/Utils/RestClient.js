// TODO: Need to configure axios and interceptor
import axios from 'axios';

const RestClient = {
  get: (reqObj) => axios.get(reqObj.url, {
    params: reqObj.params,
  }),
  post: (reqObj) => axios.post(reqObj.url, reqObj.data, {
    config: reqObj.config,
  }),
  put: (reqObj) => axios.put(reqObj.url, reqObj.data, {
    config: reqObj.config,
  }),
  patch: (reqObj) => axios.patch(reqObj.url, reqObj.data, {
    config: reqObj.config,
  }),
  delete: (reqObj) => axios.delete(reqObj.url, {
    config: reqObj.config,
  }),
};

export default RestClient;
