import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MyPageClose from './MyPageClose';
import MypageOpen from './MypageOpen';
import MyPageMenu from './MyPageMenu';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface RootState {
  Modal: {
    mypageModal: boolean;
  };
}

type UserData = {
  memberId: string;
  memberEmail: string;
  memberName: string;
  memberBirthDate: string;
};

// 값을 가져오기
const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // 읽기 에러
    console.error(e);
    throw e;
  }
};

const MyPage: React.FC = () => {
  const clickView = useSelector((state: RootState) => state.Modal.mypageModal);
  const [data, setData] = useState<UserData>({
    memberId: '...',
    memberEmail: '...',
    memberName: '...',
    memberBirthDate: 'l...',
  });

  

  const check = () => {
    console.log('ddd');
  };

  useEffect(() => {
    async function fetch() {
      const memberId = await getData('memberId');
      const memberEmail = await getData('memberEmail');
      const memberName = await getData('memberName');
      const memberBirthDate = await getData('memberBirthDate');
      if (
        memberId !== undefined &&
        memberEmail !== undefined &&
        memberName !== undefined &&
        memberBirthDate != undefined
      ) {
        const tmpData = {
          memberId: memberId,
          memberEmail: memberEmail,
          memberName: memberName,
          memberBirthDate: memberBirthDate,
        };
        setData(tmpData);
      }
    }
    fetch();
  }, [clickView == false]);
  return data.memberId !== '' ? (
    <View style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        {clickView ? <MypageOpen data={data} /> : <MyPageClose data={data} />}
        <HorizonLine />
        <View>
          <MyPageMenu imageName="bell" text="내소식" />
          <MyPageMenu imageName="send" text="송금하기" />
        </View>
      </ScrollView>
    </View>
  ) : (
    <></>
  );
};

const width = Dimensions.get('screen').width;

const HorizonLine = () => {
  return <View style={styles.horizontalLine}></View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
  horizontalLine: {
    borderBottomColor: 'black', // 가로선의 색상 설정
    borderBottomWidth: 2, // 가로선의 두께 설정
    marginVertical: 10, // 위아래 여백 설정 (선택 사항)
  },
  innerContainer: {
    height: 400,
  },
});

export default MyPage;
