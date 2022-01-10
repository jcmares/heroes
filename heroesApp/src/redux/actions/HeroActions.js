import AsyncStorage from '@react-native-async-storage/async-storage';
import HeroService from '../../net/HeroService';
import Types from '../types/Types';

export const getHeroes = () => {
  return dispatch => {
    const service = new HeroService();

    service.getHeroes(
      res => {
        dispatch({type: Types.GET_HEROES, payload: res});
        setLocalData(res)
      },
      err => {
        dispatch({type: Types.GET_HEROES, payload: []});
      },
    );

    return true;
  };
};


const setLocalData = async (data) => {
  try{
    await AsyncStorage.setItem('@heroes_key', JSON.stringify(data))
    console.log('local storage...')
  }catch(e){
    console.error(e);
  }
}

