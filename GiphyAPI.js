import axios from "axios";

const GIPHY_API_URL = "https://api.giphy.com/v1/gifs/trending?"
const GIPHY_API_KEY = "Awq5410QQl0416nJogqlsinldM2s9PCA"

/** GiphyAPI Class for making axios call to GiphyAPI*/
class GiphyApi {

  /** Get top (limit #) of trending GIFs and return [url1, url2, ...] */
  static async getTrending(limit=50) {
    try {
      let response = await axios.get(`${GIPHY_API_URL}api_key=${GIPHY_API_KEY}&limit=${limit}`);
      let gifUrls = response.data.data.map(data=>data.images.original.url)
      return gifUrls;
    } catch (err) {
      return err;
    }
  }
}

export default GiphyApi;