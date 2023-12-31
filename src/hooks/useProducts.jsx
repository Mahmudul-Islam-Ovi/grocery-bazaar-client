import { useQuery } from "@tanstack/react-query";
import { BaseUrl } from "../component/BaseUrl/BaseUrl";

const useProducts = () => {
  const {
    isPending,
    isError,
    data: products = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${BaseUrl}/products`);
      return res.json();
    },
  });
  if (isPending) {
    return (
      <div>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return { products, refetch };
};

export default useProducts;
