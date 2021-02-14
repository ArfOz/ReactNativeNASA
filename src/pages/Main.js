import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, Image, TextInput, Button, Alert} from "react-native";
import {API_KEY} from "@env";

const Main = (props) => {
    const [lat, setLat] = useState("1.5");
    const [lon, setLon] = useState("100.75");
    console.log(API_KEY)

    var base_url2 = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2014-02-01&api_key=${API_KEY}`
    console.log(base_url2)

  
const sendingValue=(lon,lat)=>{ props.navigation.navigate("Select", { base_url : base_url2})};

    return (
        <SafeAreaView>
           <Image 
           source={require("../assets/logo.jpg")}
           />
           <TextInput
           keyboardType={'numeric'}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setLat(text)}
            value={lat}
            placeholder = "Enter a Latitude of Area"
        />
        
        <TextInput
            keyboardType={'numeric'}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setLon(text)}
            value={lon}
            placeholder = "Enter a Longitude of Area"
        />
        <Button
        title="Press me"
        onPress={sendingValue}
      />
        </SafeAreaView>
    )
}

export {Main};
