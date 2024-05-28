interface HandlerKeyPressProps {
  event: React.KeyboardEvent<HTMLInputElement>;
  callback?: <T>(arg?: T) => void;
  key?: string;
}

const handleKeyPress = ({
  event,
  callback,
  key = 'Enter',
}: HandlerKeyPressProps) => {
  if (event.key === key) {
    callback?.();
  }
};

export default handleKeyPress;
