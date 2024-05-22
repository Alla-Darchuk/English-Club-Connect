export default class UserService{
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    
    register(login, password){
        let user = {
            login: login,
            password: password,
            role:"user" ,
            name: 'Name',
            surname: 'Surname',
            phone:'0000000000',
            email:'email.@gmail.com',
            photo: 'https://cdn-icons-png.flaticon.com/512/219/219969.png'
        }
        this.userRepository.addUser(user)
    }
    changeUser(userId, newUser){
        this.userRepository.changeUser(userId, newUser)
    }
    getUser(userId, eventId){
        let user
        if(eventId){
            // console.log('in user servise eventId is true')
            user = this.userRepository.getParticipants(eventId)
        }else {
            // console.log('userId in servise = '+userId)
            user = (userId || (userId===0)) ? this.userRepository.getUser(userId) : this.userRepository.get()
        }
        return user
    }
    
    
}