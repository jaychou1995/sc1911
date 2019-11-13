// pages/login/login.js
Page({
	data:{
		phone_number:'',
		code:''
	},
	getPhone(e){
		if(e.detail.value.length != 11){
			wx.showToast({
				title:'手机号码错误!',
				icon:'none'
			})
		}
		this.setData({
			phone_number:e.detail.value
		})
	},
	getCode(e){
		this.setData({
			code:e.detail.value
		})
		wx.showToast({
			title:'请输入六位数验证码!',
			icon:'none'
		})
	},
	login(){
		wx.request({
			url:'http://www.hengyishun.cn/login/login',
			data:({
				phone:this.data.phone_number,
				code: this.data.code
			}),
			success(res){
				success(res){
				  if(res.data == "true"){
				    wx.showToast({
				      title: '登陆成功',
				    });
				    wx.switchTab({
				      url:'/pages/index/index'
				    })
				  }
				}
			}
		})
	}
})
