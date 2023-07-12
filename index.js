// Code your solution in this file!
function distanceFromHqInBlocks (location) {
    //returns the number of blocks given a value
    if (location<42){
      return(42-location);
    
}else{
 
    return(location-42);
  }
  }
  function distanceFromHqInFeet (location) {
    return distanceFromHqInBlocks(location)*264;

}
function distanceTravelledInFeet(start,destination){
    if (start>destination){
        return((start-destination)*264);
      }
      else{
        return((destination-start)*264);
    }
        
}

function calculatesFarePrice(start,destination){
    let feet = distanceTravelledInFeet(start,destination);
    if (feet<= 400){
      return 0;
    }
    if (feet>=400 && feet<=2000){
      return (feet-400)* 0.02;
    }
    else if(feet>=2000&& feet<=2500){
      return 25;
    }
    else if (feet> 2500){
      return "cannot travel that far";
    }
  }
