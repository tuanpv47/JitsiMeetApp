import React, { useEffect, useState } from 'react';
import { 
  StyleSheet,
   Button, 
   View, 
   SafeAreaView, 
   Text, 
   Alert,
   TextInput
   } from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import Home from './components/Home';
const App = () => {
  const [isCall, setIsCall] = useState(false);
  const [room, setRoom] = useState("room1");
  const [username, setUserName] = useState("user1");
  const [email, setEmail] = useState("email@example.com");
  // useEffect(() => {
  //   const url = 'https://meet.jit.si/demo';
  //   const userInfo = {
  //     displayName: 'User1',
  //     email: 'user1@example.com',
  //     avatar: 'https:/gravatar.com/avatar/abc123',
  //   };
  //   // JitsiMeet.call(url, userInfo);
  //   JitsiMeet.audioCall(url)
  //   /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
  //   /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
  // }, [])
  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  }, []);

  function call() {
    setIsCall(true);
    console.log("call");
    const url = `https://meet.jit.si/${room}`;
    const userInfo = {
      displayName: username,
      email: email,
      avatar: 'https://news.cloud365.vn/wp-content/uploads/2020/03/jitsi-512x512-1.png',
    };
    // JitsiMeet.call(url, userInfo);
    JitsiMeet.audioCall(url)

  }



  return (

    isCall ?
      <JitsiMeetView
        onConferenceTerminated={e => onConferenceTerminated(e)}
        onConferenceJoined={e => onConferenceJoined(e)}
        onConferenceWillJoin={e => onConferenceWillJoin(e)}
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
        }}
      />
      :
      <View style={styles.container}>
        <View >
          <View>
            <Text style={{ color: 'red', textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Jitsi Meet App</Text>
          </View>
          <View>
            <TextInput style={styles.textinput} defaultValue={room} placeholder="Enter room..." onChangeText={text => setRoom(text)}></TextInput>
            <TextInput style={styles.textinput} defaultValue={username} placeholder="Enter name..." onChangeText={text => setUserName(text)}></TextInput>
            <TextInput style={styles.textinput} defaultValue={email} placeholder="Enter email..." onChangeText={text => setEmail(text)}></TextInput>
          </View>

        </View>
        <Button title={isCall ? "Close" : "Call"} onPress={call} />
      </View>

  )

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */

    // console.log('onConferenceTerminated')
    console.log('end call')
    // JitsiMeet.endCall();
    // console.log('end call')
    setIsCall(false);
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log('onConferenceJoined')
    // console.log(nativeEvent)
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log('onConferenceWillJoin')

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput:{
    borderWidth: 1,
    borderColor:'blue',
    margin:3,
    padding:10
  }
})

export default App;