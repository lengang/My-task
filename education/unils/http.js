import axios from 'axios'
const http = axios.create({
	baseURL: 'http://m.mengxuegu.com/api/',
	headers: {
		"Content-Type": "application/json:charset=utf-8"
	},

	withCredentials: true
})
http.interceptors.request.use(
	(config) => {
		
		return config
	},
	(err) => {
		return Promise.reject(err)
	}
)

http.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		
			
		
	}
)
export default http