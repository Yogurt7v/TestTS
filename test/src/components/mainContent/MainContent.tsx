import { observer } from 'mobx-react-lite';
import { metersStore } from '../../store/metersStore';
import { useEffect } from 'react';
import { ItemComponent } from '../Item/ItemComponent.tsx';
import { FullMeters } from '../../types/types';

export const MainContent = observer(() => {
  const { meters, isDisabled, getMetersAction, deleteMeter } = metersStore; //  получение данных из старого стора

  useEffect(() => {
    getMetersAction();
  }, []);

  if (meters?.status === 'pending') {
    return <h3>Загрузка...</h3>;
  }

  if (meters?.status === 'rejected') {
    return <h3>Произошла ошибка</h3>;
  }

  return (
    <>
      {meters?.value?.map((item: FullMeters, index: number) => (
        <ItemComponent
          key={item.id}
          item={item}
          deleteMeter={deleteMeter}
          index={index + 1}
          isDisabled={isDisabled}
        />
      ))}
    </>
  );
});
