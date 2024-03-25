import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap(props) {
    const defaultProps = {
        center: { 
        lat: 50.37996451288076,
        lng: 30.478678264659983
        },
        zoom: 12
    };
    const Marker = (props) => {
        return (
            <div style={{ color: 'red' }}>✷</div>
        );
    }

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC5YwetIp-6jikHjCJSRgH0KdKgGXkJlY4' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
            lat={50.37996451288076}  
            lng={30.478678264659983}
            text="Моя локація"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;