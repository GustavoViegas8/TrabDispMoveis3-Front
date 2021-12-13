import nookies, { parseCookies } from "nookies";
import axios from "axios"

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const setCookie = (Prefix, Value) => {
  nookies.set(null, Prefix, Value, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
}

export const getToken = () => {
  const cookie = parseCookies(null)
  return cookie.Token
}

export const likeMovie = (userId, movieId) => {
  let Comment = 'asdasd'
  let Note = 8
  axios.post(`http://localhost:5000/Comments/${userId}/${movieId}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    Comment,
    Note
  })
}