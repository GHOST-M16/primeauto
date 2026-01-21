
import { ServicePackage, Testimonial } from './types';

export const SERVICES: ServicePackage[] = [
  {
    id: 'basic-refresh',
    name: 'The Artisan Wash',
    price: 'RM 180',
    duration: '180 Mins',
    description: 'A comprehensive touchless rejuvenation for the meticulous owner.',
    features: [
      'Multi-Stage pH-Neutral Snow Foam',
      'Ceramic-Infused Paint Hydration',
      'Deep-Clean Wheel Well Brushing',
      'HEPA-Filtration Interior Extraction',
      'Leather UV Barrier Treatment',
      'Glass Hydro-Shield Application'
    ],
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'paint-correction',
    name: 'Signature Correction',
    price: 'RM 950',
    duration: 'Full Day',
    description: 'Remove imperfections and reveal the true depth of your factory paint.',
    features: [
      'Paint Thickness Assessment',
      'Single-Stage Jeweling Polish',
      'Iron & Tar Decontamination',
      'Engine Bay Aesthetic Detail',
      'Exhaust Tip Mirror Polishing',
      '12-Month Graphene Infusion'
    ],
    image: 'https://images.unsplash.com/photo-1552933157-42708427a02e?auto=format&fit=crop&q=80&w=800',
    highlight: true
  },
  {
    id: 'ceramic-coating',
    name: 'Prime Heritage 9H',
    price: 'RM 2,800',
    duration: '3 Days',
    description: 'Bespoke permanent protection with unmatched chemical and UV resistance.',
    features: [
      'Multi-Stage Rotary Correction',
      'Dual-Layer 9H Ceramic Matrix',
      'Interior Nano-Fabric Coating',
      'High-Temp Rim Protection',
      'Annual Maintenance Program',
      'Transferable Lifetime Warranty'
    ],
    image: 'https://images.unsplash.com/photo-1507136390302-45037b3f3d61?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Dato\' Steven Tan',
    car: 'BMW M5 Competition',
    text: 'The most meticulous detailing team in Southeast Asia. My M5 looks more vibrant than the day it left the factory.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Lim',
    car: 'Tesla Model 3',
    text: 'Their ceramic coating is essential for the KL weather. Water just slides off. Highly professional service.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ahmad Faisal',
    car: 'Toyota Alphard',
    text: 'Transformed my family car. Every crease and corner was attended to. The leather feels brand new again.',
    rating: 5
  }
];
