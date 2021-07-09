import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import * as firebase from 'firebase';
import 'firebase/firestore';


const AddChatScreen = ({navigation}) => {
    const [chatName, setChatName] = useState();

    const db = firebase.firestore();

    const handlePress = async() =>{
        await db.collection("createdChats")
        .add({
            chatName
        })
        .then(navigation.goBack())
    }

    return (
        <View style={styles.container}>

            <FormInput labelValue={chatName} onChangeText={(newChat) => setChatName(newChat)}
              placeholderText="Enter a user name" iconType="message1" 
            />
           
            <FormButton buttonTitle="Create New Chat"  onPress={handlePress}/>

        </View>
    )
}

export default AddChatScreen;

const styles = StyleSheet.create({
   container: {
    alignItems: 'center',
    marginTop: '50%',
   }
})
