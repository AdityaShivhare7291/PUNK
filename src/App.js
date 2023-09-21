import React from 'react'
import Navbar from './components/navbar.js'
import FrontCards from './components/fronts_card.js'
import BackCards from './components/backs_card.js'
import contents from './components/content.js';
import { useEffect ,useState} from 'react';
import axios from 'axios';
export default function App() {
  
  const [data, setData] = useState([]); 
  const [dummy,setdummy]=useState([]);
  function handleSearchClick(searchVal) {
    console.log(searchVal);
    if (searchVal === "") { setData(dummy); return; }
    const filterBySearch = data.filter((item) => {
        if (item.name.toLowerCase()
            .includes(searchVal.toLowerCase())) { return item; }
    })
    setData(filterBySearch);
}
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        setData(response.data); 
        setdummy(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  console.log(data);
  return (
    <>
    <Navbar data={data}  func={handleSearchClick}/>
    <br/>
    <div className='App'>
      {data.map(contents => (
        <div class="flip-card">
        <div class="flip-card-inner">
        <FrontCards data={contents}/>
        <BackCards data={contents}/>
      </div>
    </div>
                    
    ))}
    </div>
    </>
  )
}
