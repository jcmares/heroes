import React, {useEffect} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';

const HeroItem = props => {
  const {hero, selected} = props;

  return (
    <TouchableOpacity onPress={selected}>
      <View style={styles.container}>
        <View>
          <Image source={{uri: hero.images.sm}} style={styles.image} />
        </View>
        <View style={styles.description}>
          <Text style={styles.name}>{hero.name}</Text>
          <View>
            <Text style={styles.label}>
              Full Name :{' '}
              <Text style={styles.t1}>
                {hero.biography.fullName === ''
                  ? 'NA'
                  : hero.biography.fullName}
              </Text>{' '}
            </Text>
            <Text style={styles.label}>
              Race : <Text style={styles.t1}>{hero.appearance.race}</Text>
            </Text>
            <Text style={styles.label}>
            Publisher : <Text style={styles.t1}>{hero.biography.publisher}</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HeroItem;
