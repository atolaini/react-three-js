import state from '../store';
import { useSnapshot } from 'valtio';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: string;
  title: string;
  handleClick: () => void;
  customStyles: string;
}

const CustomButton = ({
  styleType,
  title,
  handleClick,
  customStyles,
}: CustomButtonProps) => {
  const snap = useSnapshot(state);
  const generateStyle = (styleType: string) => {
    if (styleType === 'filled') {
      return {
        backgroundColor: snap.color,
        color: '#fff',
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(styleType)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
