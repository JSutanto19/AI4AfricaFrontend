import React from 'react';
import {View, Text, Stylesheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Container, Card, UserInfo,
    UserImg, UserName, 
    UserInfoText, PostTime, PostText, PostImg, 
    InteractionWrapper, Interaction, InteractionText,
    Divider
} from '../styles/FeedStyles';

import * as firebase from 'firebase';
import 'firebase/firestore';
import moment from 'moment';

const PostCard = ({item, onDelete}) => {
    const likeIcon = item.liked ? "heart" : "heart-outline";
    const likeIconColor = item.liked ? '#2e64e5' : '#333';

    const user = firebase.auth().currentUser;

    var likeText;
    var commentText;

    if(item.likes === 1){
        likeText = "1 Like";
    } else if(item.likes > 1 ){
        likeText = item.likes + ' Likes';
    } else {
        likeText = "Like";
    }

    if(item.comments === 1){
        commentText = "1 Comment";
    } else if(item.comments > 1 ){
        commentText = item.comments + ' Comments';
    } else {
        commentText = "Comments";
    }

    return(
        <Card>
        <UserInfo>
            <UserInfo>
                <UserImg source={item.userImg}/>
                {/* <UserImg source={{uri: item.userImg}}/> */}
                <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    {/* <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime> */}
                    <PostTime>{item.postTime}</PostTime>
                </UserInfoText>
            </UserInfo>
        </UserInfo>
        <PostText>{item.post}</PostText>
        {/* {item.postImg != null ? <PostImg source={{uri: item.postImg}}/> : <Divider/>} */}
         {item.postImg !== null ? <PostImg source={item.postImg}/> : <Divider/>}

        
        <InteractionWrapper>
            <Interaction  active={item.liked}>
                <Ionicons name={likeIcon} size={25} color={likeIconColor}/>
                <InteractionText > {likeText}</InteractionText>
            </Interaction>
            <Interaction>
                <Ionicons name="md-chatbubble-outline" size={25}/>
                <InteractionText> {commentText}</InteractionText>
            </Interaction>
            {/* {user.uid == item.userId ?  */}
            <Interaction onPress={ () => onDelete(item.id)}>
                <Ionicons name="md-trash-bin-outline" size={25}/>
            </Interaction> 
            {/*: null}*/}
        </InteractionWrapper>
    </Card>
     
    );
}

export default PostCard;