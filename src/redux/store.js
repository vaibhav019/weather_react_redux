import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {getCityWeatherDataReducer} from "./reducers/homeReducer/homeReducer"

const rootReducer=combineReducers({

    currentWeatherData:getCityWeatherDataReducer,
    

})

const middleware=[thunk];
const store=createStore(rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)));

 export default store;   