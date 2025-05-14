import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>홈 화면</Text>
        <Text style={styles.subtitle}>여기는 약 복용 관리 메인 화면입니다.</Text>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()} //이전 스택인 StartScreen으로 돌아감 스택 -> 후입선출
        >
          <Text style={styles.buttonText}>이전 화면으로</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a89dc',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 40,
  },
  backButton: {
    backgroundColor: '#4a89dc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});