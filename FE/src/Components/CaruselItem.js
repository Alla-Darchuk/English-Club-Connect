import React from "react";
import { PropTypes } from 'prop-types';
import { Carousel } from "react-bootstrap";

function CaruselItem(plase, plaseName, index) {
  // const name = props.plaseName
  // const plase = props.plase
  // console.log("plase = "+plase)
  return (
    <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={plase}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>{plaseName}</h5>
        </Carousel.Caption>
      </Carousel.Item>
  )
}
CaruselItem.propTypes = {
  plaseName: PropTypes.string.isRequired,
  index: PropTypes.number,
  plase: PropTypes.string
}

export default CaruselItem