export interface IReqCreateVehicle {
    type: string;
    price: string;
    images: string[];
    km: number;
    year: string;
    title: string;
    description: string;
    isActive: boolean;
    userId?: string;
}
