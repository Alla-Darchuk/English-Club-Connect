import questions from '../Mock_data/Questions.js'

export default class QuestionRepository{
    
    get(){
        return questions
    }

    add(question, answer){
        object = {
            question: question,
            answer: answer
        }
        questions.push(object)
        console.log("New question=")
        console.log(questions[questions.length-1])
    }

    delete(id){
        let i=0
        for(let i=0; i<questions.length;i++){
            if(questions[i].id == id){
                questions.splise(i,1)
                console.log('I delete question!')
                break
            }
        }
    }
}

