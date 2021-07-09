// @refresh reset
import React, {useEffect, useState, useCallback} from 'react';
import { View, Text,StyleSheet, TextInput, Button, Keyboard } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as firebase from 'firebase';
import 'firebase/firestore';
// used to test chatting between two users  
// import AsyncStorage from '@react-native-async-storage/async-storage';

const ChatScreen = ({navigation, route}) => {
    const [messages, setMessages] = useState([]);
    // const [user, setUser] = useState(null);
    // const [name, setName] = useState('')
    // const [input, setInput] = useState('');


  
  const db = firebase.firestore();
  const chatsRef = db.collection("createdChats"); 

  useEffect(() => {
    // readUser()
    const unSubscribe = chatsRef.doc(route.params.id).collection('messages').onSnapshot(querySnapshot =>  {
      const messagesFirestore = querySnapshot
      .docChanges()
      .filter(({type}) => type == 'added')
        .map(({doc}) => {
        const message = doc.data()
        return {...message, createdAt: message.createdAt.toDate()}
      }).sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime())
      appendMessages(messagesFirestore)
    })
      return () => unSubscribe()
  }, [])


  
  // async function readUser(){
  //   // const user = firebase.auth().currentUser;
  //   //check if user is logged in not sure if this is necessary 
  //   const user = await AsyncStorage.getItem('user')

  //   if(user){
  //     setUser(JSON.parse(user))
  //   }
  // }

  const appendMessages = useCallback(
    (messages) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
    },
    [messages]
  )

// const onSend = useCallback((messages = []) => {
//  setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
// }, [])

  async function handleSend(messages){
     const writes = messages.map((m) => chatsRef.doc(route.params.id).collection('messages').add(m))
     await Promise.all(writes)
  }

  // const sendMessage = () => {
  //   Keyboard.dismiss();

  //   db.collection('createdChats').doc(route.params.id).collection("messages").add({
  //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //     message: 
  //   })
  // }

  // async function handlePress() {
  //   const _id = Math.random().toString(36).substring(7)
  //   const user = { _id, name }
  //   await AsyncStorage.setItem('user', JSON.stringify(user))
  //   setUser(user)
  // } 

  const renderBubble = (props) =>{
      return(
        <Bubble 
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: "#2e64e5"
                }
            }}
            textStyle = {{
                right: {
                    color: "#fff"
                }
            }}
        
        />   
      );
  }
  
  const renderSend = (props) => {
      return(
      <Send {...props}>
        <View>
            <MaterialCommunityIcons name="send-circle" size={32} color="#2e64e5"/>
        </View>
     </Send>);
     
  }
  const ScrollBottomComponent = () => {
      return(
          <FontAwesome name="angle-double-down" size={22}/>
      );
  }

    return (
        <GiftedChat
        messages={messages}
        onSend={handleSend}
        user={{
          _id: 1,
        }}
        renderBubble = {renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={ScrollBottomComponent}
      />
  
     );

    //   if (!user) {
    //     return (
    //         <View style={styles.container}>
    //             <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
    //             <Button onPress={handlePress} title="Enter the chat" />
    //         </View>
    //     )
    // }
    // return <GiftedChat messages={messages} user={user} onSend={handleSend} />
}

export default ChatScreen;

const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
    }    
);
