const url =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const addCar = (car) => {
  return {
    type: "ADD_CAR",
    value: car,
  };
};

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    value: index,
  };
};

export const fetchMakes = () => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        
          //dispatch returns the action which is just a function that returns an object
        dispatch({
          type: "FETCH_MAKES",
          value: response.Results, //results from API call on line 20
        });
      });
  };
};
