import React, {useState, useEffect} from "react";
import {Form, InputGroup, Button} from "react-bootstrap";
import socket, { authorize, SendMessage, GetUserHistory, onOwnHistory, onIncomingMessage, onUnreadChats} from "../API/Socket";
import { useSelector, useDispatch } from "react-redux";
import { getUserInformation } from "../redux-store/userInformationSlice";
import MessageItem from "../Components/MessageItem";
import { getChat, chatSlice } from "../redux-store/chatSlice";

function Chat () {
    const dispatch = useDispatch()
    const user = useSelector(getUserInformation)
    const chat = useSelector(getChat)
    const [newMessage, setNewMessage] = useState('')

    let  messageItems = null,        //component
        chatUsers = null        //component

    useEffect(()=>{
        dispatch(chatSlice.actions.setActiveChat(user.id))
        if(user.role === 'admin'){
            onUnreadChats(messages => {
                let ids = []
                for(let i = 0; i < messages.length; i++){
                    ids.push(messages[i].userId)
                }
                dispatch(chatSlice.actions.setUnread(ids))
            })
        } else {
            onOwnHistory(messages => {
                dispatch(chatSlice.actions.setHistory(messages))
            })
        }
        onIncomingMessage(message => {
            dispatch(chatSlice.actions.addMessage(message))
        })
        socket.on('Error', data => {
            alert(data)
        })

        authorize(user)
    },[])

    function selectChat(id) {
        dispatch(chatSlice.actions.removeFromUnread(id))
        dispatch(chatSlice.actions.setActiveChat(id))
        GetUserHistory(id, data => dispatch(chatSlice.actions.setHistory(data)))
    }
    
    if(chat.unreadChatsId){
        chatUsers = chat.unreadChatsId.map((id, index) =>
            <button 
                className="new-question" 
                onClick={()=>{selectChat(id)}}
                key={index}>
                <b>
                    {id}
                </b>
            </button>
        )
    }

    if(chat.messages.length>0){
        messageItems = chat.messages.map((item,index) => 
            <MessageItem message={item} key={index}/>
        )
    }

    function sendNewMessage(){
        if(newMessage.length === 0){
            alert("Please write message for sending!")
        } else {
            SendMessage({
                userId: chat.activeChat,
                message: newMessage
            })
            setNewMessage('')
        }
    }

    const keyListener = (event) =>{
        if (event.key === 'Enter'){
            sendNewMessage()
        }
    }

    return(
        <div>
            <h3>If you did not find the answer to your question, write it below</h3>
            <div className="chat">
                    {chatUsers}
                    {messageItems}
            </div>
            <div className="email-send">
                <InputGroup  className="my-input-text">
                    <InputGroup.Text>Your question:</InputGroup.Text>
                    <Form.Control 
                        required
                        as="textarea"
                        type="text"
                        value={newMessage}
                        onChange={event => setNewMessage(event.target.value)}
                        // onKeyDown={keyListener}
                    />
                </InputGroup>
                <Button  onClick={sendNewMessage} className="btn-clasic">
                    Send my question
                </Button>
            </div>  
        </div>
    )
}
export default Chat