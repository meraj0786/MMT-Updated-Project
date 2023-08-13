import React, { useState } from 'react'
import '../style/Filter.css'
import 'semantic-ui-css/semantic.min.css'
import { Checkbox, Item } from 'semantic-ui-react';


function Filter({filterAirLineNames}) {
    const [sliderValue, setsliderValue] = useState(11100);
    const [stop1, setstop1] = useState(false);
    const [nonstop, setNonstop] = useState(false)
    let price = `₹${sliderValue}`;


    // for airline name Checkbox
    const [airLineChecked, setAirLineChecked] = useState([]);

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


    const handAirlineNameChange = (e)=>{
        const newAirLineNames = airLineNames.map(airLineName => {
            return airLineName.name === e.target.value ? {name: airLineName.name, isSelected: !airLineName.isSelected} : airLineName;
        })
        setAirLineNames(newAirLineNames);
        filterAirLineNames(newAirLineNames);
    }

    return (
        <>

            <div className='filter position-sticky sticky'>
                <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif', fontWeight: 'bold', padding: '10px 0px 10px 0px', margin: '0px' }}>Popular Filters</h3>

                {/* one way price slider */}
                <div className="slider-container">
                    <label htmlFor="customRange1" className="form-label" style={{ fontWeight: 'bold' }}>One Way Price</label>
                    <input type="range" onChange={(e) => { setsliderValue(e.target.value) }} min="4800" max="17400" step='300' value={sliderValue} className='form-range' id="customRange1" data-tooltip={price} data-position="top center" />
                    <div className="p-container" >
                        <p>₹4800</p>
                        <p>₹17400</p>
                    </div>
                </div>

                {/* Stop and Non-stop */}
                <div className="stop-container">
                    <h4>Stop and Non Stop</h4>
                    <Checkbox onChange={() => { setstop1(!stop1) }} label='1 Stop' style={{ marginTop: '6px' }} />
                    <Checkbox onChange={() => { setNonstop(!nonstop) }} label='Non Stop' style={{ marginTop: '15px' }} />
                </div>

                {/* Departure time */}
                <div className="departure-arrival-container">
                    <h4>Departure Timing</h4>
                    <div className="btn-group time-range-container" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                        <label className="btn btn-outline-primary font-size" htmlFor="btncheck1">Before 6 AM</label>

                        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                        <label className="btn btn-outline-primary font-size" htmlFor="btncheck2">6 AM-12 PM</label>

                        <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                        <label className="btn btn-outline-primary font-size" htmlFor="btncheck3">12 PM-6 PM</label>

                        <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" />
                        <label className="btn btn-outline-primary font-size" htmlFor="btncheck4">After 6 PM</label>
                    </div>
                </div>

                {/* Arrival time */}
                <div className="departure-arrival-container">
                    <h4>Arrival Timing</h4>
                    <div className="btn-group time-range-container" role="group" aria-label="Basic checkbox toggle button group">
                        <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off" />
                        <label className="btn btn-outline-primary font-size" htmlFor="btncheck5">Before 6 AM</label>

                        <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off" />
                        <label className="btn btn-outline-primary font-size" htmlFor="btncheck6">6 AM-12 PM</label>

                        <input type="checkbox" className="btn-check" id="btncheck7" autoComplete="off" />
                        <label className="btn btn-outline-primary font-size" htmlFor="btncheck7">12 PM-6 PM</label>

                        <input type="checkbox" className="btn-check" id="btncheck8" autoComplete="off" />
                        <label className="btn btn-outline-primary font-size" htmlFor="btncheck8">After 6 PM</label>
                    </div>
                </div>

                {/* {Airline by name code } */}
                <div className="airline-container">
                    <h3>Airlines</h3>

                    {airLineNames.map((airLine, index) => {
                        return (
                            <div>
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