import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, Image, TextInput, Button, Alert} from "react-native";
import axios from "axios";

const Main = () => {
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);

// const Submit()=>{

// }

    return (
        <SafeAreaView>
           <Image 
           source={require("../assets/logo.jpg")}
           />
           <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setLat(text)}
            value={lat}
            placeholder = "Enter a Latitude of Area"
        />
        
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setlon(text)}
            value={lon}
            placeholder = "Enter a Longitude of Area"
        />
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        </SafeAreaView>
    )
}

export {Main};
