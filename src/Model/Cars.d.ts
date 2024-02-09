export type Car = {
    id: number;
    make: string;
    model: string;
    variant: string;
    year: number;
    color: string;
    mileage: number;
    registration: string;
    engine: Engine;
    service_record: ServiceRecord;
    mileage_updated_at: Date;
    private: boolean;
    predicted_yearly_mileage: number;
    imageUrl?: string;
};