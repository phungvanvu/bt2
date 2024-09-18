import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Đăng nhập</Text>
      </View>

      <Text style={styles.labelText}>Nhập số điện thoại</Text>
      <Text style={styles.bodyText}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="numeric"
        placeholderTextColor="#C4C4C4"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginTop: 25,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 14,
    color: '#6c6c6c',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#888',
  },
});

export default LoginScreen;
