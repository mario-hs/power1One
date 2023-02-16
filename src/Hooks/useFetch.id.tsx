import { useEffect, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  price: string;
  description: any;
  image: any[];
}

// criando o próprio hook para não ter que ficar poluindo o componente
export const useFetchId = (url: string) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [isPeding, setIsPeding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Não foi possível buscar os dados para esse recurso");
          }
          return res.json();
        })
        .then((data) => {
          const { Product } = data;
          setData([
            {
              id: Product.id,
              name: Product.name,
              price: Product.price.replace(".", ","),
              description: Product.description.replace(/(<([^>]+)>)/gi, ""),
              image: Product.ProductImage,
            },
          ]);
          setIsPeding(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Requisão abortada");
          } else {
            setError(err.message);
            setIsPeding(false);
          }
        });

      return () => abortCont.abort();
    }, 1000);
  }, []);

  return { data, isPeding, error };
};
