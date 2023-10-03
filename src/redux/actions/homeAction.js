import axios from "axios";
import { GET_CITY_WEATHER_DATA_REQUEST, GET_CITY_WEATHER_DATA_SUCSESS, GET_CITY_WEATHER_DATA_FAIL, CLEAR_CITY_WEATHER_DATA_REQUEST } from "../types/homeTypes"

const base_url="https://api.openweathermap.org/data/2.5/"
const API_KEY='3222ddabc10e3efdbfedc021561f1a00'
export const getWeatherData=(lat,lon)=> async (dispatch) => {
    try{
console.log(lat,lon,"9999999999999999999")
        dispatch({ type: GET_CITY_WEATHER_DATA_REQUEST});
        console.log("12334568855w5qw4qw5w5qw46gxd")
        const res=await axios.get(`${base_url}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        console.table(res.data.weather)
        console.log(res.data,"12334568855w5qw4qw5w5qw46gxd")
        
        dispatch({
            type:  GET_CITY_WEATHER_DATA_SUCSESS,
            payload:res.data,
            message:(res.data && res.data.length===0)?"Data not found":null
        });
		
    }catch(error){
        console.log(error)
        dispatch({
			type:GET_CITY_WEATHER_DATA_FAIL,
			payload:(error.response && error.response.data) || error.message ,
		});
    }
}



export const clearAll=()=> async (dispatch) => {
  

        dispatch({ type: CLEAR_CITY_WEATHER_DATA_REQUEST});

}

