"# MediCareApp" 


제작 과정 노트북으로 확인
https://docs.expo.dev/router/installation/

expo 프로젝트 실행 참고
https://ambiguous-pleasure-dd6.notion.site/10fb855c510e80c1b2feccdd9cb08a76?p=10fb855c510e81ec94afce68946cb432&pm=s


# 1. 프로젝트에 필요한 웹 관련 패키지 설치 (웹 지원용)
npx expo install react-native-web react-dom

# 2. 환경 변수용 dotenv 설치
npm install react-native-dotenv

# 3. React Navigation 기본 설치
npm install @react-navigation/native

# 4. Native Stack 사용 시 필요한 추가 패키지 설치
npm install @react-navigation/native-stack

# 5. React Navigation 필수 peer dependencies 설치 (expo 버전에 맞게)
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons

# 6. 캐시 초기화 후 실행 (필요 시)
expo start -c

# 7. 프로젝트 실행 명령어
npx expo start
