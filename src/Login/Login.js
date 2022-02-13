import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import WhatsappImage from './Assets/whatsapp.png';
import CallImage from './Assets/call.png';
import Logo from './Assets/Logo.png';
import FacebookLogo from './Assets/facebook.png';
import GoogleLogo from './Assets/Google.png';
import AppleLogo from './Assets/apple.png';
import Success from './Assets/Success-Icon.png';
import Visibility from './Assets/visibility.png';
import NonVisibility from './Assets/non-visibility.png';

import {
  Image,
  Header,
  MainContainer,
  LogoImage,
  styles,
  LoginText,
  Wrapper,
  DetailsText,
  AuthInputs,
  AuthInput,
  LoginButton,
  LoginButtonText,
  ForgetPasswordText,
  LoginWithText,
  SocialMediaLogin,
  SocialMediaText,
  DontHaveAccount,
  DontHaveAccountText,
  SignUpText,
  PrivacyAndTerms,
  PrivacyAndTermsText,
  PandT,
  SocialMediaImage,
  InputIcons,
} from './style';

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState();
  const [password, setPassword] = useState('');

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  /**
   * It logs into the ResCounts API.
   */
  const login = () => {
    fetch('https://api-dev.rescounts.com/api/v1/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  /* A login screen. */
  return (
    <MainContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapper>
          <Header>
            <TouchableOpacity activeOpacity={0.4}>
              <Image source={CallImage} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4}>
              <Image source={WhatsappImage} />
            </TouchableOpacity>
          </Header>
          <LogoImage source={Logo} style={styles.image} />
          <LoginText>Login</LoginText>
          <DetailsText>Add your details to login</DetailsText>
          <AuthInputs>
            <AuthInput
              onChangeText={event => {
                setEmail(event);
                setIsEmail(validateEmail(event));
              }}
              placeholder={'Your Email'}
              placeholderTextColor={'#000'}
            />
            <TouchableOpacity>
              {isEmail !== null && <InputIcons source={Success} />}
            </TouchableOpacity>
            <AuthInput
              onChangeText={event => setPassword(event)}
              secureTextEntry={showPassword}
              placeholder={'Password'}
              placeholderTextColor={'#000'}
            />
            <TouchableOpacity
              activeOpacity={0.4}
              onPress={() => setShowPassword(!showPassword)}>
              {showPassword && <InputIcons source={Visibility} />}
              {!showPassword && <InputIcons source={NonVisibility} />}
            </TouchableOpacity>
          </AuthInputs>
          <LoginButton onPress={login} activeOpacity={0.4}>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
          <TouchableOpacity activeOpacity={0.4}>
            <ForgetPasswordText>Forget your Password?</ForgetPasswordText>
          </TouchableOpacity>
          <LoginWithText>or Login with:</LoginWithText>
          <SocialMediaLogin blue activeOpacity={0.4}>
            <SocialMediaImage source={FacebookLogo} />
            <SocialMediaText blue>Login with Facebook</SocialMediaText>
          </SocialMediaLogin>
          <SocialMediaLogin red activeOpacity={0.4}>
            <SocialMediaImage source={GoogleLogo} />
            <SocialMediaText red>Login with Google</SocialMediaText>
          </SocialMediaLogin>
          <SocialMediaLogin activeOpacity={0.4}>
            <SocialMediaImage source={AppleLogo} />
            <SocialMediaText>Login with Apple</SocialMediaText>
          </SocialMediaLogin>
          <DontHaveAccount>
            <DontHaveAccountText>Dont have an account?</DontHaveAccountText>
            <TouchableOpacity activeOpacity={0.4}>
              <SignUpText>SignUp</SignUpText>
            </TouchableOpacity>
          </DontHaveAccount>
          <PrivacyAndTerms>
            By proceeding, you agree to our{' '}
            <PandT activeOpacity={0.4}>
              <PrivacyAndTermsText>Terms of Use</PrivacyAndTermsText>
            </PandT>{' '}
            and confirm you have read our{' '}
            <PandT activeOpacity={0.4}>
              <PrivacyAndTermsText>
                Privacy and Cookie Statement
              </PrivacyAndTermsText>
            </PandT>
            .{' '}
          </PrivacyAndTerms>
        </Wrapper>
      </ScrollView>
    </MainContainer>
  );
};

export default Login;
