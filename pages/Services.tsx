
import React from 'react';
import { Page } from '../types';

interface ServicesProps {
  onPageChange: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onPageChange }) => {
  const vehicleTypes = [
    'Two-door sports',
    'Sub-compact',
    'Compact',
    'Medium',
    'Large',
    'SUV',
    'SUV 7-seater',
    'MPV 7-seater'
  ];

  const services = [
    {
      id: 'wax',
      name: 'WAX',
      steps: [
        'Wash to remove loose dirt.',
        'Clay to remove light oxidation & tar spots.',
        'Wax to protect shine, further enhance gloss and protection against weather damage, bird droppings and tree sap stains.'
      ],
      pricing: {
        'Two-door sports': 400,
        'Sub-compact': 200,
        'Compact': 250,
        'Medium': 300,
        'Large': 400,
        'SUV': 400,
        'SUV 7-seater': 500,
        'MPV 7-seater': 600
      }
    },
    {
      id: 'polish-wax',
      name: 'POLISH & WAX',
      steps: [
        'Wash to remove loose dirt.',
        'Clay to remove light oxidation & tar spots.',
        'Polish:',
        '  • Step 1 - To remove heavy oxidation and light scratches.',
        '  • Step 2 - To remove swirl marks and improve clarity of paint.',
        '  • Step 3 - Improve gloss, highlight cold press & body lines and curves of panels.',
        'Wax to protect shine, further enhancing gloss and protection against weather damage, bird droppings and tree sap stains.'
      ],
      pricing: {
        'Two-door sports': 500,
        'Sub-compact': 250,
        'Compact': 350,
        'Medium': 400,
        'Large': 500,
        'SUV': 500,
        'SUV 7-seater': 600,
        'MPV 7-seater': 800
      }
    },
    {
      id: 'full-detailing',
      name: 'FULL DETAILING',
      sections: {
        'Exterior': [
          'Wash to remove loose dirt.',
          'Clay to remove light oxidation & tar spots.',
          'Polish:',
          '  • Step 1 - To remove heavy oxidation and light scratches.',
          '  • Step 2 - To remove swirl marks and improve clarity of paint.',
          '  • Step 3 - Improve gloss, highlight cold press & body lines and curves of panels.',
          'Wax to protect shine, further enhancing gloss and protection against weather damage, bird droppings and tree sap stains.'
        ],
        'Interior': [
          'Clean carpets, floor mats, leather seats, door panels and other parts of the interior including headliner.',
          'Conditioner leather seats and vinyl surfaces (non-greasy).'
        ],
        'Glass': [
          'Remove acid rain stains and road grime.',
          'Clay to smoothen glass surface.'
        ],
        'Rims': [
          'Remove hardened stains that washing alone cannot remove such as etched brake dust and tar spots.',
          'Enhance shine on the rims.'
        ],
        'Engine': [
          'Underside of bonnet',
          'Drainage areas',
          'Engine top',
          'Apply engine dressing to finish.'
        ]
      },
      note: 'Water shall be used sparingly whilst cleaning.',
      pricing: {
        'Two-door sports': 800,
        'Sub-compact': 400,
        'Compact': 550,
        'Medium': 600,
        'Large': 800,
        'SUV': 800,
        'SUV 7-seater': 900,
        'MPV 7-seater': 1000
      }
    },
    {
      id: 'coating',
      name: 'COATING',
      steps: [
        'Wash to remove loose dirt.',
        'Clay to remove light oxidation & tar spots.',
        'Polish:',
        '  • Step 1: To remove heavy oxidation and light scratches.',
        '  • Step 2: To remove swirl marks and improve clarity of paint.',
        '  • Step 3: Improve gloss, highlight cold press & body lines and curves of panels.',
        'Coating to protect shine:',
        '  • Enhances colour pigment.',
        '  • Keeps the car clean longer - hydrophobic effect.',
        '  • Greater resistance to hairline scratches.',
        '  • Far greater protection against weather, bird droppings and tree sap stains.',
        '  • Confirmed mirror shine on dark-coloured finishes.',
        '  • Enhances cold press lines, highlight body lines and curves of panels.'
      ],
      pricing: {
        'Two-door sports': 2500,
        'Sub-compact': 1500,
        'Compact': 2000,
        'Medium': 2200,
        'Large': 2700,
        'SUV': 2700,
        'SUV 7-seater': 2900,
        'MPV 7-seater': 3500
      }
    }
  ];

  return (
    <div className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 reveal-anim">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-12 sm:mb-20 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-amber-500 text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">Our Services</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none text-slate-900">
              Service <br /> <span className="text-amber-500">Packages</span>
            </h1>
          </div>
          <p className="text-slate-600 max-w-sm font-light text-left md:text-right text-sm sm:text-base mt-4 md:mt-0 md:block">
            Transparent pricing for all vehicle types. Professional detailing services tailored to your needs.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="glass p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] border border-amber-500/20"
            >
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-6 sm:mb-8 text-slate-900">
                {service.name}
              </h2>

              {/* Service Steps/Details */}
              <div className="mb-8 sm:mb-10 md:mb-12">
                {service.sections ? (
                  // Full Detailing has sections
                  <div className="space-y-6 sm:space-y-8">
                    {Object.entries(service.sections).map(([sectionName, steps]) => (
                      <div key={sectionName}>
                        <h3 className="text-amber-500 font-bold text-lg sm:text-xl mb-3 sm:mb-4 uppercase tracking-wide">
                          {sectionName}:
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {steps.map((step, idx) => (
                            <li key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed flex items-start gap-2">
                              <span className="text-amber-500 mt-1 shrink-0">•</span>
                              <span className={step.startsWith('  •') ? 'ml-4 text-slate-600' : ''}>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {service.note && (
                      <p className="text-slate-600 text-sm sm:text-base italic mt-4">
                        {service.note}
                      </p>
                    )}
                  </div>
                ) : (
                  // Other services have simple steps
                  <ul className="space-y-2 sm:space-y-3">
                    {service.steps.map((step, idx) => (
                        <li key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed flex items-start gap-2">
                          <span className="text-amber-500 mt-1 shrink-0">•</span>
                          <span className={step.startsWith('  •') ? 'ml-4 text-slate-600' : ''}>{step}</span>
                        </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Pricing Table */}
              <div className="border-t border-white/10 pt-6 sm:pt-8">
                <h3 className="text-slate-900 font-bold text-lg sm:text-xl mb-4 sm:mb-6 uppercase tracking-wide">
                  Pricing (RM)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {vehicleTypes.map((vehicleType) => (
                    <div 
                      key={vehicleType}
                      className="flex justify-between items-center p-3 sm:p-4 rounded-lg bg-slate-50 border border-slate-200"
                    >
                      <span className="text-slate-700 text-xs sm:text-sm font-medium flex-1">
                        {vehicleType}
                      </span>
                      <span className="text-amber-500 font-black text-sm sm:text-base ml-2">
                        RM {service.pricing[vehicleType as keyof typeof service.pricing].toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Button */}
              <div className="mt-6 sm:mt-8">
                <a 
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2vgKK9SacbTXOJqiMYWM1IVmXN0Q1RqnP3DM3b0A_fB5T--UpyppHYGtilx7vTOWc_QJuTOFF2?gv=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-amber-500 hover:bg-white text-black font-black text-xs sm:text-sm uppercase tracking-widest rounded-full transition-all transform hover:scale-105 active:scale-95 inline-block text-center"
                >
                  Book {service.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Services Section */}
        <div className="glass p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] border border-amber-500/20 mt-8 sm:mt-12">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-6 sm:mb-8 text-slate-900">
            OTHER SERVICES
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-amber-500 font-black text-xs sm:text-sm uppercase tracking-wider">VEHICLE</th>
                  <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-amber-500 font-black text-xs sm:text-sm uppercase tracking-wider">INTERIOR (RM)</th>
                  <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-amber-500 font-black text-xs sm:text-sm uppercase tracking-wider">GLASS POLISH (RM)</th>
                  <th className="text-center py-3 sm:py-4 px-3 sm:px-4 text-amber-500 font-black text-xs sm:text-sm uppercase tracking-wider">HEADLIGHT RESTORATION (RM)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { vehicle: 'Two-door sports', interior: 400, glassPolish: 300, headlight: 180 },
                  { vehicle: 'Sub-compact', interior: 200, glassPolish: 120, headlight: 180 },
                  { vehicle: 'Compact', interior: 250, glassPolish: 120, headlight: 180 },
                  { vehicle: 'Medium', interior: 300, glassPolish: 150, headlight: 200 },
                  { vehicle: 'Large', interior: 400, glassPolish: 300, headlight: 200 },
                  { vehicle: 'SUV', interior: 400, glassPolish: 300, headlight: 200 },
                  { vehicle: 'SUV 7-seater', interior: 400, glassPolish: 350, headlight: 200 },
                  { vehicle: 'MPV 7-seater', interior: 500, glassPolish: 400, headlight: 250 }
                ].map((row, idx) => (
                  <tr 
                    key={idx}
                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-slate-700 text-xs sm:text-sm font-medium">
                      {row.vehicle}
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-center text-amber-500 font-black text-xs sm:text-sm">
                      {row.interior}
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-center text-amber-500 font-black text-xs sm:text-sm">
                      {row.glassPolish}
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-center text-amber-500 font-black text-xs sm:text-sm">
                      {row.headlight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Book Button */}
          <div className="mt-6 sm:mt-8">
            <a 
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2vgKK9SacbTXOJqiMYWM1IVmXN0Q1RqnP3DM3b0A_fB5T--UpyppHYGtilx7vTOWc_QJuTOFF2?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-amber-500 hover:bg-white text-black font-black text-xs sm:text-sm uppercase tracking-widest rounded-full transition-all transform hover:scale-105 active:scale-95 inline-block text-center"
            >
              Book Other Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
