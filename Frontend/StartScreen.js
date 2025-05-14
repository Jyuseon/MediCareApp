import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//Button 태그 대신 TouchableOpacity 사용 

export default function StartScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#4a89dc', '#5a9ae2', '#3b7ddb']} style={styles.gradient} >
          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.title}>약 복용 관리를{'\n'}시작해볼까요?</Text>
              <Text style={styles.subtitle}>알림을 통해 복용 시간을 관리하세요</Text>
            </View>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginButtonText}>로그인</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Join')} >
                <Text style={styles.signupButtonText}>회원가입</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingBottom: 50,
  },
  headerContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 46,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 'auto',
    paddingBottom: 20,
  },
  loginButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonText: {
    color: '#4a89dc',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  signupButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});