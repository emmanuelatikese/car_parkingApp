import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Map from './components/map';
import Parking from './components/parking'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Map />

      <Parking/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
