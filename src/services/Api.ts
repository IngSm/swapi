import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api/";

export default async function getFilms(id: number | null) {
  if (id === null) {
    try {
      const response = await axios.get("/films");
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const response = await axios.get(`/films/${id}`);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
}
