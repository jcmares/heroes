import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {alignSelf: 'center', padding: 10},
  cardContainer: {
    padding: 20,
    alignItems: 'center',
    width: width * 0.9,
    height: height * 0.82,
    shadowColor: '#000',
    borderColor: Colors.lightGray,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    elevation: 24,
    shadowOffset: {
      height: 12,
      width: 0,
    },
    shadowOpacity: 0.58,
  },
  image: {width: 300, height: 300, resizeMode: 'contain'},
  name: {
    color: Colors.gray,
    fontFamily: 'Verdana-Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  label: {color: Colors.lightBlue, fontWeight: 'bold', padding: 5},
  t1: {color: Colors.gray},
  spacingTop: {paddingTop: 20},
  row: {flexDirection: 'row'},
  spacingH: {paddingHorizontal: 20},
});

export default styles;
