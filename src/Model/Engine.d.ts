import { ServiceItem } from "./Service";

export type Engine = {
    id: number;
    displacement: number;
    fuel_type: string;
    cylinders: number;
    transmission: string;
    engine_code: string;
    service_intervals: ServiceItem[];
}