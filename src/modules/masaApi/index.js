import axios from 'axios';

let api = null;

function getBaseUrl() {
  return process.env.VUE_APP_API_BASE_URL;
}

function getApi() {
  api = api || axios.create({
    baseURL: getBaseUrl(),
    responseType: 'json',
    // withCredentials: true,
  });
  return api;
}

function get(url) {
  return getApi().get(url);
}

function post(url, data) {
  return getApi().post(url, data);
}

/**
 * Register a user. User needs to contain username, password, firstName and lastName
 * @param  {Object} user user
 * @return {Promise}
 */
function register(user) {
  return post('users/register', { user });
}

/**
 * [authenticate description]
 * @param  {String} username username
 * @param  {String} password password
 * @return {Promise}
 */
function authenticate(username, password) {
  return post('users/authenticate', {
    username, password,
  });
}

export default {
  authenticate,
  register,
};
