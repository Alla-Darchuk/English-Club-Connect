export default async function FindEvents(filterObgect) {

    let month = filterObgect.month ? filterObgect.month : '',
        userId = filterObgect.userId ? filterObgect.userId :'',
        level = filterObgect.level ? filterObgect.level : '',
        location = filterObgect.location ? filterObgect.location : ''
        
        if(filterObgect.month === 0){
            month = filterObgect.month
        }
        if(filterObgect.userId === 0){
            userId = filterObgect.userId
        }
        if(filterObgect.level === 0){
            level = filterObgect.level
        }
        if(filterObgect.location === 0){
            location = filterObgect.location
        }
        // console.log('level= '+level+' location = '+location)
    let url ='http://localhost:8080/event?location='+location+'&level='+level+'&month='+month+'&userId='+userId
    
    // console.log('url = '+url)
    const response = await fetch(url, {
        method: 'GET'
    })
    
    const events = await response.json()
    // console.log(events)
    if(events.length>0){
        for (let i = 0; i < events.length; i++){
            events[i].date = new Date(events[i].date)
        }
    }
    return events
}