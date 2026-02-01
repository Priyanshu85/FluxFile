import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileCode2, Check, Zap, Shield, Users, Headphones, ArrowLeft, Sparkles } from 'lucide-react';

const PricingTier = ({ name, price, description, features, highlighted, popular, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`relative p-8 rounded-3xl border ${
      highlighted
        ? 'bg-gradient-to-b from-blue-600 to-blue-700 border-blue-400 shadow-2xl shadow-blue-500/25'
        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
    } transition-all duration-300`}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          MOST POPULAR
        </span>
      </div>
    )}

    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="mb-4">
      <span className="text-5xl font-bold tracking-tight">{price}</span>
      {price !== 'Custom' && <span className="text-slate-400 text-sm ml-2">/month</span>}
    </div>
    <p className={`text-sm mb-8 ${highlighted ? 'text-blue-100' : 'text-slate-400'}`}>{description}</p>

    <ul className="space-y-4 mb-10">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-sm">
          <div className={`mt-0.5 p-0.5 rounded-full ${highlighted ? 'bg-white/20' : 'bg-blue-500/20'}`}>
            <Check className={`w-3.5 h-3.5 ${highlighted ? 'text-white' : 'text-blue-400'}`} />
          </div>
          <span className={highlighted ? 'text-white' : 'text-slate-300'}>{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-4 rounded-xl font-bold transition-all duration-200 ${
      highlighted
        ? 'bg-white text-blue-600 hover:bg-slate-100 shadow-lg'
        : 'bg-blue-600 text-white hover:bg-blue-500'
    }`}>
      {name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
    </button>
  </motion.div>
);

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-slate-800">
    <button
      onClick={onClick}
      className="w-full py-5 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
    >
      <span className="font-medium">{question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
        className="text-2xl text-slate-500"
      >
        +
      </motion.span>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <p className="pb-5 text-slate-400 text-sm leading-relaxed">{answer}</p>
    </motion.div>
  </div>
);

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for Enterprise customers, we also support bank transfers and invoicing."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start. You'll only be charged after your trial ends if you choose to continue."
    },
    {
      question: "What happens to my files if I downgrade?",
      answer: "Your existing files remain accessible. However, you won't be able to upload new files that exceed your new plan's limits until you're within the allowed usage."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with FluxFile for any reason, contact us within 30 days of your purchase for a full refund."
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <FileCode2 className="text-blue-500 w-8 h-8" />
          <span className="text-xl font-bold tracking-tight">FluxFile</span>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Choose the perfect plan<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                for your workflow
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Start free and scale as you grow. No hidden fees, no surprises.
              Cancel anytime.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-4 p-1.5 rounded-full bg-slate-900 border border-slate-800"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <PricingTier
              name="Starter"
              price="$0"
              description="Perfect for trying out FluxFile and small personal projects."
              features={[
                'Up to 10 files per month',
                '50MB max file size',
                'Standard processing speed',
                'Community support',
                'Basic file formats'
              ]}
              delay={0.1}
            />
            <PricingTier
              name="Pro"
              price={billingCycle === 'monthly' ? '$19' : '$15'}
              description="Everything you need for professional file conversion work."
              features={[
                'Unlimited file conversions',
                '2GB max file size',
                'Priority processing',
                'Email support (24h response)',
                'All file formats',
                'Custom output templates',
                'API access (1000 calls/mo)'
              ]}
              highlighted={true}
              popular={true}
              delay={0.2}
            />
            <PricingTier
              name="Enterprise"
              price="Custom"
              description="For teams and organizations that need scale and control."
              features={[
                'Dedicated infrastructure',
                'No file size limits',
                'Instant processing',
                '24/7 phone & chat support',
                'Custom integrations',
                'SLA guarantees',
                'Unlimited API access',
                'SSO & team management'
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything included in all plans
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Core features that power every FluxFile experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FeatureItem
                icon={Zap}
                title="Lightning Fast"
                description="Our processing engine handles conversions in seconds, not minutes."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeatureItem
                icon={Shield}
                title="Bank-Level Security"
                description="256-bit encryption and automatic file deletion after processing."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FeatureItem
                icon={Users}
                title="Team Ready"
                description="Collaborate with your team with shared workspaces and permissions."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FeatureItem
                icon={Headphones}
                title="Always Here"
                description="Our support team is ready to help whenever you need assistance."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl py-16 px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of creators and developers who trust FluxFile for their file conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl">
                Start Free Trial
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                Talk to Sales
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} FluxFile. Open source with love.</p>
      </footer>
    </div>
  );
};

export default PricingPage;
