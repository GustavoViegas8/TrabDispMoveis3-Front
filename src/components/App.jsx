import { DataContextProvider } from "../contexts/DataContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import { Cards } from "./Cards";
export const App = () => {
  const [cardData, setCardData] = useState([]);
  const [user, setUser] = useState(false);

const getCardData = () => {
    axios.get("http://localhost:5000/MoviesCommenteds").then((res) => {
      setCardData(res?.data?.Data);
    });
  };

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <DataContextProvider
      cardData={cardData}
      setCardData={setCardData}
      user={user}
      setUser={setUser}
      getCardData={getCardData}
    >
      <Navbar cardData={cardData} setCardData={setCardData} user={user} setUser={setUser} getCardData={getCardData} />
      <div className="row">
        {cardData?.map((data, index) => (
          <Cards key={index} data={data} />
        ))}
      </div>
    </DataContextProvider>
  );
};
