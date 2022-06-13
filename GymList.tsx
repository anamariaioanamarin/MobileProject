import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, VirtualizedList } from 'react-native';
import {db} from "../../firebase";
import { collection, getDocs } from 'firebase/firestore/lite';
import { useGymList } from '../context/GymContext';


//const GetData= async()=>{
  //const gymCol =collection(db,'gym');
  //const gymSnapshot =await getDocs(gymCol);
  //const gymList = gymSnapshot.docs.map(doc => doc.data());
  //console.log(gymList);
//};

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const GymList = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#0782F9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default GymList;

const DATA = [
  {
    id: '1',
    title: 'Baio Fitness - Bucharest',
  },
  {
    id: '2',
    title: 'WorldClass- Bucharest',
  },
  {
    id: '3',
    title: 'WorldClass - Cluj',
  },
  {
    id: '4',
    title: 'Fitness Evolution - Cluj',
  },
  {
    id: '5',
    title: 'Fitness Evolution - Bucharest',
  },
  {
    id: '6',
    title: 'Best Gym - Cluj',
  },
  {
    id: '7',
    title: 'Best Gym - Ploiesti',
  },
];
