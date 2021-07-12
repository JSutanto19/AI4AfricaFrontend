import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
//import fetch from 'node-fetch';
/*
const API_TOKEN = "api_XjRRyCXAXqfXdhYMTqqxjAkqtLCrlhWVJu";
const fetch = require("node-fetch");
const url = "https://api-inference.huggingface.co/models/gpt2";
async function query(data) {
    const response = await fetch(
        url,
        {
            headers: { Authorization: `Bearer ${API_TOKEN}` },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

query("Can you please let us know more details about your ").then((response) => {
    console.log(JSON.stringify(response));
});

// [{"generated_text":"Can you please let us know more details about your iphone's storage 
// capacity and/or processor? I will include this with your list of your devices that use your
// hard drive. It shows your current/past usage of the device(s)"}]
*/

const data = "Can you please let us know more details about your ";
const API_TOKEN = "api_XjRRyCXAXqfXdhYMTqqxjAkqtLCrlhWVJu";
const url = "https://api-inference.huggingface.co/models/gpt2";
const axios = require('axios').default;

const config = {
    headers: { Authorization: `Bearer ${API_TOKEN}` }
};

axios.post("https://api-inference.huggingface.co/models/gpt2", data, config)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });


const TranslateScreen = () => {
    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
            <TextInput style={{borderWidth:1, height:150, width: 300, padding: 10, marginBottom: 20, borderRadius: 10, fontFamily: 'Cochin', justifyContent:'center', alignItems: 'center'}} placeholder="Type in a sentence" onChangeText={(text)=>setInput(text)}/>
            <View style={styles.container1}>
                <FontAwesome5
                    name="arrow-up"
                    size={30}
                    backgroundColor="#fff"
                />
                <FontAwesome5
                    name="arrow-down"
                    size={30}
                    backgroundColor="#fff"
                />
            </View>

            <View style={styles.card}>
                <View style={styles.cardContent}><Text style={{fontFamily: 'Cochin'}}>{input}</Text></View>
            </View>
            
        </View>
    )
}

export default TranslateScreen;

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    } , 
    container1 : {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
    } ,
    card : {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        height: 150,
        width: 300,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContent: {
       marginHorizontal: 18,
       marginVertical: 10,
       padding: 10,
    }
})
