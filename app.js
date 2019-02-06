
//获取app实例
var app = getApp();
//小程序初始化，默认页面入栈，依次触发onLoad onShow onReady
//打开新页面，新页面入栈，依次触发onLoad onShow onReady
//页面重定向，当前页面出栈并卸载，触发当前页面onUnload，新页面入栈，触发onLoad onShow onReady
//页面返回，触发当前页面onUnload方法，触发新页面onShow方法
//Tab切换，当前页面出栈但不卸载，触发onHide方法，新页面入栈，如果是已加载过，仅触发onShow
//程序从前台到后台，触发当前页面onHide，触发App onHide
//程序从后台到前台，触发小程序onShow方法，触发页面onShow
Page({
    data: {//页面初始化数据
        count: 0
    },
    onLoad: function () {//可获取wx.navigateTo wx.redirectTo query参数
      //页面加载时执行
    },
    onShow:function(){
      //页面打开时执行
    },
    onReady: function(){
      //页面初次渲染完成执行
    },
    onHide: function(){
      //页面隐藏时执行
    },
    onUnload: function(){
      //页面卸载时执行
    },
    onPullDownRefresh: function(){//使用时需要将enablePullDownRefresh设置为true
      //下拉刷新时执行
    },
    onReachBottom: function(){
      //下拉触底时执行
    },
    countClick: function(){//自定义函数
      this.setData({
        count: this.data.count + 1
      })
    },
    customData: {//自定义数据
      name: "微信"
    },
    var pages = getCurrentPages()//获取当前页面栈的实例，数组形式，第一个元素是首页，最后一个元素是当前页面
});

模块使用
function run( who ) {
  console.log( who + ' run' );
}
function walk( who ) {
  console.log( who + ' walk' );
}
module.exports = {
  run : run,
  walk : walk
};
var otherMod = require( 'mod.js' );
Page( { 
  onShow : function() {
    otherMod.run( 'somebody' );
    otherMod.walk( 'somebody' );
  }
} );

