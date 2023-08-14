import React, { useState } from 'react'
import '../style/Filter.css'
import 'semantic-ui-css/semantic.min.css'



function Filter({ filterAirLineNames, filterFlightTypes, FilterByPrice, filterDepartureTime, filterArrivalTime }) {

    const [timeSlotsA, setTimeSlotsA] = useState([
        { name: '6', isChecked: false },
        { name: '12', isChecked: false },
        { name: '18', isChecked: false },
        { name: '24', isChecked: false },
    ]);

    const handleArrival = (e) => {
        const updatedTimeSlots = timeSlotsA.map(slot => {
            return slot.name === e.target.value ? { name: slot.name, isChecked: !slot.isChecked } : slot;
        })
        setTimeSlotsA(updatedTimeSlots);
        filterArrivalTime(updatedTimeSlots);

    }



    // -------------------------------------------------------------------------------------------    

    // Filter by Departure Time function Logic
    const [timeSlots, setTimeSlots] = useState([
        { id: '6', isChecked: false },
        { id: '12', isChecked: false },
        { id: '18', isChecked: false },
        { id: '24', isChecked: false },
    ]);


    const handleDeparture = (e) => {
        const updatedTimeSlots = timeSlots.map(slot => {
            return slot.id === e.target.value ? { id: slot.id, isChecked: !slot.isChecked } : slot;
        })
        setTimeSlots(updatedTimeSlots);

        filterDepartureTime(updatedTimeSlots);

    }



    // ---------------------------------------------------------------------------------------
    //Filter by Price slider functions logic
    const [sliderValue, setsliderValue] = useState(5000);
    let price = `₹${sliderValue}`;

    const handlePrice = (e) => {
        setsliderValue(e.target.value)
        FilterByPrice(sliderValue)
    }


    // ---------------------------------------------------------------------------

    // Filter by Stop and non stop checkbox function logic
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false
    });

    const handleCheckboxChange = (event) => {
        const checkboxId = event.target.id;
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes,
            [checkboxId]: !prevCheckboxes[checkboxId],
        }));

        checkboxId === 'checkbox1' ? filterFlightTypes(checkboxes.checkbox1) : filterFlightTypes(checkboxes.checkbox2)

    };

    // ---------------------------------------------------------------------------
    // Filter by Airline Names checkbox Function Logics
    const [airLineNames, setAirLineNames] = useState([
        {
            name: 'Air India',
            isSelected: false
        },
        {
            name: 'Air Asia',
            isSelected: false
        },
        {
            name: 'Indigo',
            isSelected: false
        },
        {
            name: 'SpiceJet',
            isSelected: false
        },
        {
            name: 'Vistara',
            isSelected: false
        }])


    const handAirlineNameChange = (e) => {
        const newAirLineNames = airLineNames.map(airLineName => {
            return airLineName.name === e.target.value ? { name: airLineName.name, isSelected: !airLineName.isSelected } : airLineName;
        })
        setAirLineNames(newAirLineNames);
        filterAirLineNames(newAirLineNames);
    }
    // ----------------------------------------------------------------------------------------

    return (
        <>

            <div className='filter position-sticky sticky'>
                <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bold', padding: '10px 0px 10px 0px', margin: '0px' }}>Popular Filters</h3>

                {/* one way price slider */}
                <div className="slider-container">
                    <label htmlFor="customRange1" className="form-label" style={{ fontWeight: 'bold' }}>One Way Price</label>
                    <input type="range" onChange={(e) => { handlePrice(e) }} min="3000" max="7000" step='50' value={sliderValue} className='form-range' id="customRange1" data-tooltip={price} data-position="top center" />
                    <div className="p-container" >
                        <p>₹3000</p>
                        <p>₹7000</p>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------------------- */}

                {/* Stop and Non-stop */}
                <div className="stop-container">
                    <h4>Stop and Non Stop</h4>
                    <div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    id="checkbox1"
                                    checked={checkboxes.checkbox1}
                                    onChange={handleCheckboxChange}
                                />
                                Stop1
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    id="checkbox2"
                                    checked={checkboxes.checkbox2}
                                    onChange={handleCheckboxChange}
                                />
                                Non Stop
                            </label>
                        </div>
                    </div>
                </div>

                {/* --------------------------------------------------------------------------------------------------------------*/}

                {/* Departure time */}
                <div className="departure-arrival-container">
                    <h4>Departure Timing</h4>
                    <div className="btn-group time-range-container" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" onChange={(e) => { handleDeparture(e) }} checked={timeSlots.isChecked} value='6' className="btn-check" id="6" />
                        <label className="btn btn-outline-primary font-size" htmlFor="6"> Before 6 AM</label>

                        <input type="checkbox" onChange={(e) => { handleDeparture(e) }} checked={timeSlots.isChecked} className="btn-check" value='12' id="12" />
                        <label className="btn btn-outline-primary font-size" htmlFor="12">6 AM-12 PM</label>

                        <input type="checkbox" onChange={(e) => { handleDeparture(e) }} checked={timeSlots.isChecked} className="btn-check" value='18' id="18" />
                        <label className="btn btn-outline-primary font-size" htmlFor="18">12 PM-6 PM</label>

                        <input type="checkbox" onChange={(e) => { handleDeparture(e) }} checked={timeSlots.isChecked} className="btn-check" value='24' id="24" />
                        <label className="btn btn-outline-primary font-size" htmlFor="24">After 6 PM</label>
                    </div>
                </div>
                {/* ---------------------------------------------------------------------------------------------------------------- */}
                {/* Arrival time */}
                <div className="departure-arrival-container">
                    <h4>Arrival Timing</h4>
                    <div className="btn-group time-range-container" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" onChange={(e) => { handleArrival(e) }} className="btn-check" id="6A" checked={timeSlotsA.isChecked} value='6' />
                        <label className="btn btn-outline-primary font-size" htmlFor="6A">Before 6 AM</label>

                        <input type="checkbox" onChange={(e) => { handleArrival(e) }} className="btn-check" id="12A" checked={timeSlotsA.isChecked} value='12' />
                        <label className="btn btn-outline-primary font-size" htmlFor="12A">6 AM-12 PM</label>

                        <input type="checkbox" onChange={(e) => { handleArrival(e) }} className="btn-check" id="18A" checked={timeSlotsA.isChecked} value='18' />
                        <label className="btn btn-outline-primary font-size" htmlFor="18A">12 PM-6 PM</label>

                        <input type="checkbox" onChange={(e) => { handleArrival(e) }} className="btn-check" id="24A" checked={timeSlotsA.isChecked} value='24' />
                        <label className="btn btn-outline-primary font-size" htmlFor="24A">After 6 PM</label>
                    </div>
                </div>
                {/* ---------------------------------------------------------------------------------------------------------------- */}
                {/* {Airline by name code } */}
                <div className="airline-container">
                    <h3>Airlines</h3>

                    {airLineNames.map((airLine, index) => {
                        return (
                            <div key={index}>
                                <input id={`${airLine.name}-${index}`} key={index} type="checkbox" checked={airLine.isSelected} value={airLine.name} name={airLine.name} onChange={e => handAirlineNameChange(e)} />
                                <label htmlFor={`${airLine.name}-${index}`}>{airLine.name}</label>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Filter