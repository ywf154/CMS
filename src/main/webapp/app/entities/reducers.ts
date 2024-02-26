import cars from 'app/entities/cars/cars.reducer';
import drivers from 'app/entities/drivers/drivers.reducer';
import repairrecords from 'app/entities/repairrecords/repairrecords.reducer';
import upcapcords from 'app/entities/upcapcords/upcapcords.reducer';
import carparts from 'app/entities/carparts/carparts.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  cars,
  drivers,
  repairrecords,
  upcapcords,
  carparts,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
