import axios from "axios";


export function getHomeworkList() {
  return axios.get('/api/homework/list');
  
}
export function checkSession() {
  return axios.get('/api/login/check');
}

// 로그아웃
export function logoutUser() {
  return axios.post('/api/login/logout', {});
}
export function loginUser(id, pwd) {
  return axios.post(
    '/api/login/index',
    { id, pwd }
  );
}