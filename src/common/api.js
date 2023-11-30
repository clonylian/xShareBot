import Axios from "axios";
// Axios.defaults.baseURL = 'http://moon.xiaoliumang.com.cn/moon-server/'
export default {
  registers: function (data) {
    return Axios.post("/moon-server/api/common/register-list", data);
  },
  login: function (data) {
    return Axios.post("http://moon.xiaoliumang.com.cn/moon-server/api/common/user-login", data);
  },
  link: function (data) {
    return Axios.post("/moon-server/api/common/user-link", data);
  },
  verifyinvitation: function (data) {
    return Axios.post("/moon-server/api/common/invitation-code-verify", data);
  },
  createinvitation: function (data) {
    return Axios.post("/moon-server/api/common/invitation-code-create", data);
  },
  submit: function (data) {
    return Axios.post("/moon-server/api/common/task-submit", data);
  },
  point: function (data) {
    return Axios.post("/moon-server/api/common/point", data);
  },
  toppoint: function (data) {
    return Axios.post("/moon-server/api/common/top-point", data);
  },
  task: function (data) {
    return Axios.post("/moon-server/api/common/user-task", data);
  },
};
