import React from 'react';

const PricingTier = ({ name, price, description, features, highlighted }) => (
  <div className={`p-8 rounded-3xl border ${highlighted ? 'bg-blue-600 border-blue-400 scale-105 shadow-2xl z-10' : 'bg-slate-900 border-slate-800'} transition-all hover:border-blue-500/50`}>
    <h3 className="text-xl font-bold mb-2 italic">{name}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold">{price}</span>
      {price !== 'Custom' && <span className="text-slate-400 text-sm ml-2">/month</span>}
    </div>
    <p className={`text-sm mb-8 ${highlighted ? 'text-blue-100' : 'text-slate-400'}`}>{description}</p>
    <ul className="space-y-4 mb-10">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-sm">
          <svg className={`w-5 h-5 ${highlighted ? 'text-white' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-xl font-bold transition-all ${highlighted ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>
      {name === 'Enterprise' ? 'Contact Sales' : 'Start Trial'}
    </button>
  </div>
);

const Pricing = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 italic tracking-tight">Simple Pricing.</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Choose the plan that fits your workflow. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <PricingTier 
            name="Starter"
            price="$0"
            description="Perfect for individual experiments and small files."
            features={['Up to 10 files / month', '50MB max file size', 'Standard processing', 'Community support']}
          />
          <PricingTier 
            name="Pro"
            price="$19"
            description="Our most popular plan for professional creators."
            features={['Unlimited files', '2GB max file size', 'Priority processing', 'Email support', 'Custom templates']}
            highlighted={true}
          />
          <PricingTier 
            name="Enterprise"
            price="Custom"
            description="For teams needing massive scale and control."
            features={['Dedicated infrastructure', 'No file size limit', 'API Access', '24/7 Phone support', 'SLA guarantees']}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
