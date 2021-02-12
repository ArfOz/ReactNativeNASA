import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, Button} from "react-native";
import axios from "axios";

const Select = (props) => {

    const lat = props.route.params.lat;
    const lon = props.route.params.lon;
    console.log(lat);
    const key = "HwBkfWKy5nOJMvCg10J55Zfkok92ejcUa0ZhBgsA";
    console.log(lon);
    console.log("ariffffffffffffffffffff")

    const fetchData = async(lat, lon, key) =>{
        const response = await axios.get("https://api.nasa.gov/planetary/earth/imagery",{params:{
            lon : 100.75,
            lat : 1.5,
            date : "2014-02-01",
            api_key: "HwBkfWKy5nOJMvCg10J55Zfkok92ejcUa0ZhBgsA"
        }});
        console.log("response", response);
        console.log("veri gitmiş olmalı")
        
    }
    useEffect(()=>{
        fetchData();
    }, [])
    const goBack = () =>{ props.navigation.navigate("Main")}
    return (
        <SafeAreaView>
            <Text>
                {lat}
                {lon}
            </Text>
            <Button
        title="New Search"
        onPress={goBack}
      />
        </SafeAreaView>
    )
}

export {Select};
