
import './App.css';
import Airline from './componants/Airline';
import Filter from './componants/Filter';
import Navbar from './componants/Navbar';
import React, { useEffect, useState } from 'react';
import data from './file.json';

function App() {
  const [parsedData, setparsedData] = useState([]);

  // Filter by Arrival time function prop
  const filterArrivalTime = (time) => {
    const newParsedData = data.filter((data) => {
      return time.some((slotTime) => slotTime.isChecked && data.Segments[0].Destination?.ArrTime.slice(-8, -6) < slotTime.name)
    })
    const isFilterApplied = time.some(slotTime => slotTime.isChecked);
    isFilterApplied ? setparsedData(newParsedData) : setparsedData(data);
  }


  // ------------------------------------------------------------------------------------------------------

  //Filter by departure time function as a prop
  const filterDepartureTime = (time) => {
    const newParsedData = data.filter((data) => {
      return time.some((slotTime) => slotTime.isChecked && data.Segments[0].Origin?.DepTime.slice(-8, -6) < slotTime.id)
    })
    const isFilterApplied = time.some(slotTime => slotTime.isChecked);
    isFilterApplied ? setparsedData(newParsedData) : setparsedData(data);
  }




  // ------------------------------------------------------------------------------------------------

  // Filter by Price Slider function as prop
  const FilterByPrice = (price) => {
    const newParsedData = data.filter((data) => {
      return data.Fare?.OfferedFare >= 3000 && data.Fare?.OfferedFare <= price;
    })
    setparsedData(newParsedData)
  }


  // -----------------------------------------------------------------------------------  

  // Filter by Stop and Non stop function as prop
  const filterFlightTypes = (flightTypes) => {
    const newParsedData = data.filter((data) => {
      return flightTypes === data.Segments[0].StopOver
    })
    const isFilterApplied = flightTypes === false;
    isFilterApplied ? setparsedData(newParsedData) : setparsedData(data);
  }


  // --------------------------------------------------------------------
  // Filter by Airline Names function as prop
  const filterAirLineNames = (airLineNames) => {
    const newParsedData = data.filter(data => {
      return airLineNames.some(airLineName => airLineName.isSelected && airLineName.name === (data.Segments[0].Airline?.AirlineName))
    })

    const isNameFilterApplied = airLineNames.some(airLineName => airLineName.isSelected);
    isNameFilterApplied ? setparsedData(newParsedData) : setparsedData(data);
  }

  // --------------------------------------------------------------------

  // useEffect function
  useEffect(() => {
    setparsedData(data)
  }, [])

  return (
    <div className='app-body'>
      <Navbar />
      <div className="componant-container">
        <Filter filterAirLineNames={filterAirLineNames} filterFlightTypes={filterFlightTypes} FilterByPrice={FilterByPrice} filterDepartureTime={filterDepartureTime} filterArrivalTime={filterArrivalTime} />
        <div className="direction-container">
          {parsedData.map((item, index) => {

            return (
              <Airline key={index}
                name={item.Segments[0].Airline?.AirlineName}
                departure={item.Segments[0].Origin?.DepTime.slice(-8, -3)}
                distance={item.Segments[0].Duration}
                stopage={item.Segments[0].StopOver ? 'stop1' : 'Non stop'}
                arrival={item.Segments[0].Destination?.ArrTime.slice(-8, -3)}
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
