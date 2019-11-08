import React from "react";

const Weather = props => {
  return (
    <div className='weather__info'>
      {props.city && props.country && (
        <p className='weather__key'>
          Location:
          <br />
          <span className='weather__value'>
            {props.city},{props.country}
          </span>
        </p>
      )}
      {props.temperature && (
        <p className='weather__key'>
          Temperature: <br />
          <span className='weather__value'>{props.temperature}</span>
        </p>
      )}
      {props.humidity && (
        <p className='weather__key'>
          Humidity: <br />
          <span className='weather__value'>{props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className='weather__key'>
          Condtions: <br />
          <span className='weather__value'>{props.description}</span>
        </p>
      )}
      {props.error && <p className='weather__error'>{props.error}</p>}
    </div>
  );
};

export default Weather;
