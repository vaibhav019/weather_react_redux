
import {
     GET_CITY_WEATHER_DATA_REQUEST,
     GET_CITY_WEATHER_DATA_SUCSESS, 
     GET_CITY_WEATHER_DATA_FAIL, 
     CLEAR_CITY_WEATHER_DATA_REQUEST
     } 
     from "../../types/homeTypes"



const initialState={
    weatherData:{},
    weatherDataLoadError:null,
    message:null,
    weatherDataLoad:false,
    city:null,
    date:null
    
}


export const getCityWeatherDataReducer=(state=initialState,action)=>{


    switch(action.type){
        case GET_CITY_WEATHER_DATA_REQUEST:{
            return {
                ...state,
                weatherDataLoad:true,
                weatherDataLoadError:null
            }
        } 

        case GET_CITY_WEATHER_DATA_SUCSESS:{
            const weatherData=action.payload;
            
            return{
                ...state,
                weatherDataLoad:false,
                weatherDataLoadError:null,
                weatherData:weatherData,
                weatherDataLoad:false,
                message:action.message,
                city:weatherData.name,
                date:""

                
            }
        }

        case GET_CITY_WEATHER_DATA_FAIL:{
            return {
                ...state,
                weatherDataLoad:false,
                weatherDataLoadError:action.payload
            }
        }

        case CLEAR_CITY_WEATHER_DATA_REQUEST:{
            return initialState
        }

        default:return initialState
    }



}

