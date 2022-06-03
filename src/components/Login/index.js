import React from "react";
import { Row, Col, Button, Typography, Image } from "antd";
import firebase, { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";

const { Title } = Typography;
<<<<<<< HEAD

const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
	const handleLogin = async (provider) => {
		const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

		if (additionalUserInfo?.isNewUser) {
			addDocument("users", {
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
				uid: user.uid,
				providerId: additionalUserInfo.providerId,
				keywords: generateKeywords(user.displayName?.toLowerCase()),
			});
		}
	};

<<<<<<< HEAD
	return (
		<div>
			<Row justify="center" style={{ height: 800 }}>
				<Col span={6}>
					<center>
						<Image
							style={{ width: 210, marginTop: 30, marginLeft: 10 }}
							src={"logo.png"}
							preview={false}
						/>
					</center>
					<Title style={{ textAlign: "center", marginTop: 15 }} level={2}>
						Group04 Chat App
					</Title>
					<Button
						style={{
							width: "100%",
							marginTop: 25,
							background: "lightblue",
							color: "black",
							borderRadius: 10,
						}}
						onClick={() => handleLogin(googleProvider)}
					>
						Đăng nhập bằng Google
					</Button>
				</Col>
			</Row>
		</div>
	);
=======
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
          <Button className="btn-login"
            style={{ width: '100%',height:50, marginTop: 20,background:"lightblue",borderRadius:10,fontSize:20,fontWeight:10 }}
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
>>>>>>> main
}
