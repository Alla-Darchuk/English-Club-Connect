import users from '../Mock_data/Users.js'
import eventAttendees from '../Mock_data/EventAttendees.js'

export default class UserRepository{

    get(){
        let allUsers = []
        for(let i = 0; i<users.length; i++){
            allUsers[i] = JSON.parse(JSON.stringify(users[i]))
        }
        return allUsers
    }

    addUser(user){
        let newId=users[users.length-1].id+1
        user.id=newId
        users.push(user)
        // console.log("New user=")
        // console.log(users[users.length-1 ])
    }

    changeUser(userId, newUser){
        for(let i=0; i<users.length; i++){
            if (users[i].id == userId){
                users[i].name = newUser.name
                users[i].surname = newUser.surname
                users[i].phone = newUser.phone
                users[i].role = newUser.role
                console.log("I change user")
                // console.log(newUser)
                // console.log(users[i])
                break
            }
        }
    }

    getUser(userId){
        // console.log('I am in getUser & user =')
        let user = {
            id:'',
            role:"" ,
            name: '',
            surname: '',
            phone:'',
            email:'',
            photo: ''
        }
        for(let i = 0; i<users.length; i++){
            if(users[i].id == userId){
                user.id = users[i].id
                user.name = users[i].name
                user.surname = users[i].surname
                user.phone = users[i].phone
                user.role = users[i].role
                user.email = users[i].email
                user.photo = users[i].photo
            }
        }
        // console.log(user)
        return user
    }

    getParticipants(eventId){
        let usersId = [],
        participants = []
        for(let i = 0; i < eventAttendees.length; i++){
            if(eventAttendees[i].event_id === eventId){
                usersId.push(eventAttendees[i].user_id)
            }
        }
        if(usersId.length>0){
            for (let i = 0; i<usersId.length; i++){
                participants.push(this.getUser(usersId[i]))
            }
        }
        return participants
    }
}