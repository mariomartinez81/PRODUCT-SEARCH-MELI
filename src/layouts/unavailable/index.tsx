import AssistanceError from '@layouts/AssistanceError';
import Button from '@components/common/Button';
import stg from '@utils/strings';
import styles from './Unavailable.module.sass';
import GearsIcon from '@assets/GearsIcon.svg';

interface UnavailableProps {
  type?: 'app' | 'general' | 'home';
  logo?: string;
}

const Unavailable = ({ type = 'app', logo }: UnavailableProps) => {
  const isAppError = type === 'app';
  const BottomComponent = isAppError ? (
    <AssistanceError phoneNumber="0800-345-654" />
  ) : (
    <Button
      className={styles.button}
      text={stg('back_to_home')}
      onClick={() => {
        window.location.pathname = '/';
      }}
    />
  );

  return (
    <div className={styles.Unavailable}>
      <div className={styles.container}>
        {logo && <img alt={logo} src={logo || ''} className={styles.logo} />}
        <div className={styles.message}>
          {!logo && (
            <img
              src={GearsIcon}
              alt="gears icon"
              className={styles['gears-icon']}
            />
          )}
          <span className={styles.title}>
            {stg('sorry_we_could_not_load_the_page')}
          </span>
          <span className={styles.subtitle}>
            {stg('there_was_an_issue_proccessing_your_request')}
          </span>
        </div>
        {BottomComponent}
      </div>
    </div>
  );
};

export default Unavailable;
