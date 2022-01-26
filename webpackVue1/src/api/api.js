import request from '~/util/request'
import store from '~/store';
import {getToken} from '~/util/auth'


export function get(query) {
//   query.access_token=query.access_token||getToken();
  return request({
    url: '/',
    method: 'get',
    params: query
  })
}

export function post(query) {
  //   query.access_token=query.access_token||getToken();
      return request({
          url: '/',
          method: 'post',
          params: {
            
          },
          headers:{
              'Content-Type': 'application/json'
          },
          data:query,
          transformRequest: [function(data) {
              data = JSON.stringify(data)
              return data
          }]
      })
  }

export function formdata(query) {
//   query.access_token=query.access_token||getToken();
    return request({
        url: '/',
        method: 'post',
        params: {},
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data:query.formData,
        transformRequest: [function(data) {
            return data
        }]
    })
}