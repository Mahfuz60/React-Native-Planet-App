import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import PlanetHeader from '../components/planetHeader';
import { colors } from '../theme/colors';

export default function PlanetDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backBtn={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
