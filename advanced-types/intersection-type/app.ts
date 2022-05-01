type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date;
}

type TypeElevatedEmployee = Admin & Employee;
interface IElevatedEmployee extends Admin, Employee {}

const e1: TypeElevatedEmployee = {
    name: "Reşat",
    privileges: ['create-server', 'create-react-components'],
    startDate: new Date()
}

const e2: IElevatedEmployee = {
    name: "Reşat",
    privileges: ['create-server', 'create-react-components'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;