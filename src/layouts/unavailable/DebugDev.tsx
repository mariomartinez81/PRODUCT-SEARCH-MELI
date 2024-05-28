import Button from '../../components/Button';
import stg from '../../utils/strings';

const DebugDev = ({ stringError }: { stringError?: string }) => {
  const handleCopyButton = () => {
    navigator.clipboard.writeText(stringError ?? '');
  };

  return (
    <div className="h-full p-6 overflow-y-auto md:px-0">
      <Button onClick={handleCopyButton} className="mb-5">
        {stg('error_text')}
      </Button>
      <p className="whitespace-pre-line">{stringError}</p>
    </div>
  );
};

export default DebugDev;
