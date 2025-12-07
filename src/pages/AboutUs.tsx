import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaPalette, FaUsers, FaUserTie } from 'react-icons/fa';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AboutUs: React.FC = () => {
    const stats = [
        { icon: <FaUsers />, number: '5000+', label: 'Happy Clients' },
        { icon: <FaPalette />, number: '500+', label: 'Unique Designs' },
        { icon: <FaHeart />, number: '100%', label: 'Satisfaction' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
            <Header />

            {/* Page Title */}
            <section className="py-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">About Spring Hands</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-300 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Crafting Beauty, Creating Memories Since 2013
                    </p>
                </motion.div>

                {/* Our Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Our Story
                        </h2>
                        <div className="space-y-4 text-gray-700 text-lg">
                            <p>
                                Spring Hands was born from a passion for beauty and artistry. What started as a
                                small home-based service has blossomed into one of the most trusted names in nail
                                art and mehndi design.
                            </p>
                            <p>
                                With over a decade of experience, we've had the privilege of being part of
                                thousands of special moments - from weddings to festivals, from casual outings
                                to grand celebrations.
                            </p>
                            <p>
                                Our commitment to excellence, creativity, and customer satisfaction has made us
                                the go-to destination for anyone seeking premium beauty services.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-3xl p-8 shadow-2xl">
                            <div className="bg-white rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                                <p className="text-gray-700 mb-6">
                                    To provide exceptional beauty services that enhance confidence and celebrate
                                    individuality through artistic expression and premium quality.
                                </p>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                                <p className="text-gray-700">
                                    To be the most trusted and innovative beauty service provider, setting new
                                    standards in nail art and mehndi design across the region.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-r from-purple-300 via-fuchsia-200 to-purple-300 rounded-3xl p-12 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center text-gray-800"
                                >
                                    <div className="text-5xl mb-4 flex justify-center">{stat.icon}</div>
                                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                                    <div className="text-lg font-semibold">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Our Values */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our Core Values
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-300 mx-auto mb-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            title: 'Quality Excellence',
                            description: 'We use only premium, skin-safe products and maintain the highest standards in every service.',
                            color: 'from-purple-300 to-purple-400',
                        },
                        {
                            title: 'Creative Innovation',
                            description: 'Constantly evolving our designs and techniques to bring you the latest trends and timeless classics.',
                            color: 'from-fuchsia-300 to-fuchsia-400',
                        },
                        {
                            title: 'Customer First',
                            description: 'Your satisfaction and comfort are our top priorities. We listen, understand, and deliver.',
                            color: 'from-purple-400 to-fuchsia-300',
                        },
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl transform group-hover:scale-105 transition-transform duration-300`}></div>
                            <div className="relative bg-white m-1 rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Meet Our Owner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Meet Our Owner
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-300 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The visionary behind Spring Hands' success
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-md w-full"
                    >
                        <div className="h-64 bg-gradient-to-br from-purple-200 to-fuchsia-200 flex items-center justify-center">
                            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-xl">
                                <FaUserTie className="text-8xl text-purple-400" />
                            </div>
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">Apeksha Jadav</h3>
                            <p className="text-purple-600 font-semibold text-xl mb-4">Owner & Founder</p>
                            <p className="text-gray-600 leading-relaxed">
                                With a passion for beauty and artistry, Apeksha founded Spring Hands to bring
                                premium nail art and mehndi services to the community. Her dedication to
                                excellence and customer satisfaction has made Spring Hands a trusted name in
                                the beauty industry.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
