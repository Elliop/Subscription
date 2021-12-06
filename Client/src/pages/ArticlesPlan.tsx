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
  const backgroundColors: any = {
    Basic: "rgb(104, 219, 104)",
    Standard: "rgb(185, 42, 23, 0.835)",
    Premium: "pink",
  };

  const createSession = async (priceId: string) => {
    const { data: response } = await axios.post(
      "http://localhost:8080/subs/session",
      {
        priceId,
      }
    );

    window.location.href = response.url;
  };

  return (
    <div className="w-full pt-8">
      <div className="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
        {prices.map((price: any) => (
          <div
            style={{ backgroundColor: backgroundColors[price.nickname] }}
            className="sm:flex-1 lg:flex-initial lg:w-1/4 rounded-t-lg rounded-md mt-4 flex flex-col mx-6"
          >
            <div className="p-8 text-3xl font-bold text-center">
              ${price.unit_amount / 100}
            </div>
            <div className="p-8 text-3xl font-bold text-center">
              {price.nickname}
            </div>
            <button
              onClick={() => createSession(price.id)}
              className="inline-block bg-blue-300 text-white px-6 py-4 rounded hover:bg-green-darker hover:text-white hover:no-underline"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPlan;
