import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Container} from '../styles/FeedStyles';

import PostCard from '../components/PostCard';

import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';


const Posts = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg: require('../assets/users/user-3.jpg'),
      postTime: '4 mins ago',
      post:
        'Hey there, this is my test for a post of my social app in React Native.',
      postImg: require('../assets/posts/post-img-3.jpg'),
      liked: true,
      likes: '14',
      comments: '5',
    },
    
    {
      id: '3',
      userName: 'Ken William',
      userImg: require('../assets/users/user-4.jpg'),
      postTime: '1 hours ago',
      post:
        'Hey there, this is my test for a post of my social app in React Native.',
      postImg: require('../assets/posts/post-img-2.jpg'),
      liked: true,
      likes: '1',
      comments: '0',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      userImg: require('../assets/users/user-6.jpg'),
      postTime: '1 day ago',
      post:
        'Hey there, this is my test for a post of my social app in React Native.',
      postImg: require('../assets/posts/post-img-4.jpg'),
      liked: true,
      likes: '22',
      comments: '4',
    },

  ];

const HomeScreen = ({route, navigation}) => {

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [created, setCreated] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);  
  
  
  const fetchPosts = async () => {

    const list = [];

     try{

       await firebase.firestore()
       .collection('posts').orderBy('postTime', 'desc')
       .get().then((querySnapshot) =>{

           querySnapshot.forEach(doc => {
              const {userId, post, postImg, postTime, likes, comments} = doc.data();
              list.push({
                id: doc.id,
                userId,
                userName: 'Test Name',
                userImg:'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                postTime: postTime,
                post,
                postImg,
                liked: false,
                likes,
                comments,
              });
           });
       })

       if(loading){
         setLoading(false);
       }

       setPosts(list);

     } catch(e){
       console.log(e)
     }
  }

  useEffect(() => {
    fetchPosts();
    
  }, [])

  useEffect(() => {
     fetchPosts();
     setDeleted(false);
  }, [deleted])

  // useEffect(() => {

  //   // console.log('in timed useeffect')
  //   setTimeout(() => {
  //     setSeconds(seconds + 1);
  //   }, 1000);
  //   fetchPosts()

  // }, [seconds]);

  

  // useEffect(() => {
  //   console.log('in useEffect');
  //   let interval = null;
  //   setIsActive(true);
  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setSeconds(seconds => seconds + 1);
  //     }, 1);
  //   } else if (!isActive && seconds !== 0) {
  //     clearInterval(interval);
  //   }
  //   fetchPosts();
  //   return () => clearInterval(interval);
  //   setIsActive(false);
  // }, [isActive, seconds]);

  const handleDelete = (postId) => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => deletePost(postId),
        },
      ],
      {cancelable: false},
    );
  };

  const deletePost = (postId) => {
    // console.log('Current Post Id: ', postId);

    firebase.firestore()
      .collection('posts')
      .doc(postId)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          const {postImg} = documentSnapshot.data();

          if (postImg != null) {
            const storageRef = firebase.storage().refFromURL(postImg);
            const imageRef = firebase.storage().ref(storageRef.fullPath);

            imageRef
              .delete()
              .then(() => {
                console.log(`${postImg} has been deleted successfully.`);
                deleteFirestoreData(postId);
              })
              .catch((e) => {
                console.log('Error while deleting the image. ', e);
              });
            // If the post image is not available
          } else {
            deleteFirestoreData(postId);
          }
        }
      });
  };

  const deleteFirestoreData = (postId) => {
    firebase.firestore()
      .collection('posts')
      .doc(postId)
      .delete()
      .then(() => {
        Alert.alert(
          'Post deleted!',
          'Your post has been deleted successfully!',
        );
        setDeleted(true);
      })
      .catch((e) => console.log('Error deleting post.', e));
  };

    return (
        <Container>
            <FlatList data={Posts} 
            renderItem={({item})=> <PostCard item={item} onDelete={handleDelete}/>} 
            keyExtractor={item => item.id} 
            showsVerticalScrollIndicator={false}/>
        </Container>
    )
}

export default HomeScreen;

