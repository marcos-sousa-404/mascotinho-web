import Landing from '../pages/Landing';
import Donate from '../pages/Donate';
import ContactUs from '../pages/ContactUs';
import Adopt from '../pages/Adopt';

const routes = [
  { path: '/donate', Component: Donate, exact: true },
  { path: '/contact-us', Component: ContactUs, exact: true },
  { path: '/adopt', Component: Adopt, exact: true },
  { path: '/', Component: Landing, exact: true },
];

export default routes;
