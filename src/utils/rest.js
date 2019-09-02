import { useReducer } from "react";
import api from "../services/api";
import timeApi from "../services/timeApi";

const initialState = {
  loading: false,
  data: {},
  time: {},
  erro: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      // console.log("Chamando REQUEST do arquivo (rest.js) função (getWeather).");
      return {
        ...state,
        loading: true,
        data: {},
        time: {},
        erro: {}
      };
    case "SUCCESS":
      // console.log("Resposta SUCCESS do arquivo (rest.js) função (getWeather).");
      return {
        ...state,
        loading: false,
        data: action.data,
        time: action.time
      };
    case "FAILURE":
      /* console.log(
        "Chamando FAILURE! Algo deu errado no arquivo (rest.js) função (getWeather).",
        action.erro
      );*/
      return {
        ...state,
        loading: false,
        erro: action.erro
      };
    default:
      return state;
  }
};

const useGet = () => {
  const [data, dispatch] = useReducer(reducer, initialState);

  const getWeather = async cidade => {
    try {
      dispatch({ type: "REQUEST" });
      const res = await api.get(`weather?q=${cidade}&units=metric`);

      if (res.data.cod === 200) {
        /*console.log(
          "Região ",
          cidade,
          " foi encontrada! Buscando fuso horário..."
        );*/
        const timeZone = await timeApi.get(
          `get-time-zone?key=1OYAT3M0HQXQ&format=json&by=position&lat=${res.data.coord.lat}&lng=${res.data.coord.lon}`
        );

        dispatch({ type: "SUCCESS", data: res.data, time: timeZone.data });
      } else {
        dispatch({ type: "FAILURE", erro: res.data });
      }
    } catch (err) {
      dispatch({ type: "FAILURE", erro: "Erro do catch: Algo deu errado!" });
    }
  };
  return [data, getWeather];
};

export default useGet;
