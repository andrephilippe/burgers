import { createNewRoute } from '../factories/router.factory';

import CreateYourBurger from '../components/containers/create-your-burger/main/CreateYourBurger';
import BurgersMenu from '../components/containers/burgers-menu/main/BurgersMenu';

const ROUTER = [
    createNewRoute('/', 'Cardápio', BurgersMenu),
    createNewRoute('/create-your-burger', null, CreateYourBurger)
]

export default ROUTER;
