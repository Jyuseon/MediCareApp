import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

//navigation 객체는 React Navigation에서 자동으로 props(부모 컴포넌트가 자식 컴포넌트에게 전달)로 넘겨줌
export default function StartScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hometext}>
        <Text style={styles.text1}>약 복용 관리를 시작해볼까요?</Text>
        <Text style={styles.text2}>알림을 통해 복용 시간을 관리하세요</Text>

				 {/* NEXT 버튼을 누르면 Home 화면으로 이동 / Button 대신 TouchableOpacity 사용 / @click 대신 onPress 사용*/}
        <TouchableOpacity style={styles.nextbtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

//css 속성 관리를 위한 style 변수
//const styles = StyleSheet.create({ -> 기본 구조
const styles = StyleSheet.create({
	container: { //div.class랑 유사한 역할
		flex: 1,
		backgroundColor: '#4a89dc',
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
		paddingLeft: 30,
		paddingTop: 100,
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