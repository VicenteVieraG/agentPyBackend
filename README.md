# México city Simulator
## Using:
- ### AgentPy
- ### Unity
- ### Express TS
# Created by:
- ## Vicente Viera Guízar | A01639784
- ## Renet AKA El Fortnites
- ## Luis AKA El Chompiras
# Types Definitions
```
//All the coordinates of EACH Car in ALL the Iterations will be stored in the cars JSON.
//The key name in cars referenced as "id" is each car´s id. Each car id property contains a coord array. Each coord´s array sub-index represents the position of the corresponding car in that same iteration of the simulation.
/*Example: const positions: cars = {
        totalCars: 5,
        0: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}...{x: final-x-position-of-car-0, y: final-y-position-of-car-0}],
        1: [{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}...{x: final-x-position-of-car-1, y: final-y-position-of-car-1}],
        ...Until All the cars the structure repeats
    }
*/
type coord = {
    x: number;
    y: number;
} | string;
type cars = {
    [id: number | string]: coord[] | number;
    totalCars: number;
};
```"# agentPyBackend" 
