import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../utils/Colors';
import styles from './styles';

const HeroDetail = ({route, navigation}) => {
  const {hero} = route.params;

  const [showPowerstats, setShowPowerstats] = useState(false);
  const [showBiography, setShowBiography] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <ScrollView>
          <Text style={styles.name}>{hero.name}</Text>
          <Image source={{uri: hero.images.lg}} style={styles.image} />

          <View>
            <View style={styles.spacingTop}>
              <View style={styles.row}>
                <Text style={styles.label}> Powerstats </Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowPowerstats(!showPowerstats);
                  }}>
                  <Icon
                    name={showPowerstats ? 'chevron-left' : 'chevron-right'}
                    size={25}
                    color={Colors.lightBlue}
                  />
                </TouchableOpacity>
              </View>
              {showPowerstats && (
                <View style={styles.spacingH}>
                  <Text style={styles.label}>
                    Intelligence :{' '}
                    <Text style={styles.t1}>
                      {hero.powerstats.intelligence}
                    </Text>
                  </Text>
                  <Text style={styles.label}>
                    Strength :{' '}
                    <Text style={styles.t1}>{hero.powerstats.strength}</Text>
                  </Text>
                  <Text style={styles.label}>
                    Speed :{' '}
                    <Text style={styles.t1}>{hero.powerstats.speed}</Text>
                  </Text>
                  <Text style={styles.label}>
                    Durability :{' '}
                    <Text style={styles.t1}>{hero.powerstats.durability}</Text>
                  </Text>
                  <Text style={styles.label}>
                    Power :{' '}
                    <Text style={styles.t1}>{hero.powerstats.power}</Text>
                  </Text>
                  <Text style={styles.label}>
                    Combat :{' '}
                    <Text style={styles.t1}>{hero.powerstats.combat}</Text>
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.spacingTop}>
              <Text style={styles.label}>
                Gender : <Text style={styles.t1}>{hero.appearance.gender}</Text>
              </Text>
              <Text style={styles.label}>
                Race : <Text style={styles.t1}>{hero.appearance.race}</Text>
              </Text>
              <Text style={styles.label}>
                Height :{' '}
                <Text style={styles.t1}>{hero.appearance.height[1]}</Text>
              </Text>
              <Text style={styles.label}>
                Weight :{' '}
                <Text style={styles.t1}>{hero.appearance.weight[1]}</Text>
              </Text>
            </View>

            <View style={styles.spacingTop}>
              <View style={styles.row}>
                <Text style={styles.label}> Biography </Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowBiography(!showBiography);
                  }}>
                  <Icon
                    name={showBiography ? 'chevron-left' : 'chevron-right'}
                    size={25}
                    color={Colors.lightBlue}
                  />
                </TouchableOpacity>
              </View>
              {showBiography && (
                <View style={styles.spacingH}>
                  <Text style={styles.label}>
                    Full Name :{' '}
                    <Text style={styles.t1}>{hero.biography.fullName}</Text>
                  </Text>
                  <Text style={styles.label}>
                    Alter Egos :{' '}
                    <Text style={styles.t1}>{hero.biography.alterEgos}</Text>
                  </Text>
                  <Text style={styles.label}>
                    Place Of Birthe :{' '}
                    <Text style={styles.t1}>{hero.biography.placeOfBirth}</Text>
                  </Text>
                  <Text style={styles.label}>Aliases : </Text>
                  <View style={styles.spacingH}>
                    {hero.biography.aliases.map(t => {
                      return (
                        <Text style={styles.label}>
                          {' '}
                          <Text style={styles.t1}>{t}</Text>
                        </Text>
                      );
                    })}
                  </View>
                  <Text style={styles.label}>
                    First Appearance :{' '}
                    <Text style={styles.t1}>
                      {' '}
                      {hero.biography.firstAppearance}
                    </Text>
                  </Text>
                  <Text style={styles.label}>
                    Publisher :{' '}
                    <Text style={styles.t1}>{hero.biography.publisher}</Text>
                  </Text>
                  <Text style={styles.label}>
                    Alignment :{' '}
                    <Text style={styles.t1}>{hero.biography.alignment}</Text>
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HeroDetail;
