import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, Image, Button} from "react-native";
import axios from "axios";
import {Buffer} from "buffer";
import base64 from 'react-native-base64'

const Select = (props) => {
    const [data, setData] = useState([])

    const base_url = props.route.params.base_url;
    console.log(base_url)
    console.log("ariffffffffffffffffffff")

    const fetchData = async(lat, lon, key) =>{
        const response = await axios.get(base_url,{responseType:"arraybuffer"}).then(response => Buffer.from(response.data, 'binary').toString('base64'));
        console.log("response", response);
        setData(response);
       
    };
    var base64Icon = `data:image/png;base64,${data}`;
    console.log(base64Icon) 

    useEffect(()=>{
        fetchData();
    }, [])
    const goBack = () =>{ props.navigation.navigate("Main")}
    return (
        <SafeAreaView style={{flex:1}}>
            <Image style={{flex:1,  borderWidth: 1, borderColor: 'red'}} source={{uri: base64Icon}}/>

            <Button
        title="New Search"
        onPress={goBack}
      />
        </SafeAreaView>
    )
}

export {Select};
