import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: width * 0.95,
        padding: 20,
        borderBottomColor: Colors.lightGray,
        borderBottomWidth: 1,
        
      },
      imageContainer: {width: 100, height: 150},
      image: {width: 100, height: 150, resizeMode: 'contain'},
      description: {padding: 20, width: width * 0.70},
      name: {
        color: Colors.gray,
        fontFamily: 'Verdana-Bold',
        fontSize: 20,
        textAlign: 'center'
      },
      label: {color: Colors.blue, fontWeight: 'bold' , padding: 3},
      t1: {color:  Colors.lightBlue},
});

export default styles;