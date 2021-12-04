import {api} from 'boot/axios';
import qs from 'qs';

export function login(id,password) {
  return api({
    url: '/login',
    method: 'post',
    data:qs.stringify({id,password})
  });
}
