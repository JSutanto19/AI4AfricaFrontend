import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



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
