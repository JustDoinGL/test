import { useGetList } from './hooks/useCard';
import { NotFoundPage } from '@/pages';

export const CardInformation = ({ id }: { id: string }) => {
  const { error, isLoading, card } = useGetList(id);

  if (error) return <NotFoundPage />;

  if (isLoading) return <>Loading...</>;

  return <div>{card?.id}</div>;
};
