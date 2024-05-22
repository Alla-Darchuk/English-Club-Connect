import messages from "../Mock_data/Messages.js";
import unread from "../Mock_data/Unread.js";

class MessageRepository{
    getAllMessages(){
        return messages
    }

    getUnread(){
        return unread
    }
    addToUnread(message){
        unread.push(message)
    }

    deleteFromUnread(userId){
        for(let i = 0; i < unread.length; i++){
            if(unread[i].userId == userId){
                unread.splice(i,1)
                i--
            }
        }
    }

    getUserMessage(user_Id){
        let userMessages = []
        for(let i  = 0; i < messages.length; i++){
            if(messages[i].userId == user_Id){
                userMessages.push(messages[i])
            }
        }
        return userMessages
    }

    addMessage(message){
        messages.push(message)
        console.log("I save message in repo ")
         
    }
}
export default MessageRepository