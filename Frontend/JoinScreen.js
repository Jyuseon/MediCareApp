import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput,ScrollView,StatusBar,KeyboardAvoidingView,Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function JoinScreen({ navigation }) {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const goToNextScreen = () => {
    navigation.navigate('Home');  
  };

  const goBackWithLeftSlide = () => {
    navigation.navigate('BackToStart');  
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['#4a89dc', '#5a9ae2', '#3b7ddb']} style={styles.gradient}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.keyboardView}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
              <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>회원가입</Text>
                <Text style={styles.headerSubtitle}>약 복용 관리를 시작하기 위한 계정을 만들어보세요</Text>
              </View>
              
              <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>이름</Text>
                  <TextInput
                    placeholder="이름을 입력하세요"
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                  />
                </View>
                
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
                
                <View style={styles.inputGroup}>
                  <Text style={styles.inputLabel}>비밀번호 확인</Text>
                  <TextInput
                    placeholder="비밀번호를 다시 입력하세요"
                    placeholderTextColor="rgba(255, 255, 255, 0.6)"
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                  />
                </View>
              </View>
              
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.signUpButton} onPress={goToNextScreen}>
                  <Text style={styles.signUpButtonText}>가입하기</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.backButton} onPress={goBackWithLeftSlide}>
                  <Text style={styles.backButtonText}>이전으로</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 30,
  },
  headerContainer: {
    marginTop: 30,
    marginBottom: 30,
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
    lineHeight: 22,
  },
  formContainer: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
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
  buttonContainer: {
    marginTop: 10,
  },
  signUpButton: {
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
  signUpButtonText: {
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