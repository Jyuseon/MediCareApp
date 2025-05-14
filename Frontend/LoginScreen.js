import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput,StatusBar,KeyboardAvoidingView,Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  //기본 네비게이션 오른쪽 슬라이드 
  const goToNextScreen = () => {
    navigation.navigate('Home');  //기본 애니메이션 사용
  };

  //뒤로가기 네비게이션 왼쪽 슬라이드
  const goBackWithLeftSlide = () => {
    navigation.navigate('BackToStart');  //왼쪽 슬라이드 애니메이션 사용
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#4a89dc', '#5a9ae2', '#3b7ddb']} style={styles.gradient} >
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.keyboardView} >
            <View style={styles.contentContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>로그인</Text>
                <Text style={styles.headerSubtitle}>약 복용 관리를 시작하세요</Text>
              </View>
              
              <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>아이디</Text>
                  <TextInput
                    placeholder="아이디를 입력하세요"
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    style={styles.input}
                    value={userId}
                    onChangeText={setUserId}
                    autoCapitalize="none"
                  />
                </View>
                
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>비밀번호</Text>
                  <TextInput
                    placeholder="비밀번호를 입력하세요"
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                  />
                </View>
                
                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>비밀번호를 잊으셨나요?</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={goToNextScreen} >
                  <Text style={styles.loginButtonText}>로그인</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.backButton} onPress={goBackWithLeftSlide} >
                  <Text style={styles.backButtonText}>이전으로</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
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
  keyboardView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
  headerContainer: {
    marginTop: 40,
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  formContainer: {
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  input: {
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 'auto',
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
  backButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});