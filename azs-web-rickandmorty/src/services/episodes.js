import axios from "axios";
import GRAPHQL_API from "./api";

export async function fetchEpisodes(value, setLoading = () => { }) {
  try {
    setLoading(true);
    const queryResult = await axios.post(
      GRAPHQL_API, {
      query: `query episodes {
                episodes(filter: { name: "${value}"}) {
                  results {
                    id
                    name
                    air_date
                    episode
                    characters {
                      name
                      status
                      image
                      species
                    }
                  }
                }
              }`
    });
    const response = queryResult.data.data;
    if (response && response.episodes) {
      return response.episodes;
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
}