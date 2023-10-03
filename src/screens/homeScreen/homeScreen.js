import React, { useEffect } from 'react'
import { HomeComponent } from '../../components/Home/homeComonent'
import { useDispatch } from 'react-redux';
import { clearAll, getWeatherData } from '../../redux/actions/homeAction';

export const HomeScreen = () => {


    const dispatch=useDispatch();

    
    useEffect(()=>{
   
      if (navigator.geolocation) {
        getPosition()
          //If user allow location service then will fetch data & send it to get-weather function.
          .then((position) => {
            dispatch(getWeatherData(position.coords.latitude, position.coords.longitude));
          })
          .catch((err) => {
            //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
            dispatch(getWeatherData(28.67, 77.22));
            alert(
              "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
            );
          });
      } else {
        alert("Geolocation not available");
      }
    },[])
    useEffect(()=>{
        return ()=>{
          console.log("Unmounted")
            dispatch(clearAll())
        }
    },[])
    const getPosition = (options) => {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    }

    const getweatherData=(lat,lon)=>{
      dispatch(getWeatherData(lat,lon))
    }
  return (
    <div>
    
        <HomeComponent
          getWeatherData={getweatherData}
        />
    </div>
  )
}
