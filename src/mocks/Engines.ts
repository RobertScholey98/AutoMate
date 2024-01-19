import { Engine } from "../Model/Engine";
import { CompletedServiceItem, ServiceItem } from "../Model/Service";
import { airFilterChange, front_tyres, fuelFilterChange, oilChange, oilFilterChange, pollenFilterChange, sparkPlugChange, timingBeltChange } from "./Jobs";

export const Caxa: Engine = {
    id: 1,
    engine_code: 'CAXA',
    cylinders: 4,
    displacement: 1.4,
    fuel_type: 'petrol',
    transmission: 'manual',
    service_Intervals: [
        {
            id: 1,
            interval: 10000,
            interval_unit: "miles",
            job: oilChange
        },
        {
            id: 2,
            interval: 50000,
            interval_unit: "miles",
            job: sparkPlugChange
        },
        {
            id: 3,
            interval: 10000,
            interval_unit: "miles",
            job: oilFilterChange
        }
    ]
}

export const CaxaServiceRecord: CompletedServiceItem[] = [
    {
        id: 1,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 9420,
        completed_by: "Rob",
        completed_by_id: 1,
    },
    {
        id: 2,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 9420,
        completed_by: "Rob",
        completed_by_id: 1,
    },
    {
        id: 3,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 21000,
        completed_by: "Rob",
        completed_by_id: 1,
    },
    {
        id: 4,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 21000,
        completed_by: "Rob",
        completed_by_id: 1,
    },
    {
        id: 5,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 40000,
        completed_by: "Rob",
        completed_by_id: 1,
    },
    {
        id: 6,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 40000,
        completed_by: "Rob",
        completed_by_id: 1,
    },
    {
        id: 5,
        interval_unit: "miles",
        job: sparkPlugChange,
        completed_at: 55000,
        completed_by: "Rob",
        completed_by_id: 1,
        proof_url: 'https://picsum.photos/200/300'
    },
    {
        id: 6,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 55000,
        completed_by: "Rob",
        completed_by_id: 1,
    },
    {
        id: 7,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 55000,
        completed_by: "Rob",
        completed_by_id: 1,
    },
    {
        id: 8,
        interval_unit: "miles",
        job: front_tyres,
        completed_at: 55000,
        completed_by: "Rob",
        completed_by_id: 1,
    }
];

export const DHB: Engine = {
    id: 2,
    engine_code: 'DHB',
    cylinders: 4,
    displacement: 1.2,
    fuel_type: 'petrol',
    transmission: 'manual',
    service_Intervals: [
        {
            id: 1,
            interval: 6000,
            interval_unit: "miles",
            job: oilChange
        },
        {
            id: 2,
            interval: 6000,
            interval_unit: "miles",
            job: oilFilterChange
        },
        {
            id: 3,
            interval: 12500,
            interval_unit: "miles",
            job: pollenFilterChange
        },
        {
            id: 2,
            interval: 37500,
            interval_unit: "miles",
            job: sparkPlugChange
        },
        {
            id: 5,
            interval: 37500,
            interval_unit: "miles",
            job: airFilterChange
        },
        {
            id: 6,
            interval: 50000,
            interval_unit: "miles",
            job: timingBeltChange
        },
        {
            id: 7,
            interval: 75000,
            interval_unit: "miles",
            job: fuelFilterChange
        }
    ]
};

export const DHBServiceRecord: CompletedServiceItem[] = [
    {
        id: 1,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 6500,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 2,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 6500,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 3,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 12500,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 4,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 12500,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 5,
        interval_unit: "miles",
        job: pollenFilterChange,
        completed_at: 12500,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 6,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 20000,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 7,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 20000,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 8,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 26000,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 9,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 26000,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 10,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 37500,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 11,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 37500,
        completed_by: "Alex",
        completed_by_id: 2,
    }
    {
        id: 12,
        interval_unit: "miles",
        job: sparkPlugChange,
        completed_at: 37500,
        completed_by: "Alex",
        completed_by_id: 2,
        proof_url: 'https://picsum.photos/200/300',
    },
    {
        id: 13,
        interval_unit: "miles",
        job: airFilterChange,
        completed_at: 37500,
        completed_by: "Alex",
        completed_by_id: 2,
        proof_url: 'https://picsum.photos/200/300',
    },
    {
        id: 14,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 34000,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 15,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 34000,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 16,
        interval_unit: "miles",
        job: oilChange,
        completed_at: 51000,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 17,
        interval_unit: "miles",
        job: oilFilterChange,
        completed_at: 51000,
        completed_by: "Alex",
        completed_by_id: 2,
    },
    {
        id: 18,
        interval_unit: "miles",
        job: timingBeltChange,
        completed_at: 51000,
        completed_by: "Alex",
        completed_by_id: 2,
    }

    