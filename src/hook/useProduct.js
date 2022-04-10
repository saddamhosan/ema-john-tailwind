import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
          setProduct(data);
          console.log(data);
      });
  }, []);
  return [products, setProduct];
};
export default useProduct