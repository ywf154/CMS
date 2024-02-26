import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Cars from './cars';
import Drivers from './drivers';
import Repairrecords from './repairrecords';
import Upcapcords from './upcapcords';
import Carparts from './carparts';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="cars/*" element={<Cars />} />
        <Route path="drivers/*" element={<Drivers />} />
        <Route path="repairrecords/*" element={<Repairrecords />} />
        <Route path="upcapcords/*" element={<Upcapcords />} />
        <Route path="carparts/*" element={<Carparts />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
