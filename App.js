import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hometext}>
        <Text style={styles.text1 }>약 복용 관리를 시작해볼까요?</Text>
        <Text style={styles.text2}>알림을 통해 복용 시간을 관리하세요</Text>
        <TouchableOpacity style={styles.nextbtn}>
          <Text style={styles.btnText}>NEXT</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a89dc',
    // 화면 전체 꽉 채움
  },
  hometext: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text1: {
    fontSize: 60,
    fontWeight: 'bold',
		alignContent: 'left',
    color: '#fff',
    paddingLeft: 50,
    paddingTop: 500,
    paddingRight: 30,
  },
  text2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 30,
    paddingTop: 20,
    paddingRight: 30,
  },
  nextbtn: {
    backgroundColor: 'orange',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
