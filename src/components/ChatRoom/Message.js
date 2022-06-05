import React from "react";
import { Avatar, Typography } from "antd";
import styled from "styled-components";
import { formatRelative } from "date-fns/esm";

const WrapperStyled = styled.div`
	.message {
		margin-bottom: 15px;
		display: flex;
		flex-direction: column;
	}

	.author {
		margin-left: 44px;
		margin-bottom: 5px;
		font-weight: bold;
		color: #848689;
	}

	.date {
		margin-left: 10px;
		font-size: 11px;
		color: #a7a7a7;
	}

	.content {
		margin-left: 10px;
		background: rgb(245, 241, 241);
		color: black;
		border-radius: 10px;
		margin-bottom: 5px;
		font-size: 15px;
		padding: 10px;
		display: inline-block;
		max-width: 351px;
	}

	.message.own {
		display: flex;
		flex-direction: column;
		margin-bottom: 0px;
		margin-right: 10px;
		align-items: flex-end;
	}

	.message.own .content {
		background: lightblue;
		color: black;
		border-radius: 10px;
		font-size: 15px;
		padding: 10px;
		margin-bottom: 10px;
		display: inline-block;
		max-width: 351px;
	}
`;

function formatDate(seconds) {
	let formattedDate = "";

	if (seconds) {
		formattedDate = formatRelative(new Date(seconds * 1000), new Date());

		formattedDate =
			formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
	}

	return formattedDate;
}

export default function Message({
	text,
	displayName,
	createdAt,
	photoURL,
	own,
}) {
	return (
		<WrapperStyled>
			<div className={own ? "message own" : "message"}>
				<div>
					<Typography.Text className='author' hidden={own}>
						{displayName}
					</Typography.Text>
					<Typography.Text className='date' hidden={own}>
						{formatDate(createdAt?.seconds)}
					</Typography.Text>
				</div>
				<div>
					<Avatar
						size='medium'
						src={photoURL}
						title={own ? "You" : displayName}>
						{photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
					</Avatar>
					<Typography.Paragraph
						className='content'
						title={formatDate(createdAt?.seconds)}>
						{text}
					</Typography.Paragraph>
				</div>
			</div>
		</WrapperStyled>
	);
}
