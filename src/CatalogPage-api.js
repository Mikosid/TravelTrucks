import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCatalogPage = async () => {
  const response = await axios.get("/campers");
  return response.data;
};

export const getCatalogPageById = async () => {
  const response = await axios.get(`/campers/${campersId}`);
  return response.data;
};
