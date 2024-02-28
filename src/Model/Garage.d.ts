import { Car } from "./Cars";

export type Garage = {
    id: number;
    name: string;
    cars: Car[];
};