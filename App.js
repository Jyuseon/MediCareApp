//모든 화면 컴포넌트는 App.js에서 import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Animated } from 'react-native';

//화면 컴포넌트 import
import StartScreen from './Frontend/StartScreen';
import LoginScreen from './Frontend/LoginScreen';
import JoinScreen from './Frontend/JoinScreen';
import HomeScreen from './Frontend/HomeScreen';

const Stack = createStackNavigator();

//오른쪽 슬라이드 애니메이션 (일반적인 전환)
const slideFromLeft = ({ current, layouts }) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
  };
};

//왼쪽 슬라이드 애니메이션 (뒤로가기)
const slideFromRight = ({ current, layouts }) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [-layouts.screen.width, 0],
          }),
        },
      ],
    },
  };
};

export default function App() {
  return (
    <NavigationContainer> 
			{/*실행 시, StartScreen으로 시작 / 헤더 비활성화, 일반 전환 애니메이션 적용*/}
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false, gestureEnabled: false, cardStyleInterpolator: slideFromLeft }} >

				{/*스택 구조에 화면 컴포넌트 연결 - 후입선출 구조*/}
        <Stack.Screen name="Start" component={StartScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Join" component={JoinScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        
        {/*뒤로가기 애니메이션 - 왼쪽 슬라이드/각 화면 내에서 각 변수 명을 가진 요소에게 애니메이션 적용용*/}
        <Stack.Screen name="BackToStart" component={StartScreen} options={{ cardStyleInterpolator: slideFromRight }}/>
        <Stack.Screen name="BackToLogin" component={LoginScreen} options={{ cardStyleInterpolator: slideFromRight }}/>
        <Stack.Screen name="BackToJoin" component={JoinScreen} options={{ cardStyleInterpolator: slideFromRight }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}