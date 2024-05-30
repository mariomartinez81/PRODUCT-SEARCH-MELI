import AssistanceError from './AssistanceError';
import Button from '../../components/Button';
import stg from '../../utils/strings';
import GearsIcon from '../../assets/GearsIcon.svg';

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
      className="w-full"
      text={stg('back_to_home')}
      onClick={() => {
        window.location.pathname = '/';
      }}
    />
  );
  return (
    <div className="flex items-center justify-center w-full px-6 py-6 h-dvh md:py-20 md:px-0">
      <div className="flex flex-col items-center h-full mx-auto justify-evenly max-w-92">
        {logo && (
          <img alt="" src={logo || ''} className="object-contain mx-auto w-9" />
        )}
        <div className="flex flex-col items-center ">
          {!logo && <img src={GearsIcon} alt="gears icon" className="mb-12" />}
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
