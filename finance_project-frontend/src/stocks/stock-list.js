import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { apiFavoriteStocks } from "./lookup";

export const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleFavoriteStocks = (response, status) => {
      if (status === 200) {
        setStocks(response.data);
        setIsLoading(false);
      }
    };
    apiFavoriteStocks(handleFavoriteStocks);
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      {stocks.map((stock, index) => {
        return <h1 key={stock.id}>{`${stock.symbol} - ${stock.name}`}</h1>;
      })}
    </>
  );
};

// StockList.propTypes = {
//   symbols: PropTypes.arrayOf(PropTypes.object),
// };
