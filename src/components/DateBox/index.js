import styles from './datebox.module.scss';

const DateBox = (props) => {
  const month = props.date.toLocaleString('pt-BR', { month: 'long' });
  const day = props.date.toLocaleString('pt-BR', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className={styles.date_box}>
      <h2>{day}</h2>
      <h6>{month}</h6>
    </div>
  );
};

export default DateBox;
