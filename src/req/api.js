import { Get, Post } from './http.js'

const requestPath = {
  list: 'topics/list', //话题列表 ?key=1&maxid=10000&minid=0&count=10&desc=true&friendonly=false"
  checkHas: 'topics/has', //查询是否点赞 key=232904&type=2&ids=628,640,641,548"  type--> 2 收藏,  1点赞, 4不喜欢
  praise: 'topics/praise', //点赞  key=1&uid=0&tid=641&cancel=true" -X POST TopicPraise // cancel=true 是否取消点赞
  favorite: 'topics/favorite', //收藏 ?key=1&uid=0&tid=641&cancel=true" -X POST TopicFavorite
  topicinfo: 'topics/info', // 话题详情 ?key=1&ids=640,641"TopicQueryByID
  conList: 'topics/comment/list', //评论列表 key=1&tid=627&cid=0&maxid=10000&minid=0&count=10&desc=true" TopicCommentListQuery   desc:倒叙 正序  cid：0一级评论 有id二级评论
  listSub: 'topics/comment/list_sub', //二级评论列表 ?key=1&tid=626&cids=1641,1637&count=3&desc=true" TopicCommentSubListQuery
  creatCom: 'topics/comment/create', //发表评论 ?key=1" -d "tid=627&cid=0&anonymous=1&content={"text":"hello world!"}" -X POST TopicCommentCreate
  createTopic: 'topics/create', //创建话题 ?key=1" -d "access=8&anonymous=0&types=1&location=go&labels=hello,world&content={"text":"hello world!"}" -X POST TopicCreate

  uploadFile: 'storelet/storage/admin', //文件上传
  userLogin: 'account/login', //普通用户登陆(马甲账号登陆) "uid=${uid}&sign=md5(t${timestamp}p${passwd})&timestamp=timestamp"

  userinfo: 'account/auth_sign/userinfo' //用户信息
}

/**
 * 普通用户登陆
 * @param data ： 请求数据
 * @returns {Promise<any>}
 */
export const userLogin = data => Post(requestPath.userLogin+'?os='+data.os, data)

/**
 * 获取话题列表
 * @param data
 * @returns {Promise<any>}
 */
export const getListInfo = data => Get(requestPath.list, data)

/**
 * 获取用户信息
 * @param data
 * @returns {Promise<any>}
 */
export const getUserInfo = data => Get(requestPath.userinfo, data)

