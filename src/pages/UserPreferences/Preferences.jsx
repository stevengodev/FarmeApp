import React from 'react';
import Settings from '../../components/PreferencesConfigComponent/Settings';
import AccessibilityButton from '../../components/Accessibility/AccessibilityButton';
import NavbarGlobal from '../../components/Navbar/NavBarGlobal';

function Preferences() {
  return (
    <>
      <NavbarGlobal />
      <Settings />
      <AccessibilityButton />
    </>
  );
}

export default Preferences;
