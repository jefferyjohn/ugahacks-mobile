import * as React from 'react';
import { Image, StyleSheet, Button, Platform } from 'react-native';

import * as Calendar from 'expo-calendar';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import calendar from '../assets/calendar.png';

``

async function getDefaultCalendarSource() {
  const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  return defaultCalendar.source;
}

export default function CalendarScreen({ navigation }: RootTabScreenProps<'TabCalendar'>) {
  
  React.useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        console.log({ calendars });
      }
    })();
  }, []);
  
  return (
    <View style={styles.container}>
            <Image source={calendar} style={styles.logo} />

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
    width:410,
    height: 700,
    marginBottom: -40,
  },
});
