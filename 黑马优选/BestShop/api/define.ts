import { type } from "os"

// 轮播图
interface Swiper {
	"image_src": string,
	"open_type": string,
	"goods_id": number,
	"navigator_url": string
}
// 导航栏
interface Nav {
	"name": string,
	"image_src": string,
	"open_type": string,
	"navigator_url": string
}
// 楼层
type Product = Array<{
	name: string,
	image_src: string,
	image_width: string,
	open_type: string,
	navigator_url: string
}>

type FloorMsg = Array<{
	floor_title: {
		name: string,
		image_src: string
	}
	product_list: Product
}>

interface FloorData {
	message: FloorMsg,
	meta: {
		msg: string,
		status: number
	}
}
// 分类
interface Meta {
	msg: string,
	status: number
}

type CateList = {
	cat_id: number,
	cat_name: string,
	cat_pid: number,
	cat_level: number,
	cat_deleted: boolean,
	cat_icon: string,
	children?: Array<CateList>
}
interface GoodsCateList {
	meta: Meta;
	message: CateList
}

// 商品列表
type goodsList = Array<{
	goods_id: number,
	cat_id: number,
	goods_name: string,
	goods_price: number,
	goods_number: number,
	goods_weight: number,
	goods_big_logo: string,
	goods_small_logo: string,
	add_time: number,
	upd_time: number,
	hot_mumber: number,
	is_promote: false,
	cat_one_id: number,
	cat_two_id: number,
	cat_three_id: number
}>
type messageList = {
	total: number,
	pagenum: number,
	goods: goodsList
}
type SearchList = {
	message: messageList,
	meta: Meta
}

// 商品搜索
type MessageGoods = Array<{
	goods_id: number,
	goods_name: string
}>
interface SearchGoods {
	message: MessageGoods,
	meta: Meta
}

// 商品详情
type Attrs=Array<{
	"goods_id": 8888,
	"attr_id": 9210,
	"attr_value": "户外直刀",
	"add_price": 0,
	"attr_name": "主体参数-类别",
	"attr_sel": "only",
	"attr_write": "manual",
	"attr_vals": "放大镜"
}>
type Pics=Array<{
	"pics_id": 38711,
	"goods_id": 8888,
	"pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
	"pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
	"pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg",
	"pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_800x800.jpg",
	"pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
	"pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg"
}>
interface Mess{
	"goods_id": 8888,
	"cat_id": 1085,
	"goods_name": "spike 经典武士大马士革直刀(微型) 户外野营直刀 收藏礼品刀 饰品刀具",
	"goods_price": 500,
	"goods_number": 100,
	"goods_weight": 100,
	"goods_introduce": "富文本内容",
	"goods_state": 2,
	"is_del": "0",
	"add_time": 1516361489,
	"upd_time": 1516361489,
	"delete_time": null,
	"hot_mumber": 0,
	"is_promote": false,
	"cat_one_id": 995,
	"cat_two_id": 1075,
	"cat_three_id": 1085,
	"goods_cat": "995,1075,1085",
}
interface goodsDetail{
	message:Mess,
	    meta: Meta
}
// 枚举
enum STATUS {
	CODE = 200
}

export {
	Swiper,
	Nav,
	FloorData,
	GoodsCateList,
	SearchList,
	SearchGoods
}