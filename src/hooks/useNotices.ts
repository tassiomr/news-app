import { useEffect, useState } from "react";
import store from "../stores/notices.store";
import axios from "axios";

export default function useNotices() {
  const [kindNotice, setNotice] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const data = store((store) => store[kindNotice]);

  const getNotices = async () => {
    try {
      if (data === null) {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/${kindNotice}.json?api-key=QHKp0232LFP75IddG2zhwd308vQ1ux0q`
        );

        store.setState({ [kindNotice]: data.results });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNotices();
  }, [kindNotice]);

  return {
    kindNotice,
    isLoading,
    changeNotice: (text: string) => setNotice(text),
    notices: data,
  };
}
