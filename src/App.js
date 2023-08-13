
import './App.css';
import Airline from './componants/Airline';
import Filter from './componants/Filter';
import Navbar from './componants/Navbar';
import React, { useEffect, useState } from 'react';
import data from './file.json';

function App() {
  const [parsedData, setparsedData] = useState([]);
  // const [mapdata, setMapdata] = useState();

  const filterAirLineNames = (airLineNames) => {
    const newParsedData = data.filter(data => {
      return airLineNames.some(airLineName => airLineName.isSelected && airLineName.name === (data.Segments[0].Airline?.AirlineName))
    })

    const isNameFilterApplied = airLineNames.some(airLineName => airLineName.isSelected);
    isNameFilterApplied ? setparsedData(newParsedData) : setparsedData(data);
  }

  useEffect(() => {
    // // eslint-disable-next-line
    setparsedData(data)
  }, [])

  return (
    <div className='app-body'>
      <Navbar />
      <div className="componant-container">
        <Filter filterAirLineNames={filterAirLineNames} />
        <div className="direction-container">
          {parsedData.map((item, index) => {
            return (
              <Airline key={index}
                name={item.Segments[0].Airline?.AirlineName}
                departure={item.Segments[0].Origin?.DepTime.slice(-8,-3)}
                distance={item.Segments[0].Duration}
                stopage={item.Segments[0].StopOver ? 'stop1' : 'Non stop'}
                arrival={item.Segments[0].Destination?.ArrTime.slice(-8,-3)}
                price={item.Fare?.OfferedFare}
              />

            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
