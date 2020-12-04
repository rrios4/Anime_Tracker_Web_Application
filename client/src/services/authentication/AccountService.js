import axios from "axios";

const register_url = "http://localhost:5000/api/user/register";
//Never used
class AccountService {
  // Create an Account
  static createAcc() {
    return axios.post(register_url, {});
  }
}
