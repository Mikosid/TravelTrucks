import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCatalog = async () => {
  const response = await axios.get("/campers");
  return response.data;
};

export const getCatalogById = async () => {
  const response = await axios.get(`/campers/${campersId}`);
  return response.data;
};
