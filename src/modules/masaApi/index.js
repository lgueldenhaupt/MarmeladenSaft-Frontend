import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

function get(url) {
  return axios.get(url);
}

function post(url, data) {
  return axios.post(url, data);
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

function getCategories() {
  return get('categories');
}

export default {
  authenticate,
  register,
  getCategories,
};
