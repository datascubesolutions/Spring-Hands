import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook, FaClock } from 'react-icons/fa';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                date: '',
                message: '',
            });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-3xl" />,
            title: 'Phone',
            details: '+91 70695 30992',
            link: 'tel:+917069530992',
            color: 'from-green-400 to-green-600',
        },
        {
            icon: <FaWhatsapp className="text-3xl" />,
            title: 'WhatsApp',
            details: '+91 70695 30992',
            link: 'https://wa.me/917069530992',
            color: 'from-green-500 to-green-700',
        },
        {
            icon: <FaEnvelope className="text-3xl" />,
            title: 'Email',
            details: 'springhands001@gmail.com',
            link: 'mailto:springhands001@gmail.com',
            color: 'from-purple-300 to-purple-400',
        },
        {
            icon: <FaMapMarkerAlt className="text-3xl" />,
            title: 'Address',
            details: 'C-302, Kaveri Sangam, Near Shilaj Cross Road, Ahmedabad - 380059',
            link: 'https://maps.google.com/?q=C-302+Kaveri+Sangam+Near+Shilaj+Cross+Road+Ahmedabad+380059',
            color: 'from-fuchsia-300 to-fuchsia-400',
        },
    ];

    const workingHours = [
        { day: 'Monday - Friday', time: '10:00 AM - 8:00 PM' },
        { day: 'Saturday', time: '10:00 AM - 9:00 PM' },
        { day: 'Sunday', time: '11:00 AM - 7:00 PM' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
            <Header />

            {/* Contact Info Cards */}
            <section className="py-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Get In Touch</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-300 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We'd Love to Hear From You - Book Your Appointment Today!
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={index}
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="block"
                        >
                            <div className={`bg-gradient-to-br ${info.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300`}>
                                <div className="flex justify-center mb-4">{info.icon}</div>
                                <h3 className="text-xl font-bold text-center mb-2">{info.title}</h3>
                                <p className="text-center text-sm">{info.details}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Book an Appointment
                            </h2>

                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-100 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg mb-6"
                                >
                                    <p className="font-semibold">Thank you! We'll contact you soon.</p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                                        placeholder="+91 70695 30992"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Service *</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="nail-art">Nail Art</option>
                                        <option value="mehndi">Mehndi Design</option>
                                        <option value="bridal-package">Bridal Package</option>
                                        <option value="party-package">Party Package</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-400 to-fuchsia-300 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-500 hover:to-fuchsia-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Submit Booking Request
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Working Hours */}
                        <div className="bg-gradient-to-br from-purple-400 to-fuchsia-300 rounded-3xl p-8 text-white shadow-xl">
                            <div className="flex items-center mb-6">
                                <FaClock className="text-4xl mr-4" />
                                <h3 className="text-3xl font-bold">Working Hours</h3>
                            </div>
                            <div className="space-y-4">
                                {workingHours.map((schedule, index) => (
                                    <div key={index} className="flex justify-between items-center border-b border-white/30 pb-3">
                                        <span className="font-semibold">{schedule.day}</span>
                                        <span className="text-gray-100">{schedule.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6">Follow Us</h3>
                            <p className="text-gray-600 mb-6">
                                Stay updated with our latest designs and offers on social media!
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gradient-to-br from-purple-400 to-fuchsia-300 text-white p-4 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaInstagram className="text-3xl mr-2" />
                                    <span className="font-semibold">Instagram</span>
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    <FaFacebook className="text-3xl mr-2" />
                                    <span className="font-semibold">Facebook</span>
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <FaMapMarkerAlt className="text-3xl text-purple-400 mr-3" />
                                Visit Us
                            </h3>
                            <div className="rounded-xl overflow-hidden shadow-lg h-80">
                                <iframe
                                    src="https://www.google.com/maps?q=Kaveri+Sangam+Shilaj+Cross+Road+Ahmedabad&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Spring Hands Location - Kaveri Sangam, Shilaj Cross Road, Ahmedabad"
                                ></iframe>
                            </div>
                            <div className="mt-4 text-center">
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Kaveri+Sangam+Shilaj+Cross+Road+Ahmedabad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <p className="text-gray-700 font-semibold text-lg hover:text-purple-600 transition-colors cursor-pointer">
                                        C-302, Kaveri Sangam
                                    </p>
                                    <p className="text-gray-600 hover:text-purple-500 transition-colors cursor-pointer">
                                        Near Shilaj Cross Road, Ahmedabad - 380059
                                    </p>
                                    <p className="text-purple-600 text-sm mt-2 font-semibold">
                                        Click to open in Google Maps →
                                    </p>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Contact Banner */}
            <section className="py-16 bg-gradient-to-r from-purple-300 via-fuchsia-200 to-purple-300">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Need Immediate Assistance?
                        </h2>
                        <p className="text-xl mb-6 text-gray-700">
                            Call us now or send a WhatsApp message for quick response!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+917069530992"
                                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                            >
                                <FaPhone className="mr-2" />
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/917069530992"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                            >
                                <FaWhatsapp className="mr-2" />
                                WhatsApp Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;
