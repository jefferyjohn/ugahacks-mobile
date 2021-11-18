import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Countdown from 'react-native-countdown-component';

import byte from '../assets/laptopbyte.png';


export default function CountdownScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hacking begins in...</Text>

  
      <Countdown
        until={7948000}
        onFinish={() => alert('Hacking begins!')}
        onPress={() => alert('Time until UGAHacks 7')}
        size={30}
        timeToShow={['D', 'H', 'M', 'S']}
        digitStyle={{ backgroundColor: '#FFF', borderWidth: 2 }}
        timeLabels={{d:'days', h:'hours', m:'minutes', s:'seconds'}}
        timeLabelStyle={{color:'#FFF'}}
        showSeparator
      />
      <Image source={byte} style={styles.logo} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width:228,
    height: 200,
    marginBottom: -40,
  },
});
