import axios from "axios";

export default {
  getNotices: async (route: string) => {
    try {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${route}.json?api-key=QHKp0232LFP75IddG2zhwd308vQ1ux0q`
      );

      return data.results;
    } catch (error) {
      console.error(error);
    }
  },
};
