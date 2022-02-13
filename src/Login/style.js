import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const MainContainer = styled.View`
  margin: 10px;
`;

export const Wrapper = styled.View`
  align-items: center;
`;

export const Image = styled.Image`
  width: 55px;
  height: 55px;
`;

export const LogoImage = styled.Image`
  width: 200px;
  height: 55px;
  margin-top: 10px;
`;

export const SocialMediaImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const InputIcons = styled.Image`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 130px;
  bottom: 25px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const LoginText = styled.Text`
  font-size: 21px;
  font-weight: 900;
  margin-top: 15px;
  color: #474746;
`;

export const DetailsText = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: #7c7d7e;
`;

export const AuthInput = styled.TextInput`
  width: 90%;
  border-width: 1px;
  height: 50px;
  border-radius: 10px;
  border-color: #bebebe;
  padding: 15px;
  margin-bottom: 15px;
`;

export const AuthInputs = styled.View`
  margin-top: 30px;
  width: 100%;
  align-items: center;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background-color: #e9d023;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 35px;
`;

export const LoginButtonText = styled.Text`
  font-size: 20px;
  color: black;
`;

export const ForgetPasswordText = styled.Text`
  font-size: 15px;
  color: #474746;
  margin-top: 40px;
`;

export const LoginWithText = styled.Text`
  font-size: 14px;
  color: #7c7d7e;
  margin-top: 50px;
`;

export const SocialMediaLogin = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props =>
    props?.blue ? '#5D98CC' : props?.red ? '#C12F2F' : '#474746'};
`;

export const SocialMediaText = styled.Text`
  font-size: 16px;
  color: black;
  color: ${props =>
    props?.blue ? '#5D98CC' : props?.red ? '#C12F2F' : '#474746'};
  margin-left: 20px;
`;

export const DontHaveAccount = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`;
export const DontHaveAccountText = styled.Text``;
export const SignUpText = styled.Text`
  margin-left: 5px;
  color: #474746;
  font-weight: 900;
`;

export const PrivacyAndTerms = styled.Text`
  text-align: center;
  margin-top: 20px;
  color: #474746;
  font-weight: 700;
`;

export const PandT = styled.TouchableOpacity``;
export const PrivacyAndTermsText = styled.Text`
  text-decoration: underline;
  color: #474746;
`;

export const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});
