import axios from "axios";

export default function axiosWithAuth() {
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("userId");
  return axios.create({
    baseURL: "https://chore-tracker-bw.herokuapp.com",
    headers: {
      Authorization: token,
      user_id: user_id
    }
  });
}
