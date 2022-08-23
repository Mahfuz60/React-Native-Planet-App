import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import PlanetHeader from '../components/planetHeader';
import { colors } from '../theme/colors';
import { PLANETLIST } from './../data/planetList';
import Text from '../components/text/text';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANETLIST}
        //detect to unique key
        keyExtractor={(item, index) => item.name}
        //similer to map
        renderItem={({ item, index }) => {
          const { name, color } = item;
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('Details');
              }}
              style={styles.item}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                <Text preset='h3' style={styles.itemName}>
                  {name}
                </Text>
              </View>
              <AntDesign name='right' size={20} color='white' />
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  list: {
    padding: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[4],
    justifyContent: 'space-between',
  },
  itemName: {
    textTransform: 'uppercase',
    marginLeft: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.8,
  },
});
