import { View, Text, SafeAreaView , FlatList, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import React, { useEffect , useState} from 'react'
import {useRoute} from "@react-navigation/native";
import { myFetchPostRequest } from '../Component/FetchRequest';
import styles from '../style/Style'

const  ProfileScreen = ({route}) => {
  const [city, setCity] = useState([]);
  const [dataShow, setDataShow] = useState(true);
  const {selectedCountry} = route.params;
  console.log(selectedCountry);
 
  
  useEffect(() => {
    getDataP();
  },[])
  const getDataP = async () => {
    const res = await myFetchPostRequest({"country" : selectedCountry});
    setCity(res.data);
    console.log(res.data.length);
    {res.data.length === 0 ? setDataShow(false): setDataShow(true)};
    console.log (res.data);
  }

  return (
    <View>
      <SafeAreaView >
        <Text style = {styles.heading}> Here is all the cities of {selectedCountry}</Text>
        {setDataShow ? <FlatList
          data = {city}
          renderItem = {({item}) => 
            <Text style = {styles.profileText}>{item}</Text>
             }
        />: <Text > off ! Value Not Found </Text>}
      
      </SafeAreaView>
    </View>
  )
}

export default ProfileScreen;