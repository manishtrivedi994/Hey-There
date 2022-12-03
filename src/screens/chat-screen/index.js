import React, {useState, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GiftedChat} from 'react-native-gifted-chat';
import {pin} from '../../assets/image-uri';
import {styles} from './styles';

export default function Chat() {
  const currentUser = useSelector(state => state.currentUser.currentUser);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: '12fe3bca-bf06-40e7-979b-fe50406a8afd',
        createdAt: '2022-12-03T08:11:13.525Z',
        text: 'What is up?',
        user: {_id: currentUser.id, avatar: pin, name: 'MNIA'},
      },
      {
        _id: '3388e806-da4b-4066-bacd-4b270e4c35e8',
        createdAt: '2022-12-03T08:11:04.173Z',
        text: 'Hi',
        user: {_id: currentUser.id},
      },
      {
        _id: 1,
        createdAt: '2022-12-03T08:10:27.651Z',
        text: 'Hello developer',
        user: {
          _id: 2,
          avatar: 'https://placeimg.com/140/140/any',
          name: 'React Native',
        },
      },
      {
        _id: 45,
        createdAt: '2022-12-03T08:10:27.651Z',
        text: 'Hello',
        user: {
          _id: 2,
          avatar: 'https://placeimg.com/140/140/any',
          name: 'React Native',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: currentUser.id,
      }}
    />
  );
}
