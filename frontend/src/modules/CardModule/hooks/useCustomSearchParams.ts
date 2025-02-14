import { useSearchParams } from 'react-router';
import { useCallback, useMemo } from 'react';
import { CAR_VALUES, CardTypes, PROPERTY_VALUES, SERVICE_VALUES } from '@/assets';

type CardType = typeof CardTypes;
type CardTypeValue = CardType[keyof CardType];

type ServiceType = (typeof SERVICE_VALUES)[number];
type CarBrand = (typeof CAR_VALUES)[number];
type PropertyType = (typeof PROPERTY_VALUES)[number];

interface SearchParams {
  q?: string;
  type?: CardTypeValue;
  serviceType?: ServiceType;
  experience?: number;
  cost?: number;
  brand?: CarBrand;
  model?: string;
  year?: number;
  propertyType?: PropertyType;
  area?: number;
  rooms?: number;
  price?: number;
}

export const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsObject = useMemo(() => {
    return {
      q: searchParams.get('q') || undefined,
      type: (searchParams.get('type') as CardTypeValue) || undefined,
      serviceType: (searchParams.get('serviceType') as ServiceType) || undefined,
      experience: Number(searchParams.get('experience')) || undefined,
      cost: Number(searchParams.get('cost')) || undefined,
      brand: (searchParams.get('brand') as CarBrand) || undefined,
      model: searchParams.get('model') || undefined,
      year: Number(searchParams.get('year')) || undefined,
      propertyType: (searchParams.get('propertyType') as PropertyType) || undefined,
      area: Number(searchParams.get('area')) || undefined,
      rooms: Number(searchParams.get('rooms')) || undefined,
      price: Number(searchParams.get('price')) || undefined,
    };
  }, [searchParams]);

  const updateSearchParams = useCallback(
    (newParams: Partial<SearchParams>) => {
      const updatedParams = new URLSearchParams(searchParams);

      Object.entries(newParams).forEach(([key, value]) => {
        if (value !== undefined) {
          updatedParams.set(key, String(value));
        } else {
          updatedParams.delete(key);
        }
      });

      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams]
  );

  return { searchParams: searchParamsObject, setSearchParams: updateSearchParams };
};
