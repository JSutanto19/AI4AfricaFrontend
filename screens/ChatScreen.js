import React, {useEffect, useState, useCallback} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello World!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

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
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble = {renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={ScrollBottomComponent}
      />
  
    )
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
