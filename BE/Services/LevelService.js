export default class LevelService{
    constructor(levelRepository){
        this.levelRepository = levelRepository
    }

    getLevels(){
        let myLevels = this.levelRepository.get()
        
        return myLevels
    }
}