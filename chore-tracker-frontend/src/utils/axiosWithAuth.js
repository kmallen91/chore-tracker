import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("userID");
  return axios.create({
    baseURL: "https://chore-tracker-bw.herokuapp.com",
    headers: {
      Authorization: token,
      user_id: user_id
    }
  });
};
