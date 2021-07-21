import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';
import MessageScreen from '../screens/MessageScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import AddChatScreen from '../screens/AddChatScreen';
import ExploreScreen from '../screens/ExplorePage';
import TranslateScreen from '../screens/TranslateScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ChatBotScreen from '../screens/ChatBotScreen';
import SearchScreen from '../screens/Search'


import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="RN Social"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#2e64e5',
            fontFamily: 'Cochin',
            fontSize: 18,
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
          },
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <FontAwesome5.Button
                name="plus"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => navigation.navigate('AddPost')}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2e64e515',
            shadowColor: '#2e64e515',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="HomeProfile"
        component={ProfileScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );

  const MessageStack = ({navigation}) => (
      <Stack.Navigator>
          <Stack.Screen name="Messages" component={MessageScreen}
             options={{
                headerRight: () => (
                    <View style={{marginRight: 10}}>
                      <FontAwesome5.Button
                        name="edit"
                        size={22}
                        backgroundColor="#fff"
                        color="#2e64e5"
                        onPress={() => navigation.navigate('AddChat')}
                      />
                    </View>
                ),
                headerTitleStyle: {
                    color: '#2e64e5',
                    fontFamily: 'Cochin',
                    fontSize: 18,
                  },
              }}
          />
          <Stack.Screen name="AddChat" component={AddChatScreen}
            options={{
                title: '',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#2e64e515',
                  shadowColor: '#2e64e515',
                  elevation: 0,
                },
                headerBackTitle: "Messages",
                headerBackImage: () => (
                  <View style={{marginLeft: 15}}>
                    <Ionicons name="arrow-back" size={25} color="#2e64e5" />
                  </View>
                ),
              }}
          />
          <Stack.Screen 
          name="Chat" 
          component={ChatScreen}
          options={({route}) => ({
              title: route.params.userName,
              headerBackTitleVisible: false
            })}          
          />
      </Stack.Navigator>
  );
  
  const ExploreStack = ({navigation}) => (
      <Stack.Navigator>
           <Stack.Screen name="Explore" component={ExploreScreen} options={{
               headerTitleStyle: {
                color: '#2e64e5',
                fontFamily: 'Cochin',
                fontSize: 18,
              },
              headerBackTitleVisible: false,
           }}/>
           <Stack.Screen name="Translate" component={TranslateScreen} options={{
               headerTitleStyle: {
                color: '#2e64e5',
                fontFamily: 'Cochin',
                fontSize: 18,
              },
              headerBackTitleVisible: false,
           }}/>
           <Stack.Screen name="ChatBot" component={ChatBotScreen} options={{
               headerTitleStyle: {
                color: '#2e64e5',
                fontFamily: 'Cochin',
                fontSize: 18,
              },
              headerBackTitleVisible: false,
           }}/>
      </Stack.Navigator>
  );

  const AuthStack = ({navigation}) => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;
  
    useEffect(() => {
      AsyncStorage.getItem('alreadyLaunched').then((value) => {
        if (value == null) {
          AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
    
    }, []);
  
    if (isFirstLaunch === null) {
      return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
    } else if (isFirstLaunch == true) {
      routeName = 'Onboarding';
    } else {
      routeName = 'Login';
    }
  
    return (
      <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    );
  };
  
  
   const ProfileStack = ({navigation}) => (
      <Stack.Navigator>
           <Stack.Screen name="Profile" component={ProfileScreen} options={{
               headerTitleStyle: {
                color: '#2e64e5',
                fontFamily: 'Cochin',
                fontSize: 18,
              },
              headerBackTitleVisible: false,
           }}/>
           <Stack.Screen name="Edit Profile" component={EditProfileScreen} options={{
               headerTitleStyle: {
                color: '#2e64e5',
                fontFamily: 'Cochin',
                fontSize: 18,
              },
              headerBackTitleVisible: false,
           }}/>
      </Stack.Navigator>
  );
  

  const AppTabs = () =>{

      const getTabBarVisibility = (route)=>{
          const routeName = route.state ? route.state.routes[route.state.index].name : '';
          
          if(routeName === "Chat" ){
              return false;
          }

          return true;
      }

     return(
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: '#2e64e5',
              }}>
              <Tab.Screen
                name="Messages"
                component={MessageStack}
                options={({route}) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    tabBarIcon: ({color, size}) => (
                      <Ionicons name="chatbox-ellipses-outline" color={color} size={size} />
                    ),
                })}
              />
              <Tab.Screen
                name="Home"
                component={FeedStack}
                options={({route}) => ({
                  tabBarLabel: 'Home',

                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                      name="home-outline"
                      color={color}
                      size={size}
                    />
                  ),
                })}
              />
              <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                  // tabBarLabel: 'Home',
                  tabBarIcon: ({color, size}) => (
                    <Ionicons name="person-outline" color={color} size={size} />
                  ),
                }}
              />


            <Tab.Screen
                name="Explore"
                component={ExploreStack}
                options={{
                  // tabBarLabel: 'Home',
                  tabBarIcon: ({color, size}) => (
                    <Ionicons name="earth-outline" color={color} size={size} />
                  ), 
                }}
              />

              <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                  // tabBarLabel: 'Home',
                  tabBarIcon: ({color, size}) => (
                    <Ionicons name="search-outline" color={color} size={size} />
                  ), 
                }}
              /> 

            
            </Tab.Navigator>
     );
  }

  const AppStack = ({navigation}) => {

    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={AuthStack} options={{headerLeft:null}} />
            <Stack.Screen options={{headerShown: false}} name="TabNav" component={AppTabs}/>
        </Stack.Navigator>
    );   
  }

  export default AppStack;