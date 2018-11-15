/* eslint-disable */

const _randInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
	//The maximum is exclusive and the minimum is inclusive
}

export const _nwc = (x) => {
	var parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}

function genComarketItemList(data) {
	var arr = []

	var i = 0;
	Object.keys(data).forEach(function(key) {
		let result = {
			_id: i,
			title: data[key].title,
			desc: data[key].desc,
			count_like: _nwc(_randInt(0, 10000)),
			price: _nwc(_randInt(0, 1000)*100)
		}
		arr.push(result)
		i++
	})
	return arr
}

function genComarketItemListx(num) {
	var arr = []

	for (var i = 0; i < num; i++) { 
		let result = {
			_id: i,
			title: "ITEM TITLE",
			desc: "DESCRIPTION",
			count_like: _nwc(_randInt(0, 10000)),
			price: _nwc(_randInt(0, 1000)*100)
		}
		arr.push(result)
	}
	return arr
}

function genStreamerList(data) {
	var arr = []

	var i = 0;
	Object.keys(data).forEach(function(key) {
		let result = {
			_id: i,
			streamer: data[key].streamer,
			msg: data[key].msg,
			status: data[key].status
		}
		arr.push(result)
		i++
	})
	return arr
}

function genStreamerListx(num) {
	var arr = []

	for (var i = 0; i < num; i++) { 
		let result = {
			_id: i,
			streamer: "STREAMER NAME",
			msg: "STATUS",
			status: "온라인"
		}
		arr.push(result)
	}
	return arr
}


var streamers = [
	{streamer: "서새봄냥", msg: "헤헤 귀여워 ^_^", status: "온라인"},
	{streamer: "ryujehong", msg: "류제홍님이 생방송을 시작했습니다", status: "온라인"},
	{streamer: "빡수", msg: "[슬픔] 혼자 만든 게임 혼자 플레이 중", status: "온라인"},
	{streamer: "아나넘버원", msg:"[오버워치] 3300+ 아나 원챔으로 그마 가즈아!", status:"온라인"},
	{streamer: "ClickNDrag", msg: "[듀랑고] 귀찮아서 그냥 안끄는 방송", status: "온라인"},
	{streamer: "쭈니", msg: "[배틀그라운드] 존버 메타 실천 중", status:"온라인"},
]


var comarket_items = [
	{title: "서새봄냥 바탕하면 ^_^", desc: "고화질 졸귀"},
	{title: "아나넘버원 ㅍㅌ", desc: "이틀 입음. 세탁 X"},
	{title: "류제홍 포스터", desc: "feat. MIRO"},
	{title: "철구 짤 모음집", desc: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"},
	{title: "서새봄 폰 잠금화면 ^_^", desc: "귀여엉 ^_^"},
]


var total_users = 53200
var total_conas = 43746652
var exchange_rate = 3.141592
var total_streamer = 578
var total_item = 6381
var my_streamer = 17
var my_item = 58


export var data_for_home = {
	count_total_users: total_users,
	count_total_conas: total_conas,
	cona_exrate: exchange_rate,

	count_all_cona_streamers: _nwc(total_streamer),
	count_all_comarket_items: _nwc(total_item),
	featured_streamers: genStreamerList(streamers),
	comarket_items : genComarketItemListx(12),
}

export var data_for_streamers = {
	count_my_cona_streamers: _nwc(my_streamer),
	count_all_cona_streamers: _nwc(total_streamer),
	following_streamers : genStreamerListx(3),
	all_streamers : genStreamerListx(6),
}

export var data_for_comarket = {
	count_my_comarket_items: _nwc(my_item),
	count_all_comarket_items: _nwc(total_item),
	following_items : genComarketItemListx(6),
	all_items : genComarketItemListx(12),
}






