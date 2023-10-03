
import React, { useState } from 'react';
import { Box, Container, Grid, Link, SvgIcon, Typography } from '@mui/material';
import Search from './components/Search/Search';
import WeeklyForecast from './components/WeeklyForecast/WeeklyForecast';
import TodayWeather from './components/TodayWeather/TodayWeather';
import { fetchWeatherData } from './api/OpenWeatherService';
import { transformDateFormat } from './utilities/DatetimeUtils';
import UTCDatetime from './components/Reusable/UTCDatetime';
import LoadingBox from './components/Reusable/LoadingBox';
import { ReactComponent as SplashIcon } from './assets/splash-icon.svg';
import Logo from './assets/logo.png';
import ErrorBox from './components/Reusable/ErrorBox';
import { ALL_DESCRIPTIONS } from './utilities/DateConstants';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  getTodayForecastWeather,
  getWeekForecastWeather,
} from './utilities/DataUtils';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Toolbar/Toolbar';
import { HomeScreen } from './screens/homeScreen/homeScreen';

function App() {
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchChangeHandler = async (enteredData) => {
    const [latitude, longitude] = enteredData.value.split(' ');

    setIsLoading(true);

    const currentDate = transformDateFormat();
    const date = new Date();
    let dt_now = Math.floor(date.getTime() / 1000);

    try {
      const [todayWeatherResponse, weekForecastResponse] =
        await fetchWeatherData(latitude, longitude);
      const all_today_forecasts_list = getTodayForecastWeather(
        weekForecastResponse,
        currentDate,
        dt_now
      );

      const all_week_forecasts_list = getWeekForecastWeather(
        weekForecastResponse,
        ALL_DESCRIPTIONS
      );

      setTodayForecast([...all_today_forecasts_list]);
      setTodayWeather({ city: enteredData.label, ...todayWeatherResponse });
      setWeekForecast({
        city: enteredData.label,
        list: all_week_forecasts_list,
      });
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);
  };

  let appContent 
  //= (
    // <Box
    //   xs={12}
    //   display="flex"
    //   flexDirection="column"
    //   alignItems="center"
    //   justifyContent="center"
    //   sx={{
    //     width: '100%',
    //     minHeight: '500px',
    //     Left:'2rem',
    //   }}
    // >
    //   <SvgIcon
    //     component={SplashIcon}
    //     inheritViewBox
    //     sx={{ fontSize: { xs: '100px', sm: '120px', md: '140px' } }}
    //   />
    //   <Typography
    //     variant="h4"
    //     component="h4"
    //     sx={{
    //       fontSize: { xs: '12px', sm: '14px' },
    //       color: 'rgba(255,255,255, .85)',
    //       fontFamily: 'Poppins',
    //       textAlign: 'center',
    //       margin: '2rem 0',
    //       maxWidth: '80%',
    //       lineHeight: '22px',
    //     }}
    //   >
    //     Explore current weather data and 6-day forecast of more than 200,000
    //     cities!
    //   </Typography>
    // </Box>
  //);

  if (todayWeather && todayForecast && weekForecast) {
    appContent = (
      <React.Fragment>
        <Grid item xs={12} md={todayWeather ? 6 : 12}>
          <Grid item xs={12}>
            <TodayWeather data={todayWeather} forecastList={todayForecast} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <WeeklyForecast data={weekForecast} />
        </Grid>
      </React.Fragment>
    );
  }

  if (error) {
    appContent = (
      <ErrorBox
        margin="3rem auto"
        flex="inherit"
        errorMessage="Something went wrong"
      />
    );
  }

  if (isLoading) {
    appContent = (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '500px',
        }}
      >
        <LoadingBox value="1">
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: '10px', sm: '12px' },
              color: 'rgba(255, 255, 255, .8)',
              lineHeight: 1,
              fontFamily: 'Poppins',
            }}
          >
            Loading...
          </Typography>
        </LoadingBox>
      </Box>
    );
  }

  return (
    <>
    {/* <Toolbar/> */}
    <Search onSearchChange={searchChangeHandler}/>
    <Sidebar/>
      <main style={{marginTop:'5.8rem',marginLeft:'8%'}}>
             {/* <Switch> */}
                 {/* <Route exact path='/'  >
                  <Redirect to="/Dashboard" />
                </Route>  */}
                {/* <Route exact  path='/Dashboard' component={HomeScreen} /> */}
                {/* <Route exact  path='/Dashboard' component={appContent} /> */}
              {appContent}
              {/* </Switch> */}
          </main>
    
    </>
  );
}

export default App;
