import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Countdown from 'react-native-countdown-component';

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
});
