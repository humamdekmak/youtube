import axios from "axios";
const KEY = "AIzaSyD83hex5fzJQoe0hg05ss3eySspjSh0F3k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
