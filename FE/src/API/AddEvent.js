export default async function AddEvent(event) {

    let url ='http://localhost:8080/event'
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(event)
    })
}