export type Job = {
    id: number;
    name: string;
    description: string;
}

export type ServiceItem = {
    id: number;
    interval: number;
    interval_unit: string;
    job: Job;
};

export type CompletedServiceItem = {
    id: number;
    interval_unit: string;
    job: Job;
    completed_at: number;
    completed_by: string;
    completed_by_id?: number;
    service_logged_at?: number;
    proof_url?: string;
}