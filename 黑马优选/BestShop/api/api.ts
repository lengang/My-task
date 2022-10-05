import { request } from '../utils/request.js'
import * as TS from './define.ts'

const getSwiper = () => {
	return request('/home/swiperdata').then((res: TS.Swiper) => res,err=>err)
}
// 获取导航栏数据
const gerNavList=()=>{
	return request('/home/catitems').then((res:TS.Nav)=>res,err=>err)
}
// 获取楼层数据
const getFloorData=()=>{
	return request('/home/floordata').then((res:TS.FloorData)=>res,err=>err)
}

// 获取分类数据
const getGoodsCateList=()=>{
	return request('/categories').then((res:TS.GoodsCateList)=>res,err=>err)
}

// 获取搜索数据
const getSearchList=()=>{
	return request('/goods/search').then((res:TS.SearchList)=>res,err=>err)
}

// 搜索商品
const getSearchGoods=(val)=>{
	return request(`/goods/qsearch?query=${val}`).then((res:TS.SearchGoods)=>res,err=>err)
}

// 获取详情数据
const getDetails = (id: number) => {
	return request(`/goods/detail?goods_id=${id}`).then((res: TS.DetailsData) => res, err => err)
}
export {
	getSwiper,
	gerNavList,
	getFloorData,
	getGoodsCateList,
	getSearchList,
	getSearchGoods,
	getDetails
}