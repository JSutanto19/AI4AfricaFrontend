import React, {useState}from 'react'
import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import {InputWrapper, InputField, AddImage, StatusWrapper, SubmitBtn, SubmitBtnText} from '../styles/AddPost';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {ImagePicker} from 'expo-image-picker';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';



const AddPostScreen = () => {
   
  const [pickedImagePath, setPickedImagePath] = useState('');
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);



    const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }
  
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    console.log('Image Url: ', imageUrl);
    console.log('Post: ', post);

    firebase.firestore()
    .collection('posts')
    .add({
      userId: firebase.auth().currentUser.uid,
      post: post,
      postImg: imageUrl,
      postTime: firebase.firestore.FieldValue.serverTimestamp(),
      likes: null,
      comments: null,
    })
    .then(() => {
      console.log('Post Added!');
      alert(
        'Post published!',
        'Your post has been published Successfully!',
      );
      setPost(null);
    })
    .catch((error) => {
      console.log('Something went wrong with added post to firestore.', error);
    });
  }

  const uploadImage = async () => {

    if( pickedImagePath == '' ) {
      return null;
    }

    const uploadUri = pickedImagePath;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop(); 
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = firebase.storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setPickedImagePath(null);

      return url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };

    return (
        <View style={styles.container}>
          <InputWrapper>
            {pickedImagePath !== null ? <AddImage source={{uri: pickedImagePath}}/> : null}
            <InputField  
              placeholder="What's on your mind?"
              multiline 
              numberOfLines={4}
              onChangeText={(content) => setPost(content)}
              value={post}
            />
            
            {uploading ? (
              <StatusWrapper>
                <Text>{transferred} % Completed!</Text>
                <ActivityIndicator size="large" color="#0000ff" />
              </StatusWrapper>
            ) : (
              <SubmitBtn style={{marginTop: 25}}onPress={submitPost}>
                <SubmitBtnText>Post</SubmitBtnText>
              </SubmitBtn>
            )}

          </InputWrapper>
          <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={openCamera}>
            <Icon name="camera-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Choose Photo" onPress={showImagePicker}>
            <Icon name="md-images-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        </View>
    )
}

export default AddPostScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    actionButtonIcon:{
      fontSize: 20,
      height: 22,
      color: 'white',
    }
  }    
);
