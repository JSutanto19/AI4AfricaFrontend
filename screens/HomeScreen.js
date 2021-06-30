import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Container, Card, UserInfo,
     UserImg, UserName, 
     UserInfoText, PostTime, PostText, PostImg, 
     InteractionWrapper, Interaction, InteractionText
} from '../styles/FeedStyles'

const HomeScreen = () => {
    return (
        <Container>
            <Card>
                <UserInfo>
                    <UserInfo>
                        <UserImg source={require('../assets/users/user-3.jpg')}/>
                        <UserInfoText>
                            <UserName>Jenny Doe</UserName>
                            <PostTime>4 hours ago</PostTime>
                        </UserInfoText>
                    </UserInfo>
                </UserInfo>
                <PostText>This is a text which showcases how it will look in the UI. This is post 1.</PostText>
                <PostImg source={require('../assets/posts/post-img-2.jpg')}/>
                <InteractionWrapper>
                    <Interaction>
                        <Ionicons name="heart-outline" size={25}/>
                        <InteractionText> Like</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name="md-chatbubble-outline" size={25}/>
                        <InteractionText> Comment</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Card>

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
                <InteractionWrapper>
                    <Interaction>
                        <Ionicons name="heart-outline" size={25}/>
                        <InteractionText> Like</InteractionText>
                    </Interaction>
                    <Interaction>
                        <Ionicons name="md-chatbubble-outline" size={25}/>
                        <InteractionText> Comment</InteractionText>
                    </Interaction>
                </InteractionWrapper>
            </Card>
        </Container>
    )
}

export default HomeScreen;

