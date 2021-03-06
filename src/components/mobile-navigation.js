import PropTypes from 'prop-types';
import React from 'react';

import { URL } from '../constants';
import MobileNavigationItem from './mobile-navigation-item';
import useSettingsDialog from '../features/preferences/hooks/use-settings-dialog';

const MobileNavigation = ({ onClick }) => {
  const settingsDialog = useSettingsDialog();

  return (
    <nav aria-label="Primary" css="padding: 0 1rem;">
      <MobileNavigationItem href={URL.FILLS} onClick={onClick}>
        Fills
      </MobileNavigationItem>
      <MobileNavigationItem href={URL.TOKENS} onClick={onClick}>
        Tokens
      </MobileNavigationItem>
      <MobileNavigationItem href={URL.RELAYERS} onClick={onClick}>
        Relayers
      </MobileNavigationItem>
      <MobileNavigationItem href={URL.NEWS} onClick={onClick}>
        News & Updates
      </MobileNavigationItem>
      <MobileNavigationItem
        href="https://0xproject.com/portal/account"
        onClick={onClick}
      >
        My Wallet
      </MobileNavigationItem>
      <MobileNavigationItem
        onClick={() => {
          settingsDialog.show();
          onClick();
        }}
      >
        Settings
      </MobileNavigationItem>
    </nav>
  );
};

MobileNavigation.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MobileNavigation;
