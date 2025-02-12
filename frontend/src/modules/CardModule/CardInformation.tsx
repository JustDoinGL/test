import { CustomNotFound } from '@/ui';
import { useGetList } from './hooks/useCard';
import { CardTypes } from '@/assets';

export const CardInformation = ({ id }: { id: string }) => {
  const { error, isLoading, card } = useGetList(id);

  if (error) return <CustomNotFound />;

  if (isLoading) return <>Loading...</>;

  return <div>{card?.type === CardTypes.AUTO}</div>;
};
