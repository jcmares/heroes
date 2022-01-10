import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeroItem from '../../component/hero-item';
import {getHeroes} from '../../redux/actions/HeroActions';
import { showMessage } from '../../utils/Commons';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.heroState);
  const [heroList, setHeroList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();
  

  /*const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Connection type', state.type);
    console.log("Is connected?", state.isConnected);
  })*/

  useEffect(() => {
    loadHeroes();
  }, []);

  useEffect(() => {
    console.info(JSON.stringify(state.heroes));
    setHeroList(state.heroes);
    setRefreshing(false);
  }, [state]);

  const loadHeroes = () => {

    NetInfo.fetch().then(state => {
      if (state.isConnected){
        setRefreshing(true);
        dispatch(getHeroes());
      } else {
        getLocalData()
      }
    })
        
  };

  const getLocalData = async () =>{
    try {

      const heroJson = await AsyncStorage.getItem('@heroes_key')
      setHeroList(  heroJson === null ? [] : JSON.parse(heroJson))
      setRefreshing(false);
      console.info('getting local storage...')
    }catch(e){
      console.error(e)
      setRefreshing(false);
      setHeroList([])
    }
  }

  const heroDetail = hero => {
    navigation.navigate('Detail', {hero: hero});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Heroes Universe</Text>
      </View>

      {heroList.length === 0 && (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadHeroes} />
          }>
          <View style={styles.empty}>
            <Text style={styles.notFound}>NOT DATA FOUND</Text>
          </View>
        </ScrollView>
      )
      }
      {heroList.length > 0 && (
        <FlatList
          data={heroList}
          renderItem={({item}) => (
            <HeroItem hero={item} selected={() => heroDetail(item)} />
          )}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={loadHeroes} />
          }
        />
      )}
    </View>
  );
};

export default Home;
