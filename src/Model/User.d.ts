import { Garage } from "./Garage";

export type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    garage: Garage;
    settings: Settings;
}

export type Settings = {
    MOT_reminder: boolean;
    service_reminder: boolean;
    notification: boolean;
    MOT_reminder_days: number;
    service_reminder_days: number;
};