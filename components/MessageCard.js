import React from 'react'
import { View, Text } from 'react-native';
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


const MessageCard = ({id, chatName, enterChat, navigation}) => {

     
    return (
        <Card onPress={()=> enterChat(id, chatName)} key={id}>
                      <UserInfo>
                          <UserImgWrapper>
                              <UserImg source={require('../assets/users/user-9.png')}/>
                          </UserImgWrapper>
                          <TextSection>
                              <UserInfoText>
                                  <UserName>{chatName}</UserName>
                              </UserInfoText>
                              <MessageText>{'Hey there, this is my test for a post of my social app in React Native.'}</MessageText>
                          </TextSection>
                      </UserInfo>
        </Card>
    )
}

export default MessageCard; 
