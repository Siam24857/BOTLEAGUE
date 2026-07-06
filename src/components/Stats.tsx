import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { icon: "🏆", value: "500+", label: "Events" },
  { icon: "👥", value: "10K+", label: "Participants" },
  { icon: "🎯", value: "50+", label: "Cities" },
  { icon: "💰", value: "1M+", label: "Prizes" },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = parseInt(stat.value.replace(/\D/g, '')) || 0;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
      className="relative group"
    >
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-card border-2 border-purple/30 flex flex-col items-center justify-center hover:neon-border transition-all duration-300">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple/20 to-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="text-4xl mb-2 relative z-10">{stat.icon}</span>
        <p className="text-3xl font-orbitron font-bold gradient-text relative z-10">
          {stat.value.includes('+') ? `${count}+` : stat.value}
        </p>
        <p className="text-gray-400 text-sm rajdhani relative z-10">{stat.label}</p>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
