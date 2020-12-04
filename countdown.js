//HTML:index.wxml
  <view class="time">{{time1.day}}+'天'+{{time1.hour}} +'时'+{{time1.minute}}+'分'+{{time1.seconds}}+'秒'</view>

//JS部分
//index.js引用
import countdown from '../../utils/countdown.js'
data{
  time:null
}
countdown.init('2020-12-17 17:47:30','time',this)
//countdown.js
function addzero(num){
  return num>9?num:'0'+num;
}
class Countdown {
  static init(endTime,countdownId,that) {
    let end = new Date(endTime).getTime()
    that.setData({
      [countdownId]: {
        countdown: parseInt((end - new Date().getTime())/1000),
        day: parseInt((end - new Date().getTime())/1000/60/60/24),
        hour:parseInt((end - new Date().getTime())/1000/60/60%24) ,
        minute: addzero(parseInt((end - new Date().getTime())/1000/60%60)) ,
        seconds: addzero(parseInt((end - new Date().getTime())/1000)%60) 
      }
    })

    let interval = setInterval(() => {
      that.setData({
        [countdownId]: {
          countdown: parseInt((end - new Date().getTime())/1000),
          day: parseInt((end - new Date().getTime())/1000/60/60/24),
          hour:parseInt((end - new Date().getTime())/1000/60/60%24),
          minute: addzero(parseInt((end - new Date().getTime())/1000/60%60)),
          seconds: addzero(parseInt((end - new Date().getTime())/1000)%60)
        }
      })

      if (that.data[countdownId].countdown <= 0) {
        clearInterval(interval)
        that.setData({seconds: 0})
      }
    }, 1000)
    console.log(countdownId,444,that.data[countdownId])

  }
}
export default Countdown
