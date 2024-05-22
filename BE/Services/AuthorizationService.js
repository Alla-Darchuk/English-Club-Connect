
import url from 'url';

export default class AuthorizationService{
    constructor(userRepository) {
        this.userRepository = userRepository
    }
    
    
    login(req,res){
        let  urlRequest = url.parse(req.url, true),
        login = urlRequest.query.login,
        password = urlRequest.query.password,
        users = this.userRepository.get(),
        user = {}

        for(let i=0;i<users.length;i++){
            if((users[i].login===login)&&(users[i].password===password)){
                user.id=users[i].id
                user.role=users[i].role
                break
            }
        }
        if(user){
            // console.log('user from AuthorizationService =' +user)
            res.end(JSON.stringify(user))
        }else{
            res.status(401).send('Unauthorized')
        }
        
    }
}
