// @flow

import request from 'browser-request';

function post(url: string, data: Object) {
  debugger;
  console.log('post api');

  // NOTE: wrapping this arround in a promise
  // because redux-saga doesn't work well with callbacks
  // I could use redux-saga's eventChannel, but that is an over kill for this simple use
  // case
  return new Promise((resolve, reject) => {
    request({
      url,
      method: 'POST',
      json: data
    },
    (err, response, body) => {
      debugger;
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

export {
  post
};
