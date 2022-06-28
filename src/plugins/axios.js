import axios from 'axios'

// axios의 기본 베이스 url 정의
//axios.defaults.baseURL = 'https://api.devcury.kr';
axios.defaults.baseURL = 'https://localhost:8090';

// post method의 content-type을 정의
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;