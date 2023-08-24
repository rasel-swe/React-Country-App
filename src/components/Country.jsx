/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Style from "./country.module.css";

const Country = (props) => {

  const { country } = props;
  const { name, flags, capital, population, area } = country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name)
  };

  return (
    <article className={Style.country}>
      <div>
        <img className={Style.flag} src={flags.png} alt={name.common} />
        <p>Name: {name.common}</p>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <p>Area: {area} </p>
        <button
          className={Style.btn}
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default Country;
