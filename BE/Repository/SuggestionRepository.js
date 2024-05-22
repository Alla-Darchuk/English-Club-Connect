import suggestion from '../Mock_data/Suggestions.js';
import locations from '../Mock_data/Locations.js';

export default class SuggestionRepository{

    addLocationObj(suggestionWithLocation){
        for(let i=0; i<locations.length; i++){
            if(suggestionWithLocation.location_id==locations[i].id){
                delete suggestionWithLocation.location_id // I need to finde what to do this line....
                suggestionWithLocation.location = locations[i]
                return suggestionWithLocation
            }
        }
    }

    get(){
        let suggestions = JSON.parse(JSON.stringify(suggestion))
        
        for(let i = 0; i<suggestions.length; i++){
            suggestions[i] = this.addLocationObj(suggestions[i])
        }
        console.log(suggestions)

        return suggestions
    }

    

    add(new_event){
        if(suggestion.length > 0){
            new_event.id = suggestion[suggestion.length-1].id+1
        } else {
            new_event.id = 0
        }
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
