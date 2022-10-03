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
export {
	getSwiper,
	gerNavList,
	getFloorData,
	getGoodsCateList
}