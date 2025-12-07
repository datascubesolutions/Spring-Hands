import { RouteConfig } from "../../types/route";
import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";
import Services from "../../pages/Services";
import ContactUs from "../../pages/ContactUs";

export const routes: RouteConfig[] = [
  {
    path: '/',
    key: 'home',
    element: Home,
    islayout: false,
    isProtected: false,
  },
  {
    path: '/about-us',
    key: 'about-us',
    element: AboutUs,
    islayout: false,
    isProtected: false,
  },
  {
    path: '/services',
    key: 'services',
    element: Services,
    islayout: false,
    isProtected: false,
  },
  {
    path: '/contact-us',
    key: 'contact-us',
    element: ContactUs,
    islayout: false,
    isProtected: false,
  },
];

export default routes;