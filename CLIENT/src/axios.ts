import axios from "axios";

 //http://localhost:1111
const instance = axios.create({
  baseURL: 'https://webdotg.ru/'
})


//создаю midlweare чтоб при каждом запросе проверять есть токен или нет 
//когда происходит любой запрос всегда проверять
instance.interceptors.request.use((config) => {
  //если в локалсторадже что то есть вшивать в каждый запрос
  config.headers.Authorization = window.localStorage.getItem('token')
  // Возвращаю измененный config
  return config;
})

export default instance