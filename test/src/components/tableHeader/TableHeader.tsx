import style from './TableHeader.module.css';

export function TableHeader() {
  return (
    <div className={style.wrapper}>
      <div className={style.number}>№</div>
      <div className={style.metersType}>Тип</div>
      <div className={style.date}>Дата установки</div>
      <div className={style.isAuto}>Автоматический</div>
      <div className={style.numbers}>Текущие показатели</div>
      <div className={style.address}>Адрес</div>
      <div className={style.description}>Примечание</div>
    </div>
  );
}
