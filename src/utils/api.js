import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + url,
      params
    );

    return data;
  } catch (error) {
    return error;
  }
};
