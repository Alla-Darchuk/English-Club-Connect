import users from '../Mock_data/Users.js'
import eventAttendees from '../Mock_data/EventAttendees.js'

export default class UserRepository{

    get(){
        let allUsers 
        for(let i = 0; i<users.length; i++){
            allUsers[i].id = users[i].id
            allUsers[i].name = users[i].name
            allUsers[i].surname = users[i].surname
            allUsers[i].phone = users[i].phone
            allUsers[i].role = users[i].role 
        }
        return allUsers
    }

    addUser(user){
        let newId=users[users.length-1].id+1
        user.id=newId
        users.push(user)
        console.log("New user=")
        console.log(users[users.length-1 ])
    }

    changeUser(userId, newUser){
        for(let i=0; i<users.length; i++){
            if (users[i].id == userId){
                users[i].name = newUser.name
                users[i].surname = newUser.surname
                users[i].phone = newUser.phone
                users[i].role = newUser.role
                console.log("I change user")
                console.log(newUser)
                console.log(users[i])
                break
            }
        }
    }

    getUser(userId){
        let user = {
            id:'',
            login:"",
            password: "",
            role:"" ,
            name: '',
            surname: '',
            phone:''
        }
        for(let i = 0; i<users.length; i++){
            if(users[i].id == userId){
                user.id = users[i].id
                user.name = users[i].name
                user.surname = users[i].surname
                user.phone = users[i].phone
                user.role = users[i].role
            }
        }
        return user
    }
}