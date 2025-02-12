import { CardTypes } from '@/assets';

export interface BaseAd {
  id: number;
  name: string;
  description: string;
  location: string;
  photo?: string;
}

export interface IRealEstate extends BaseAd {
  type: typeof CardTypes.REAL_ESTATE;
  propertyType: string;
  area: number;
  rooms: number;
  price: number;
}

export interface IAuto extends BaseAd {
  type: typeof CardTypes.AUTO;
  brand: string;
  model: string;
  year: number;
  mileage: number;
}

export interface IService extends BaseAd {
  type: typeof CardTypes.SERVICES;
  serviceType: string;
  experience: number;
  cost: number;
  schedule?: string;
}

export type CardDto = IRealEstate | IAuto | IService;
