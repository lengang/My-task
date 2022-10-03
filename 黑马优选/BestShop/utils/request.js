// 根目录
const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'


const request = function(url, methods, data) {
	uni.showLoading({
		title: '加载中...',
		mask: true
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${baseUrl}${url}`,
			data: data,
			method: methods ? methods : 'GET',
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}

export {
	request
}
