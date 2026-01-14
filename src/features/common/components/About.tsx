import { motion } from 'framer-motion';
import { Leaf, Coffee, Heart, Globe } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Sumber Berkelanjutan',
    description: 'Setiap biji kopi bersumber secara etis dari perkebunan kecil di seluruh kawasan tropis.'
  },
  {
    icon: Coffee,
    title: 'Panggang Lokal',
    description: 'Dipanggang segar setiap minggu di fasilitas lokal kami untuk memastikan cita rasa terbaik.'
  },
  {
    icon: Heart,
    title: 'Komunitas Utama',
    description: 'Setiap cabang dirancang menjadi tempat berkumpul bagi lingkungan sekitar.'
  },
  {
    icon: Globe,
    title: 'Inspirasi Tropis',
    description: 'Cita rasa unik yang terinspirasi dari destinasi tropis di seluruh dunia.'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 botanical-pattern opacity-10" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4">
            Cerita Kami
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Lahir dari kecintaan pada kopi berkualitas dan suasana tropis, Tropic menghadirkan
            kehangatan kehidupan pulau ke dalam cangkir harian Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-primary-foreground/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
