/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {v4 as uuidv4} from 'uuid'
import Country from './Country'
import Style from "./countries.module.css"

const Countries = (props) => { 
  return (
    <section className={Style.countries}>
      {props.countries.map((country)=>{
        const countryNew = {country, id:uuidv4()}
        return <Country {...countryNew} key={countryNew.id} onRemoveCountry = {props.onRemoveCountry}/>
      })}
    </section>
  )
}

export default Countries
