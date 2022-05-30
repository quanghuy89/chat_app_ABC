import React from 'react';
import { Row, Col, Button, Typography ,Image} from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
    // const data = await auth.signInWithPopup(provider);
    // console.warn(data);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  }

  return (
    <div>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <Image style={{ width : 300,textAlign:'center',marginLeft:100 }} 
          src={"logo.png"} 
          />
          <Title style={{ textAlign: 'center', marginTop:30 }} level={2}>
            Group04 Chat App
          </Title>
          <Button
            style={{ width: '100%', marginTop: 20 }}
            onClick={() => handleLogin(googleProvider)}
          >
            Đăng nhập bằng Google
          </Button>
          {/* <Button
            style={{ width: '100%' }}
            onClick={() => handleLogin(fbProvider)}
          >
            Đăng nhập bằng Facebook
          </Button> */}
        </Col>
      </Row>
    </div>
  );
}
