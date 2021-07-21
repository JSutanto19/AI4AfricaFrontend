import React, {useState} from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';


const Search = ({navigation}) => {
    const [users, setUsers] = useState([])
    
    const fetchUsers = (search) => {
       firebase.firestore()
       .collection('users')
       .where('name', '>=', search)
       .get()
       .then((snapshot) => {
           let users = snapshot.docs.map(doc => {
               const data = doc.data();
               const id = doc.id;
               return {id, ...data}
            });
            setUsers(users)
       })
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Type here ..." onChangeText={(search)=> fetchUsers(search)} autoCapitalize='none'/>
            <FlatList
                numColumns={1}
                horizontal={false}
                data={users}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>{navigation.navigate("Profile", {uid: item.id, name: item.name})}}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
     alignItems: 'center',
     marginTop: '50%',
    }
 })