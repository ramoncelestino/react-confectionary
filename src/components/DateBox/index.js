import styles from './datebox.module.scss';
import moment from 'moment';
const DateBox = (props) => {
  console.log(props.date);
  var selected_date = new Date('{{ props.date.isoformat }}');
  console.log(selected_date);

  var momentDate = moment(props.date, 'YYYY-MM-DDTHH:mm:ss+-HH:mm:ss');

  const month = momentDate.toDate().toLocaleString('pt-BR', { month: 'long' });
  const day = momentDate.toDate().toLocaleString('pt-BR', { day: '2-digit' });

  return (
    <div className={styles.date_box}>
      <h2>{day}</h2>
      <h6>{month}</h6>
    </div>
  );
};

export default DateBox;
