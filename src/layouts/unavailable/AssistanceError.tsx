import stg from '../../utils/strings';

interface AssistanceErrorProps {
  phoneNumber?: string;
}

const AssistanceError = ({ phoneNumber }: AssistanceErrorProps) => {
  return (
    <span className="text-xs leading-4 text-center text-gray-500 whitespace-pre">
      {stg('if_you_need_immediate_assistance')}
      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    </span>
  );
};

export default AssistanceError;
