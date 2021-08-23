import React from 'react';
import { func, string } from 'prop-types';

import { ToggleContainer } from './Toggle.styles';
import { Icon } from '@iconify/react';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      {/* <Icon className="normalIcon" icon="emojione:sun" />
      <Icon className="normalIcon" icon="emojione-v1:first-quarter-moon-face" /> */}
       <Icon className="normalIcon" icon="emojione-monotone:crescent-moon" />
        <Icon className="normalIcon" icon="bi:sun-fill" />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
