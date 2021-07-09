import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ExplorePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Translate')}>
                <Ionicons name="language-outline" size={80} color={'#2e64e5'}/>
                <Text style={styles.text}>Translate</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={{marginLeft: 15}}onPress={() => Alert.alert('Navigate to Chat Bot')}>
                <Ionicons style={{marginLeft: 50}}name="add-circle-outline" size={80}/>
                <Text style={styles.text}>Ask for health advice</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default ExplorePage;

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    } , 
    text : {
        fontSize: 24,
        marginTop: 10,
        color: '#2e64e5'
    }
})
