import axios from 'axios';
import {AxiosService, Endpoints} from './AxiosService';

class HeroService {


  getHeroes(onSuccess, onError) {
    const axiosInstance = AxiosService;

    axiosInstance
      .get(Endpoints.all)
      .then(response => {
        onSuccess(response.data);
      })
      .catch(error => {
        console.error( 'ERROR',JSON.stringify(error));
        onError(error);
      });
  }
}


export default HeroService;