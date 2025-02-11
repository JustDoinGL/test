export interface BaseAd {
  id: number;
  name: string;
  description: string;
  location: string;
  type: 'Недвижимость' | 'Авто' | 'Услуги';
  photo?: string;
}

export interface IRealEstate extends BaseAd {
  // category: 'Недвижимость';
  propertyType: string; // Тип недвижимости (например: квартира, дом, коттедж и т.д.) (выпадающий список, обязательное, строка)
  area: number;
  rooms: number;
  price: number;
}

export interface IAuto extends BaseAd {
  // category: 'Авто';
  brand: string; // выпадающий список, обязательное, строка
  model: string;
  year: number;
  mileage: number; // По условию это поле не обязятельное, но на бэке оно обязательное
}

export interface IService extends BaseAd {
  // category: 'Услуги';
  serviceType: string; //Тип услуги (например: ремонт, уборка, доставка) (выпадающий список, обязательное, строка)
  experience: number;
  cost: number;
  schedule?: string;
}

export type CardDto = IService & IAuto & IRealEstate;
