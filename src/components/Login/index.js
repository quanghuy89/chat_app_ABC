import React from "react";
import { Row, Col, Button, Typography, Image } from "antd";
import firebase, { auth } from "../../firebase/config";
import { addDocument, generateKeywords } from "../../firebase/services";

const { Title } = Typography;

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
}
