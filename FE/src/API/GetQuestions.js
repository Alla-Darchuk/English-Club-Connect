export default async function GetQuestions() {
    
    let url ='http://localhost:8080/question'
    
    const response = await fetch(url, {
        method: 'GET'
    })
    const questions = await response.json()
    
    

    return questions
}