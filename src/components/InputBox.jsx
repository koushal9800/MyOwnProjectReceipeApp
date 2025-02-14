import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const InputBox = ({label, secureTextEntry, iconName,onChangeText,value}) => {
  const [text, setText] = React.useState('');
  return (
    <View>
      <TextInput
        label={label}
        secureTextEntry={secureTextEntry}
        left={<TextInput.Icon icon={iconName} color={'#616C6F'} />}
        placeholderTextColor={'#616C6F'}
        underlineColor="#99AAAB"
        activeOutlineColor="#99AAAB"
        activeUnderlineColor="#99AAAB"
        style={styles.inputContainer}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
inputContainer:{
    backgroundColor: 'transparent',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#99AAAB',
  }
})

export default InputBox;
