import { fail } from "assert"
import { resolve } from "path/posix"

const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1"
const request=function(url,data,methods){
	uni.showLoading({
		title:'正在加载中...  ...'
	})
	return new Rromise((resolve,reject)=>{
		uni.request({
			url::baseUrl+url,
			method:methods,
			data,
			success:function(res){
				resolve(res.data)
			},
			fail:function(err){
				reject(err)
			},
			complete(){
				uni.hideLoading()
			}
		})
	})
}
export default{
	request
}