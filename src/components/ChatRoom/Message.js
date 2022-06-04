import React from 'react';
import { Avatar, Typography } from 'antd';
import styled from 'styled-components';
import { formatRelative } from 'date-fns/esm';

const WrapperStyled = styled.div`
  margin-bottom: 15px;

  .author-message {
    margin: 10px 0;
  }

  .author {
    margin-left: 10px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .date {
    margin-left: 10px;
    font-size: 11px;
    color: #a7a7a7;
  }

  .content {
    margin-left: 32px;
    margin-top: 20px;
    background: lightblue;
    border-radius: 10px;
    min-height: px;
    font-size: 15px;
    padding: 10px;
  }
`;

function formatDate(seconds) {
  let formattedDate = '';

  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());

    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
}

export default function Message({ text, displayName, createdAt, photoURL }) {
  return (
    <WrapperStyled>
      <div class='author-message'>
        <Avatar size='small' src={photoURL}>
          {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className='author'>{displayName}</Typography.Text>
        <Typography.Text className='date'>{formatDate(createdAt?.seconds)}</Typography.Text>
      </div>
      <div>
        <Typography.Text className='content'>{text}</Typography.Text>
      </div>
    </WrapperStyled>
    
  );
}
