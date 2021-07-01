import React from 'react';
import {View, Text, Stylesheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Container, Card, UserInfo,
    UserImg, UserName, 
    UserInfoText, PostTime, PostText, PostImg, 
    InteractionWrapper, Interaction, InteractionText,
    Divider
} from '../styles/FeedStyles';

const PostCard = ({item}) =>{
    return(
        <Card>
        <UserInfo>
            <UserInfo>
                <UserImg source={item.userImg}/>
                <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.postTime}</PostTime>
                </UserInfoText>
            </UserInfo>
        </UserInfo>
        <PostText>{item.post}</PostText>
        {item.postImg != 'none' ? <PostImg source={item.postImg}/> : <Divider/>}
        
        <InteractionWrapper>
            <Interaction  active>
                <Ionicons name="heart-outline" size={25}/>
                <InteractionText active> Like</InteractionText>
            </Interaction>
            <Interaction>
                <Ionicons name="md-chatbubble-outline" size={25}/>
                <InteractionText> Comment</InteractionText>
            </Interaction>
        </InteractionWrapper>
    </Card>
     
    );
}

export default PostCard;