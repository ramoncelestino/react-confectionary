import styles from './cardmodule.module.scss';

const CardModule = (props) => {
  return (
    <a href={props.link}>
      <div className={styles.card_module}>
        <i className={props.icon}></i>
        <h3>{props.name}</h3>
      </div>
    </a>
  );
};

export default CardModule;
