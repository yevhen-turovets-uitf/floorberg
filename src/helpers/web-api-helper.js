import axios from 'axios';
import * as queryString from 'query-string';

const getFetchUrl = args => (
  (args.domain ? args.domain : '')
  + args.endpoint
  + (args.query ? `?${queryString.stringify(args.query)}` : ''
  ));

const getFetchOpt = args => {
  const options = {
    method: args.type,
    headers: {}
  };

  if (args.authorization) {
    options.headers = {
      ...options.headers,
      Authorization: args.authorization
    };
  }
  if (args.request) {
    options.data = {
      ...args.request
    };
  }
  if (args.contentType === 'multipart/form-data') {
    options.headers = {
      ...options.headers,
      'Content-Type': args.contentType
    };
    options.data = args.request;
  }

  return options;
};

const callWebApi = async args => {
  try {
    const res = await axios({
      url: getFetchUrl(args),
      ...getFetchOpt(args)
    });
    return res.data;
  } catch (err) {
    return undefined;
  }
};

export default callWebApi;
