import axios from 'axios';
import './statusCode';

// 开发环境
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://127.0.0.1:80/';

  // 生产环境
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://www.zlclclc.cn/';
}

// 请求拦截
axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 请求列表
const requestUrlList = {
  getBeforehandToken: '/get_token',
  getToken: '/exist_token',
  search: '/search',
  getSongInfoById: '/id',
  getHotSongList: '/TopSongList'
};

/**
 * 获取预 token：
 * 得到服务器发放的预 token，这个 token 只有一分钟的时效
 * 你需要在一分钟内通过之前早已发放的 RSA 公钥验证随接口返回的签名有效性
 * 验证签名后，请求 API 接口 getToken 去使预 token 生成长效 token（目前有效期为2天）
 * 或者签名不正确的话，接口 getToken 会返回新的预 token 用于验签
 */
export const getBeforehandToken = () => {
  return axios.get(requestUrlList.getBeforehandToken);
};

/**
 * 获取长效 token（有效期为两天）
 * @param {number} signValid 本地验证签名是否有效，有效传入 1，无效传入 0，返回无效的话会将发放新的预token；默认值为 0
 * @param {string} token 发放的预 token
 * @param {string} userId 用户是登录状态请求token时（即请求 get_token 地址时为 post 请求的）必须提供 user_id/open_id 否则不需要，系统将提供默认用户名
 */
export const getToken = (signValid = 0, token, userId) => {
  return axios.post(requestUrlList.getToken, {
    sign_valid: signValid,
    token,
    user_id: userId
  });
};

/**
 * 搜索歌曲
 * @param {string} title 关键字，主要的内容是 “歌手名/歌曲名”，例如:纸短情长，张学友
 * @param {string} platform 音乐平台
 * @param {number} page 搜索页，不加入该参数默认返回第一页10首，通过增加page来改变搜索信息
 */
export const search = (title, platform, page = 0) => {
  return axios.post(requestUrlList.search, {
    title,
    platform,
    page
  });
};

/**
 * 根据歌曲 id 获取某首歌曲详细 id
 * @param {string}} id 歌曲 id
 * @param {string} platform 音乐平台
 */
export const getSongInfoById = (id, platform) => {
  return axios.post(requestUrlList.getSongInfoById, {
    id,
    platform
  });
};

/**
 * 获取 21 个热门歌单数据：
 * 暂时仅提供GET请求
 * 返回的歌单数据均为Kugoumusic
 * 在请求详细歌单时，请将平台写为 Kugoumusic
 */
export const getHotSongList = () => {
  return axios.get(requestUrlList.getHotSongList);
};
