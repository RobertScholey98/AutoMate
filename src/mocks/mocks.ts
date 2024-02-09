import { Car } from "../Model/Cars";
import { Engine } from "../Model/Engine";
import { Job, ServiceItem } from "../Model/Service";
import { Caxa, CaxaServiceRecord, DHB, DHBServiceRecord } from "./Engines";
import { oilChange, oilFilterChange, sparkPlugChange } from "./Jobs";


export const mockCar2: Car = {
    id: 2,
    make: 'Ford',
    model: 'Fiesta',
    variant: 'Zetec',
    mileage: 55374,
    mileage_updated_at: new Date(2024, 1, 1),
    predicted_yearly_mileage: 7000,
    year: 2004,
    color: 'black',
    registration: 'AL1C3 WIP',
    engine: DHB,
    service_record: DHBServiceRecord,
    private: true, 
    imageUrl: 'https://cloud.leparking.fr/2021/11/06/16/01/ford-fiesta-mk6-fiesta-st150-noir_8327335734.jpg',
};

export const mockCar1: Car = {
    id: 1,
    make: 'Volkswagen',
    model: 'Golf',
    variant: 'TSI',
    mileage: 44721,
    mileage_updated_at: new Date(2024, 1, 1),
    predicted_yearly_mileage: 11000,
    year: 2012,
    imageUrl: 'https://live.staticflickr.com/5306/5669861710_35ea20bedb_b.jpg',
    color: 'white',
    registration: 'YN12 MBX',
    engine: Caxa,
    service_record: CaxaServiceRecord,
    private: false,
}

export const mockGarage = {
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