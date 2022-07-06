import axios from "axios";

const register_url = `http://${process.env.VUE_APP_BACKEND_URL}/api/user/register`;
//Never used
class AccountService {
  // Create an Account
  static createAcc() {
    return axios.post(register_url, {});
  }
}
