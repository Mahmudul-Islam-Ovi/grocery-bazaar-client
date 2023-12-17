import { useEffect, useState } from "react";

const useData = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://grocery-bazaar-server.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
        setLoading(false);
      });
  }, []);

  return [menuData, loading];
};

export default useData;
