import axios from "axios";

const watchingURL = `${process.env.VUE_APP_BACKEND_URL}/api/user/watching`;

class WatchingService {
  // Get Watching List from mongo and maps it in json for the user to see in the front end
  static getWatching() {
    return new Promise((resolve, reject) => {
      axios
        .get(watchingURL, { headers: { token: localStorage.getItem("token") } })
        .then((res) => {
          const data = res.data;
          resolve(
            data.map((watching) => ({
              ...watching,
            }))
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default WatchingService;
