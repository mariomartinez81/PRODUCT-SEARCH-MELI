import stg from '@utils/strings';
import styles from './AssistanceError.module.sass';

interface AssistanceErrorProps {
  phoneNumber?: string;
}

const AssistanceError = ({ phoneNumber }: AssistanceErrorProps) => {
  return (
    <span className={styles.AssistanceError}>
      {stg('if_you_need_immediate_assistance')}
      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    </span>
  );
};

export default AssistanceError;
