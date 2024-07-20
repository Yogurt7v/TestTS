import './meters.css';
import energyIcon from '../../assets/icons/energy.svg';
import coldIcon from '../../assets/icons/cold.svg';
import warmIcon from '../../assets/icons/warm.svg';
import fireIcon from '../../assets/icons/fire.svg';
import { Meters } from '../../types/types';

type dataType = {
  data: Meters['_type'];
};

export function MetersType({ data }: dataType) {
  let icon;
  let text;

  switch (data) {
    case 'ColdWaterAreaMeter':
      text = 'ХВС';
      icon = coldIcon;
      break;
    case 'HotWaterAreaMeter':
      text = 'ГВС';
      icon = warmIcon;
      break;
    case 'FireWaterAreaMeter':
      text = 'ТПД';
      icon = fireIcon;
      break;
    case '':
      text = 'ЭЛДТ';
      icon = energyIcon;
      break;
    default:
      icon = '';
      break;
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="type">{text}</div>
      </div>
    </div>
  );
}
