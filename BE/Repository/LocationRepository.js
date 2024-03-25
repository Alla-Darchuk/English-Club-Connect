import locations from "../Mock_data/Locations.js"

export default class LocationsRepository{

    get(){
        return locations
    }
    getName(){
        let names=[]
        for(let i=0;i<locations.length;i++){
            names[i].id = locations[i].id
            names[i].name= locations[i].name
        }
        return names
    }
    add(location){
        location.id = locations[locations.length-1].id+1
        locations.push(location)
        console.log("New location=")
        console.log(locations[locations.length-1])
    }
    delete(id){
        let i=0
        for(let i=0; i<locations.length;i++){
            if(locations[i].id == id){
                locations.splise(i,1)
                console.log('I delete location!')
                break
            }
        }
    }
}
