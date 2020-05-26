import React, { useEffect,useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native'; 
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const JitsiMeetComponent = ({}) => {
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     const url = 'https://meet.jit.si/demo';
  //     const userInfo = {
  //       displayName: 'User1',
  //       email: 'user1@example.com',
  //       avatar: 'https:/gravatar.com/avatar/abc123',
  //     };
  //     // JitsiMeet.call(url, userInfo);
  //     JitsiMeet.audioCall(url)
  //     /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
  //     /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
  //   }, 500);
  // }, [])

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  }, []);

  

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log('onConferenceTerminated')
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(nativeEvent)
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    // console.log(nativeEvent)
  }

  return (
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
  )
}
export default JitsiMeetComponent;