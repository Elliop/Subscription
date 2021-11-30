import axios from "axios";
import { useEffect, useState } from "react";

const ArticlesPlan = () => {
  const [prices, setPrices] = useState<any[]>([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data: response } = await axios.get(
      "http://localhost:8080/subs/prices"
    );
    console.log(response);
    setPrices(response.data);
  };

  return (
    <div className="w-full pt-8">
      <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
        {prices.map((price: any) => (
          <div className="sm:flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-md bg-blue-200 mt-4 flex flex-col mx-6">
            <div className="p-8 text-3xl font-bold text-center">
              ${price.unit_amount / 100}
            </div>
            <div className="p-8 text-3xl font-bold text-center">
              {price.nickname}
            </div>
            <button className="inline-block bg-green-300 text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPlan;
