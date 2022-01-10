import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  header: {
    backgroundColor: Colors.header,
    width: width * 0.98,
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    elevation: 24,
    shadowOffset: {
      height: 12,
      width: 0,
    },
    shadowOpacity: 0.58,
  },
  title: {
    color: Colors.white,
    fontFamily: 'Verdana-Bold',
    fontSize: 24,
  },
  empty:{
    height: height * 0.8 ,
    alignContent: 'center',
    justifyContent: 'center'
  },
  notFound: {
    color: Colors.red1,
    fontFamily: 'Verdana-Bold',
    fontSize: 30,
  },
});

export default styles;
