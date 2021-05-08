/* eslint-disable prettier/prettier */
import { GET_WEATHER, SET_ERROR } from '../types';
// import { openweathermap_api_key } from '../../';



const openweathermap_api_key = '849338767c0e95025b5559533d26b7c4';
export const getWeather = (city, onSuccess = () => { }, onError = () => { }) => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap_api_key}`);

      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }

      const resData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
      onSuccess();
    } catch (err) {
      dispatch(setError(err.message));
      onError();
    }
  };
};

const setError = (err) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
