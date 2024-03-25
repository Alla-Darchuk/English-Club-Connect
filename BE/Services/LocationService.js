export default class LocationService{
    constructor(locationRepository){
        this.locationRepository = locationRepository
    }

    getLocation(){
        let myLocations = this.locationRepository.get()
        return myLocations
    }
}