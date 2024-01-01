import { useEffect, useState } from "react";
import { BaseUrl } from "../component/BaseUrl/BaseUrl";

const useData = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${BaseUrl}/menu`)
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
        setLoading(false);
      });
  }, []);

  return [menuData, loading];
};

export default useData;
