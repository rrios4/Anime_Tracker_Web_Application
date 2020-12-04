import axios from "axios";

class SearchAnime {
  // This spits out search results from the users and x is the input from the user and it is mapped into json
  static getAnime(x) {
    const url = `https://api.jikan.moe/v3/search/anime?q=${x}`;
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          resolve(
            data.results.map((anime) => ({
              ...anime,
            }))
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  //This is the service that gets the specific anime the user want to add to their watching list and response only data I wanted from the api which will be used for my databse in mongo
  static getAnimeById(id) {
      const url = `https://api.jikan.moe/v3/anime/${id}`
      return new Promise((resolve, reject) => {
          axios.get(url)
            .then((res) => {
                const data = res.data;
                resolve({
                    mal_id: data.mal_id,
                    url: data.url,
                    image_url: data.image_url,
                    title: data.title,
                    airing: data.airing,
                    synopsis: data.synopsis,
                    type: data.type,
                    episodes: data.episodes,
                    score: data.score,
                    start_date: data.aired.from,
                    end_date: data.aired.to,
                    members: data.members,
                    rated: data.rating
                });
            })
            .catch((err) => {
                reject(err);
            })
      })
  }
}

export default SearchAnime;
