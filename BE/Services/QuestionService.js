export default class QuestionService{
    constructor(questionRepository){
        this.questionRepository = questionRepository
    }
    getQuestions(){
        let questions = this.questionRepository.get()
        return questions
    }
}