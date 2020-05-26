import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{color:'red', textAlign:'center', fontWeight:'bold', fontSize:20}}>Jitsi Meet App</Text>
            </View>
            <View>
                <TextInput style={styles.textinput} defaultValue="demo" placeholder="Enter room..."></TextInput>
                <TextInput style={styles.textinput} defaultValue="user" placeholder="Enter name..."></TextInput>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
    },
    textinput:{
        borderColor:'blue',
        borderBottomWidth:2
    }
})

export default Home;
