import React, { useEffect } from 'react'
import { useSelector, useStore } from 'react-redux';
import WeatherCard from '../Cards/WeatherCard';

export function HomeComponent({getWeatherData}) {
  const { weatherDataLoadError,weatherData,weatherDataLoad,message } = useSelector(item => item.currentWeatherData);
 
// useEffect(()=>{
//   alert(navigator.geolocation)
//   console.log(navigator)
//   if (navigator.geolocation) {
//     getPosition()
//       //If user allow location service then will fetch data & send it to get-weather function.
//       .then((position) => {
//         getWeatherData(position.coords.latitude, position.coords.longitude);
//       })
//       .catch((err) => {
//         //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
//         getWeatherData(28.67, 77.22);
//         alert(
//           "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
//         );
//       });
//   } else {
//     alert("Geolocation not available");
//   }

// },[])
  
// const getPosition = (options) => {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject, options);
//   });
// }
  return (
    <>
    <div >
      <WeatherCard/>
    </div>
    </>
    
    
  )
}

