//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
	  navList:[],
	  productList:[
	        {
	          "id" : 1,
	          "name":"华为Mate 30",
	          "src" : "/images/temp/cate1.jpg",
	          "price" : 4099  
	        },
	        {
	          "id": 2,
	          "name": "华为Mate 30",
	          "src": "/images/temp/cate2.jpg",
	          "price": 4099  
	        },
	        {
	          "id": 3,
	          "name": "华为Mate 30",
	          "src": "/images/temp/cate3.jpg",
	          "price": 4099  
	        },
	        {
	          "id": 4,
	          "name": "华为Mate 30",
	          "src": "/images/temp/cate4.jpg",
	          "price": 4099  
	        },
	        {
	          "id": 5,
	          "name": "华为Mate 30",
	          "src": "/images/temp/cate5.jpg",
	          "price": 4099  
	        },
	        {
	          "id": 6,
	          "name": "华为Mate 30",
	          "src": "/images/temp/cate6.jpg",
	          "price": 4099  
	        },
	        {
	          "id": 7,
	          "name": "华为Mate 30",
	          "src": "/images/temp/cate7.jpg",
	          "price": 4099
	        },
	        {
	          "id": 8,
	          "name": "华为Mate 30",
	          "src": "/images/temp/cate8.jpg",
	          "price": 4099
	        },
	        {
	          "id": 9,
	          "name": "华为Mate 30",
	          "src": "/images/temp/cate9.jpg",
	          "price": 4099
	        },
	        {
	          "id": 10,
	          "name": "华为Mate 30",
	          "src": "/images/temp/cate10.jpg",
	          "price": 4099,
	          checked:true
	        },]

  },
  getNavList(){
	  let that = this
	  wx.request({
		  url:'http://www.hengyishun.cn/login/navList',
		  success(res) {
			let navList = res.data
			that.setData({
				navList:navList
			})
		  }
	  })
  },
  getProductList(){
  	  let that = this
  	  wx.request({
  		  url:'http://www.hengyishun.cn/login/getProductList',
  		  success(res) {
  		  	console.log(res);
  			let ProductList = res.data
  			that.setData({
  				ProductList:ProductList
  			})
  		  }
  	  })
  },
  onLoad(){
	  this.getNavList()
	  // this.getProductList()
  }
})
