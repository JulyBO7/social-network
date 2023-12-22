import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostsType = PostType[]
export type PostType = {
  id: number
  message: string
  likesCount: number
}
type DialogType = {
  id: number
  name: string
} 
export type DialogsType = Array<DialogType>

type MessageType = {
  id: number
  message: string
}
export type MessagesType = MessageType[]

let posts: PostsType  = [
  {id: 1, message: 'Hello!', likesCount: 12}, 
  {id: 2, message: 'How are you?', likesCount: 4}, 
  {id: 3, message: 'How is your trainy?', likesCount: 7}, 

]
let dialogs: DialogsType = [
{ id: 1, name: 'July' },
{ id: 2, name: 'Nikita' },
{ id: 3, name: 'Katya' },
{ id: 4, name: 'Dasha' }]

let messages: MessagesType  = [
 {id: 1, message: 'I want to be a frontend developer))'} , 
 {id: 2, message: 'I like my job'} , 
 {id: 3, message: 'I like working as a massage therapist'} , 
 {id: 4, message: 'I want to change my job'} , 

]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);