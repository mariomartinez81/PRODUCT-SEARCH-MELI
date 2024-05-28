import Button from '../../components/Button';
import stg from '../../utils/strings';
import AssistanceError from './AssistanceError';
import GearsIcon from '../../assets/GearsIcon.svg';
import meliLogo from '../../assets/Logo_ML.png';

interface UnavailableProps {
  type?: 'app' | 'general' | 'home';
}

const Unavailable = ({ type = 'app' }: UnavailableProps) => {
  const isAppError = type === 'app';
  const BottomComponent = isAppError ? (
    <AssistanceError phoneNumber="0800-345-654" />
  ) : (
    <Button
      className="w-full"
      onClick={() => {
        window.location.pathname = '/';
      }}
    >
      {stg('back_to_home')}
    </Button>
  );
  return (
    <div className="h-full px-6 py-6 md:py-20 md:px-0">
      <div className="flex flex-col items-center justify-between h-full mx-auto max-w-92">
        {meliLogo ? (
          <img
            alt=""
            src={meliLogo || ''}
            className="object-contain mx-auto w-9"
          />
        ) : (
          <div />
        )}
        <div className="flex flex-col items-center ">
          {meliLogo && (
            <img src={GearsIcon} alt="gears icon" className="mb-12" />
          )}
          <span className="mb-2 text-2xl font-bold leading-8 text-center text-gray-800">
            {stg('sorry_we_could_not_load_the_page')}
          </span>
          <span className="mb-2 leading-5 text-center text-gray-500 md:text-sm">
            {stg('there_was_an_issue_proccessing_your_request')}
          </span>
        </div>
        {BottomComponent}
      </div>
    </div>
  );
};

export default Unavailable;
