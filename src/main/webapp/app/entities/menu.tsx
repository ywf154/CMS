import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/cars">
        <Translate contentKey="global.menu.entities.cars" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/drivers">
        <Translate contentKey="global.menu.entities.drivers" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/repairrecords">
        <Translate contentKey="global.menu.entities.repairrecords" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/upcapcords">
        <Translate contentKey="global.menu.entities.upcapcords" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/carparts">
        <Translate contentKey="global.menu.entities.carparts" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
