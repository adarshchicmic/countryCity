import {View, Text, SafeAreaView, FlatList, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  myFetchGetRequest,
  myFetchPostRequest,
} from '../Component/FetchRequest';
import styles from '../style/Style';
import Buttons from '../Component/Buttons';
import { constant } from '../Component/constant';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function HomeScreen() {
  const [Country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resCountry, resSetCountry] = useState([]);
  const [resCity, resSetCity] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState('Select Country')
  const [isClicked, setIsClicked] = useState(false);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  
  useEffect(() => {
    getData();
   // getDataP();
  },[]);

  const onSearch = search => {
    if (search !== ''){
      let tempData = resCountry.filter(item => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      resSetCountry(tempData);
    }else{
      resSetCountry(countries)
    }

  }
  const getData = async () => {
    const res = await myFetchGetRequest();
    setLoading(false);
    resSetCountry(res.data);
    countries = res.data; // hjksadhkjdfsahkl
  };
  
  const updateCountry = ()=>{
    setCountry("india");
  }
  const navigation = useNavigation();
  const nextPage = () => {
    navigation.navigate('Profile', {selectedCountry: selectedCountry});
    console.log(selectedCountry);
    // setSelectedCountry(resCountry.name);
  };

  const renderItem = ({item}) => {
    return (
      <Buttons onClick ={nextPage }  title = {item.name} Stylee = {styles.button} StyleeT = {styles.buttonText}></ Buttons>
    )
  }

  // renderSeperator = () => {
  //   return 
  // }
  return (
    <SafeAreaView style = {styles.container}>
      <View styles = {styles.container}>
      <Text style = {styles.heading}> {constant.heading} </Text>
      <TouchableOpacity style = {styles.dropdownSelector} onPress = {() => setIsClicked(!isClicked)}>
        <Text> {selectedCountry} </Text>
        {isClicked ? (<Image source = {require('../Component/dropdown.png')} style = {styles.icon} />):
        <Image source = {require('../Component/dropdown.png')} style = {styles.icon} />}
        
      </TouchableOpacity> 
      {isClicked ? (<View style = {styles.dropDownArea}>
        <TextInput style = {styles.searchInput}placeholder="Search.."
            value={search}
            ref={searchRef}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }} />
        <FlatList
          data = {resCountry}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setSelectedCountry(item.name);
                  setIsClicked(!isClicked);
                  onSearch('');
                  setSearch('');
                }}>
                <Text style={styles.buttonText}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor =  {(_,index) => index.toString()}
        />
      </View>) : null} 
      </View>
      {!isClicked ? (<Buttons onClick = {nextPage} Stylee = {styles.oneMoreButton} title = {constant.clickHere} StyleeT = {styles.buttonText}/>): null}
      
    </SafeAreaView>
  );
}
