import Axios from "axios";

export default {
  registers: function () {
    return Axios.get("/moon-server/api/task/invitations");
  },
};
