import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 gradient-text"
        >
          JOIN THE ECOSYSTEM
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Basic", price: "$0", popular: false, features: ["Access to events", "Basic profile", "Community access"] },
            { name: "Pro", price: "$29", popular: true, features: ["All Basic features", "Priority registration", "Advanced analytics", "Premium support"] },
            { name: "Enterprise", price: "$99", popular: false, features: ["All Pro features", "Custom branding", "API access", "Dedicated support"] }
          ].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple/20 to-orange/20 border-2 border-purple neon-border'
                  : 'bg-card border border-purple/20'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-orange text-white text-sm font-orbitron font-bold rounded-full">
                    POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-3xl font-orbitron font-bold gradient-text mb-6">
                {plan.price}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple rounded-full" />
                    <span className="text-gray-300 rajdhani">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-orbitron font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple to-orange text-white hover:neon-glow'
                    : 'bg-card border border-purple text-white hover:bg-purple/20'
                }`}
              >
                Join
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
