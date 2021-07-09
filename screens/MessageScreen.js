import React, {useState, useEffect} from 'react';

import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { InteractionText } from '../styles/FeedStyles';
import { Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
} from '../styles/MessageStyles';
 
import * as firebase from 'firebase';
import 'firebase/firestore';
import MessageCard from '../components/MessageCard'

const Messages = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg: require('../assets/users/user-3.jpg'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: require('../assets/users/user-1.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: require('../assets/users/user-4.jpg'),
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      userImg: require('../assets/users/user-6.jpg'),
      messageTime: '1 day ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '5',
      userName: 'Christy Alex',
      userImg: require('../assets/users/user-7.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
  ];

const MessageScreen = ({navigation}) => {
   const [chats, setChats] = useState([]);

   const db = firebase.firestore();

   const enterChat = (id, chatName) => {
     navigation.navigate('Chat', {
       id, chatName});
   }

   useEffect(() => {
      const unSubscribe = db.collection('createdChats').onSnapshot(snapshot => (
        setChats(snapshot.docs.map(doc => ({
           id: doc.id,
           data: doc.data()
        })))
      ));
      return unSubscribe;
   }, []);

    return (
        <Container style={styles.container}>
             {chats.map(({id, data: {chatName}}) => (
                <MessageCard key={id} id={id} chatName={chatName} navigation={navigation} enterChat={enterChat}/>
            ))}
           
        </Container>
    )
}

export default MessageScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      padding: 20,
    },
  }    
);
