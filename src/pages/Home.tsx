import { motion, AnimatePresence } from 'framer-motion';
import { snapshot, useSnapshot } from 'valtio';
import state from '../store';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion';

import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  const setIntro = () => {
    state.intro = false;
  };

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className='home'
          {...slideAnimation('left')}
        >
          <motion.header {...slideAnimation('down')}>
            <img
              src='./threejs.png'
              alt='logo'
              className='w-8 h-8 object-contain'
            />
          </motion.header>
          <motion.div
            className='home-content'
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LETS' <br className='xl:block hi]' />
                DO IT
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-4'
            >
              <p className='max-w-md font-normal text-grey-600 text-base'>
                Create your own unique and exclusive shirt with our brand new 3D
                customizer. <strong>Unleash your imaginations</strong> and
                define your own style.
              </p>
              <CustomButton
                styleType='filled'
                title='Customize It'
                handleClick={setIntro}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
