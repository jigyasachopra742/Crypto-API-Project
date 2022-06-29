import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import Coins from './components/coins';
import Coin from './routes/coin';
import Navbar from './components/navbar';


function App() {
  
  const [coins, setcoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setcoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  
  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element = { <Coins coins={coins}/>} />
          <Route path="/coin" element={<Coin />}> 
            <Route path=':coinId' element={<Coin />} />
          </Route>
     </Routes>
    
    </>
  );
}

export default App;
