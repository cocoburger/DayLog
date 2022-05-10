import React, {useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';
import {useNavigation} from '@react-navigation/native';
import LogContext from '../contexts/LogContext';

function WriteScreen() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigation = useNavigation();

    const {onCreate} = useContext(LogContext);


    // title, body의 값과 업데이트 함수를 props로 전달.
    const onSave = () => {
      onCreate({
        title,
        body,
        date: new Date().toISOString(),
      });
      navigation.pop();
    }


  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
            title={title}
            body={body}
            onChangeBody={setBody}
            onChangeTitle={setTitle}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});
export default WriteScreen;
