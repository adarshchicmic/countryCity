import {View, Text, SafeAreaView, FlatList, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  myFetchGetRequest,
  myFetchPostRequest,
} from '../Component/FetchRequest';
import styles from '../style/Style';
import Buttons from '../Component/Buttons';
import { constant } from '../Component/constant';

export default function HomeScreen({navigation}) {
  const [Country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resCountry, resSetCountry] = useState([]);
  const [resCity, resSetCity] = useState([]);
  useEffect(() => {
    getData();
    getDataP();
  }, [Country]);
  const data = {
    country: Country,
  }
  const getData = async () => {
    const res = await myFetchGetRequest();
    setLoading(false);
    resSetCountry(res.data);
    console.log(res);
  };
  const getDataP = async () => {
    const res = await myFetchPostRequest(data);
  
    console.log (res);
  }
  const updateCountry = ()=>{
    setCountry("india");
  }
  const nextPage = () => {
    navigation.navigate('Profile');
  }

  const renderItem = ({item}) => {
    return (
      <Buttons onClick ={nextPage}  title = {item.name} Stylee = {styles.button} StyleeT = {styles.buttonText}></ Buttons>
    )
  }
  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.oneText}>{constant.heading}</Text>
      <TextInput style = {styles.inputText} placeholder = {constant.countryName}/>
      <Buttons onClick = {nextPage} Stylee = {styles.oneMoreButton} title = {constant.clickHere} StyleeT = {styles.buttonText}/>
      {resCountry && (
        <FlatList
          data = {resCountry}
          renderItem = {renderItem}
          keyExtractor =  {(_,index) => index.toString()}
        />
      )}
    </SafeAreaView>
  );
}
