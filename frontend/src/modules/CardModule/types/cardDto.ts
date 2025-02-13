import { CardTypes, PROPERTY_VALUES, CAR_VALUES, SERVICE_VALUES } from '@/assets';

export interface BaseAd {
  id: number;
  name: string;
  description: string;
  location: string;
  photo?: string;
}

export interface IRealEstate extends BaseAd {
  type: typeof CardTypes.REAL_ESTATE;
  propertyType: (typeof PROPERTY_VALUES)[number];
  area: number;
  rooms: number;
  price: number;
}

export interface IAuto extends BaseAd {
  type: typeof CardTypes.AUTO;
  brand: (typeof CAR_VALUES)[number];
  model: string;
  year: number;
  mileage: number;
}

export interface IService extends BaseAd {
  type: typeof CardTypes.SERVICES;
  serviceType: (typeof SERVICE_VALUES)[number];
  experience: number;
  cost: number;
  schedule?: string;
}

export type CardDto = IRealEstate | IAuto | IService;
