import axios from 'axios'
const http = axios.create({
	baseURL: 'http://m.mengxuegu.com/api/',
	headers: {
		// 字符集编码
		// 作者肯·汤普逊   罗布·派克
		"Content-Type": "application/json:charset=utf-8"
	},
	// 是否开启跨域
	withCredentials: true
})
// 请求头
http.interceptors.request.use(
	(config) => {
		return config
	},
	(err) => {
		return Promise.reject(err)
	}
)
// 请求体
http.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {}
)
export default http
