import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaHandSparkles, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const services = [
    {
      icon: <FaPaintBrush className="text-5xl text-purple-400" />,
      title: 'Nail Art',
      description: 'Stunning nail designs with premium quality paints and artistic creativity.',
    },
    {
      icon: <FaHandSparkles className="text-5xl text-fuchsia-300" />,
      title: 'Mehndi Designs',
      description: 'Traditional and modern mehndi patterns for all occasions.',
    },
    {
      icon: <FaStar className="text-5xl text-rose-400" />,
      title: 'Bridal Packages',
      description: 'Complete bridal beauty packages for your special day.',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'Amazing service! The nail art was absolutely stunning and lasted for weeks.',
      rating: 5,
    },
    {
      name: 'Anjali Patel',
      text: 'Best mehndi artist in town! My bridal mehndi was a masterpiece.',
      rating: 5,
    },
    {
      name: 'Riya Gupta',
      text: 'Professional, creative, and friendly. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sneha Desai',
      text: 'The attention to detail is incredible. Every design is unique and beautiful!',
      rating: 5,
    },
    {
      name: 'Kavya Mehta',
      text: 'Absolutely loved my wedding mehndi! It was exactly what I dreamed of.',
      rating: 5,
    },
    {
      name: 'Pooja Singh',
      text: 'Best nail art experience ever! The team is so talented and professional.',
      rating: 5,
    },
  ];

  const testimonialsPerView = 3;

  const nextTestimonial = () => {
    if (testimonialIndex < testimonials.length - testimonialsPerView) {
      setTestimonialIndex(testimonialIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (testimonialIndex > 0) {
      setTestimonialIndex(testimonialIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-300 via-fuchsia-200 to-purple-300 text-gray-800 py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-rose-500">Spring Hands</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Where Beauty Meets Artistry - Premium Nail Art & Exquisite Mehndi Designs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link
                to="/contact-us"
                className="bg-transparent border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Signature Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium beauty services designed to make you look and feel amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Spring Hands?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Expert Artists', desc: 'Trained professionals with years of experience' },
              { title: 'Premium Products', desc: 'Only the finest quality materials used' },
              { title: 'Hygiene First', desc: 'Strict sanitization and safety protocols' },
              { title: 'Custom Designs', desc: 'Personalized creations just for you' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <h3 className="text-xl font-bold text-purple-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-300 mx-auto"></div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            disabled={testimonialIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all ${testimonialIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-50'
              }`}
          >
            <FaChevronLeft className="text-purple-600 text-xl" />
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-transform duration-500"
              style={{ transform: `translateX(-${testimonialIndex * (100 / testimonialsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-8 shadow-lg min-w-full md:min-w-0"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-rose-400 text-xl" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-purple-600">- {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            disabled={testimonialIndex >= testimonials.length - testimonialsPerView}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all ${testimonialIndex >= testimonials.length - testimonialsPerView ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-50'
              }`}
          >
            <FaChevronRight className="text-purple-600 text-xl" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: testimonials.length - testimonialsPerView + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setTestimonialIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === testimonialIndex ? 'bg-purple-600 w-8' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-300 via-fuchsia-200 to-purple-300 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
              Book your appointment today and experience the magic of Spring Hands
            </p>
            <Link
              to="/contact-us"
              className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section >

      <Footer />
    </div >
  );
};

export default Home;
