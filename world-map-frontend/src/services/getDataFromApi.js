import { useEffect } from "react";

const useGetDataApi = ({ continent, setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/${continent}/`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [continent, setData]);
};

export default useGetDataApi;
