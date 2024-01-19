import { Engine } from "../Model/Engine";
import { Job, ServiceItem } from "../Model/Service";
import { Caxa, CaxaServiceRecord, DHB, DHBServiceRecord } from "./Engines";
import { oilChange, oilFilterChange, sparkPlugChange } from "./Jobs";


const mockCar2 = {
    id: 2,
    make: 'Ford',
    model: 'Fiesta',
    variant: 'Zetec',
    mileage: 55374,
    predicted_yearly_mileage: 7000,
    year: 2004,
    color: 'black',
    registration: 'ALSCAR',
    engine: DHB,
    service_record: DHBServiceRecord,
    private: true, 
};

const mockCar1 = {
    id: 1,
    make: 'Volkswagen',
    model: 'Golf',
    variant: 'tsi',
    mileage: 44721,
    predicted_yearly_mileage: 11000,
    year: 2012,
    color: 'white',
    registration: 'YN12MBX',
    engine: Caxa,
    service_record: CaxaServiceRecord,
    private: false,
}

const mockGarage = {
    id: 1,
    name: "My Garage",
    cars: [
        {
            ...mockCar1
        },
        {
            ...mockCar2
        }
    ]
}

const mockUser = {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "lqk0H@example.com",
    phone: "555-555-5555",
    garage: mockGarage,
}

export const mockGetAllData = async () => {
    setTimeout(() => {
        return {
            user: mockUser
        }
    }, 2500)
}