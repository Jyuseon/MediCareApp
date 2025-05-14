"# MediCareApp" 

# 필수!
StartScreen.js를 Frontend 폴더 안으로 옮긴 후 작업
인터넷에서 Expo Go 회원가입
핸드폰에 Expo Go 설치 필수


npm install --global expo-cli

npx create-expo-app [프로젝트 명] --template blank

cd [프로젝트 명]

npm run android

제작 과정 노트북으로 확인 (터미널에서 명령 실행)
https://docs.expo.dev/router/installation/



1. 인터넷으로 회원가입 및 핸드폰에 expo go 다운

2. Expo 사이트에서 All projects -> Create Project

3. Display Name -> 어플 이름 입력

4. eas init --id 로 시작하는 명령어 복사 후 터미널에서 입력

5. 터미널에서 npx expo start 입력

6. 어플로 터미널에 생성된 QR 코드 인식 (노트북 인터넷과 모바일 인터넷이 일치해야 함)





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


