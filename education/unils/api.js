import http from './http.js'
//轮播图图片
const connter = () => {
	let my_img = http.get('article/api/advert/show/1')
	return my_img
}
const list = () => {
	let my_list = http.get('article/api/category/label/list')
	return my_list
}
const search = (e) => {
	let My_search = http.post(`course/api/course/search`, e)
	return My_search
}
export {
	connter,
	list,
	search
}
