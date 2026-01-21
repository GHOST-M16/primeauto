
export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  image: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  car: string;
  text: string;
  rating: number;
}

export enum Page {
  Home = 'home',
  Services = 'services',
  About = 'about',
  Contact = 'contact'
}
