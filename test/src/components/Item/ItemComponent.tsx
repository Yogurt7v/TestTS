import style from './ItemComponent.module.css';
import deleteIcon from '../../assets/icons/del.svg';
import disableIcon from '../../assets/icons/disabledButton.svg';
import { MetersType } from '../metersType/MetersType';
import { FullMeters } from '../../types/types';

interface ItemComponentProps {
  item: FullMeters;
  deleteMeter: (id: string) => void;
  index: number;
  isDisabled: boolean;
}

export function ItemComponent({
  item,
  deleteMeter,
  index,
  isDisabled,
}: ItemComponentProps) {
  return (
    <div className={style.wrapper}>
      <div className={style.number}>{index}</div>
      <div className={style.metersType}>
        <MetersType data={item._type[0]} />
      </div>
      <div className={style.date}>
        {new Date(item.installation_date).toLocaleDateString()}
      </div>
      <div className={style.isAuto}>{item.is_automatic ? 'Да' : 'Нет'}</div>
      <div className={style.numbers}>{item.initial_values}</div>
      <div className={style.address}>
        {item.address ? item.address?.house?.address : 'Нет адреса'}
      </div>
      <div className={style.description}>{item.description}</div>
      <div
        className={style.delButtonWrapper}
        onClick={() => deleteMeter(item.id)}
      >
        <div className={isDisabled ? style.disabled : style.delButton}>
          <img src={isDisabled ? disableIcon : deleteIcon} alt="del" />
        </div>
      </div>
    </div>
  );
}
