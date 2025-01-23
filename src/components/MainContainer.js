import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState("none");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  const handleBuyStock = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const handleSellStock = (stock) => {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  };

  const sortedStocks = () => {
    let sorted = [...stocks];
    if (sortType === "alphabetical") {
      sorted.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (sortType === "price") {
      sorted.sort((a, b) => a.price - b.price);
    }
    return sorted;
  };

  const filteredStocks = () => {
    return filterType === "All"
      ? sortedStocks()
      : sortedStocks().filter((stock) => stock.type === filterType);
  };

  return (
    <div>
      <SearchBar
        setSortType={setSortType}
        setFilterType={setFilterType}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredStocks()}
            onStockClick={handleBuyStock}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onStockClick={handleSellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
