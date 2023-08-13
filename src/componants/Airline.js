import React from 'react'
import '../style/Airline.css'
import 'semantic-ui-css/semantic.min.css'

function Airline(props) {
    return (
        <div className='airlines-container'>
            <div className='airline-details'><h4>{props.name}</h4></div>
            <div class = "vertical"></div>
            <div className='airline-details'><h3>{props.departure}</h3></div>
            <div className="details-container">
                <div className='airline-details'style={{height:'10px', padding:'0px'}}>{props.distance}</div>
                <hr />
                <div className='airline-details'style={{height:'10px', padding:'0' }}>{props.stopage}</div>
            </div>
            <div className='airline-details'><h3>{props.arrival}</h3></div>
            <div class = "vertical"></div>
            <div className='airline-details'><h3>{props.price}</h3></div>
        </div>
    )
}

export default Airline