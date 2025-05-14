// App.js 모든 화면의 import는 여기서 작성

//React, 네이게이션 관련 패키지 import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //네이게이션 컨테이너 (앱 전체 감쌈)
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //스택 네이게이션 생성 (화면 전환의 용이성)

//화면 컴포넌트 import
import StartScreen from './Frontend/StartScreen'; //StartScreen 컴포넌트
import HomeScreen from './Frontend/HomeScreen'; //HomeScreen 컴포넌트

//Stack Navigator 생성 (네비게이션 구성 객체)
const Stack = createNativeStackNavigator();

//루트 컴포넌트
export default function App() {
  return (
		//NavigationContainer = 모든 네비게이션을 감싸는 최상위 컴포넌트트
    <NavigationContainer>
			 {/* Stack.Navigator는 여러 화면을 스택으로로 관리 */}
      <Stack.Navigator 
        RouteName="Start" //시작 시 첫 화면 설정
        screenOptions={{ 
					headerShown: false, //상단 헤더 숨기기
          animation: 'slide_from_right', //화면 전환 애니메이션
        }}
      >
				{/* StartScreen, HomeScreen을 Stack에 등록 */}
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
