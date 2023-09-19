import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { userEmailJoin } from '../../../utils/UserFunctions';

interface SignupCertificationBtnProps {
  setIsActive: (isActive: boolean) => void;
  isActive: boolean;
  setMinutes: (minutes: number) => void;
  setSeconds: (seconds: number) => void;
  email: string;
  isCertificated: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const SignupCertificationBtn: React.FC<SignupCertificationBtnProps> = (
  props
) => {

  function handleCertification() {
    props.setIsLoading(true);
    userEmailJoin(props.email)
      .then((res) => {
        props.setIsLoading(false);
      })
      .catch(() => {
        props.setIsLoading(false);
        return alert('이메일을 작성해주세요.');
      });
  }
  return (
    <TouchableOpacity
      style={[styles.button, props.isCertificated ? styles.disabledBtn : null]}
      onPress={handleCertification}
      disabled={props.isCertificated}
    >
      <Text style={props.isCertificated ? styles.disabledText : null}>
        인증
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '23%',
    height: '60%',
    borderRadius: 5,
    borderColor: '#808080',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledBtn: {
    width: '23%',
    height: '60%',
    borderRadius: 5,
    borderColor: '#808080',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(156,156,156)',
  },
  disabledText: {
    color: 'white',
  },
});
export default SignupCertificationBtn;
