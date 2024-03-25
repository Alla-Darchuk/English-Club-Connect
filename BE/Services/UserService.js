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
            phone:'0000000000'
        }
        this.userRepository.addUser(user)
    }
    changeUser(userId, newUser){
        this.userRepository.changeUser(userId, newUser)
    }
    getUser(userId){
        let user = userId ? this.userRepository.getUser(userId) : this.userRepository.get()
        return user
    }
    
    
}