import React from "react";
import { Button, Avatar, Typography } from "antd";
import styled from "styled-components";

import { auth } from "../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";
import { AppContext } from "../../Context/AppProvider";

const WrapperStyled = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgba(82, 38, 83);
	padding: 12px 16px;

	.avatar {
		margin-bottom: 6px;
	}

	.username {
		color: #fff;
		font-size: 18px;
		margin-left: 10px;
		padding: 10px 0px;
	}
`;

// export default function UserInfo() {

// }

export default function UserInfo() {
	const {
		user: { displayName, photoURL },
	} = React.useContext(AuthContext);
	const { clearState } = React.useContext(AppContext);

	return (
		<WrapperStyled>
			<div>
				<Avatar className='avatar' src={photoURL}>
					{photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
				</Avatar>
				<Typography.Text className='username'>{displayName}</Typography.Text>
			</div>
			<Button
				ghost
				onClick={() => {
					// clear state in App Provider when logout
					clearState();
					auth.signOut();
				}}>
				Đăng xuất
			</Button>
		</WrapperStyled>
	);
}
