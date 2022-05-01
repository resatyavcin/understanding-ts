type UnknownEmployee = Admin | Employee;

const emp2: UnknownEmployee = {
    name: "Reşat",
    startDate: new Date()
}

function printEmployeeInformation(emp: UnknownEmployee){
    console.log("Name " + emp.name)
    // if(typeof emp === 'Employee') :) //Can be number,string,object
    if('startDate' in emp)
        console.log("Date " + emp.startDate)
    
}

printEmployeeInformation(emp2)

/*****************************************************/

class Car {
    drive(){
        console.log("Driving...")
    }
}

class Truck {
    drive(){
        console.log("Driving a truck...")
    }

    loadCargo(amount: number){
        console.log("Loading cargo... " + amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if('loadCargo' in vehicle)
        vehicle.loadCargo(1000);
    
}

useVehicle(v1);


//if you write wrong 'loadCargo' string

function useVehicleDif(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck)
        vehicle.loadCargo(1000); 
}




function add(a: string, b: number) : string
function add(a: number, b: string) : string
function add(a: string, b: string) : string
function add(a: number, b: number) : number
function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a+b;
}

//overloading

const result = add(1,5);
// const result2 = add("Reşat ","YAVÇİN") as string;
const result2 = add("Reşat ","YAVÇİN");

result2.split('')