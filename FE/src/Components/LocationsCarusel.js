import PropTypes from 'prop-types';
import CaruselItem from './CaruselItem';
import { Carousel } from 'react-bootstrap';

function LocationsCarousel(props) {
  const plases = props.plase
  const plaseName = props.title
  let caruselItems = plases.map((plase, index) => 
    CaruselItem(plase, plaseName, index))
  return (
   <Carousel data-bs-theme="dark">
      { caruselItems }
    </Carousel>  
  )
}

LocationsCarousel.propTypes = {
  plase: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}
export default LocationsCarousel;