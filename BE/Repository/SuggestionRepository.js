import suggestion from '../Mock_data/Suggestions.js'

export default class SuggestionRepository{
    get(){
        return suggestion
    }

    add(new_event){
        new_event.id = suggestion[suggestion.length-1].id+1
        new_event.date = new Date(new_event.date)
        suggestion.push(new_event)
        console.log("New suggestion=")
        console.log(suggestion[suggestion.length-1])
    }

    delete(id){
        for(let i=0;i<suggestion.length; i++){
            if(suggestion[i].id==id){
                suggestion.splice(i,1)
                console.log('I delete suggestion!')
                break
            }
        }
    }
}
