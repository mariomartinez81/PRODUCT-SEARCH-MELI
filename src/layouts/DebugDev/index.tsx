import Button from '@components/common/Button';
import stg from '@utils/strings';
import styles from './DebugDev.module.sass';

const DebugDev = ({ stringError }: { stringError?: string }) => {
  const handleCopyButton = () => {
    navigator.clipboard.writeText(stringError ?? '');
  };

  return (
    <div className={styles.DebugDev}>
      <Button onClick={handleCopyButton} className={styles.DebugDev__button}>
        {stg('error_text')}
      </Button>
      <p className={styles['styles.DebugDev__error-message']}>{stringError}</p>
    </div>
  );
};

export default DebugDev;
