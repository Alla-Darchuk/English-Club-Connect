export default class SuggestionService{
    constructor(suggestionRepository){
        this.suggestionRepository = suggestionRepository
    }

    addSuggestion(newSuggestion){
        this.suggestionRepository.add(newSuggestion)
    }

    getSuggestions(){
        let suggestions = this.suggestionRepository.get()
        return suggestions
    }

    deleteSuggestion(suggestionId){
        this.suggestionRepository.delete(suggestionId)
    }
}