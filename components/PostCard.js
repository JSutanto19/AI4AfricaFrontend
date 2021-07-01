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
                <UserImg source={require('../assets/users/user-1.jpg')}/>
                <UserInfoText>
                    <UserName>John Doe</UserName>
                    <PostTime>5 hours ago</PostTime>
                </UserInfoText>
            </UserInfo>
        </UserInfo>
        <PostText>This is a text which showcases how it will look in the UI. This is the second post</PostText>
        <Divider/>
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