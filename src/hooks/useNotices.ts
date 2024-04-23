import { useEffect, useState } from "react";
import store from "../stores/notices.store";
import noticesService from "../services/notices.service";

export default function useNotices() {
  const [kindNotice, setNotice] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const data = store((store) => store[kindNotice]);

  const handleGetNotices = async () => {
    try {
      if (data === null) {
        setIsLoading(true);
        const data = await noticesService.getNotices(kindNotice);

        store.setState({ [kindNotice]: data });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetNotices();
  }, [kindNotice]);

  return {
    kindNotice,
    isLoading,
    changeNotice: (text: string) => setNotice(text),
    notices: data,
  };
}
