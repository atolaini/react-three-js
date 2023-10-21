import { useSnapshot } from 'valtio';
import state from '../store';

interface TabProps {
  tab: { name: string; icon: string };
  isFilterTab?: boolean;
  isActiveTab?: boolean;
  handleClick: () => void;
}

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }: TabProps) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 };

  return (
    <button
      onClick={handleClick}
      style={activeStyles}
      key={tab.name}
      className={`tab-btn ${
        isFilterTab ? 'rounded-full glassmorhism' : 'rounded-4'
      }`}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'
        }`}
      />
    </button>
  );
};

export default Tab;
