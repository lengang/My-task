// 轮播图
interface Swiper {
	"image_src": string,
	"open_type": string,
	"goods_id": number,
	"navigator_url": string
}
// 导航栏
interface Nav{
	"name":string,
	"image_src":string,
	"open_type":string,
	"navigator_url":string
}
// 楼层
type Product=Array<{
	name:string,
	image_src:string,
	image_width:string,
	open_type:string,
	navigator_url:string
}>

type FloorMsg=Array<{
	floor_title:{
		name:string,
		image_src:string
	}
	product_list:Product
}>

interface FloorData{
	message:FloorMsg,
	meta:{
		msg:string,
		status:number
	}
}
// 分类
interface Meta{
	msg:string,
	status:number
}

type CateList={
	cat_id:number,
	cat_name:string,
	cat_pid:number,
	cat_level:number,
	cat_deleted:boolean,
	cat_icon:string,
	children?:Array<CateList>
}
interface GoodsCateList{
	meta:Meta;
	message:CateList
}
// 枚举
enum STATUS {
	CODE = 200
}

export {
	Swiper,
	Nav,
	FloorData,
	GoodsCateList
}