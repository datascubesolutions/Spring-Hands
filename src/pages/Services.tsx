import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaintBrush, FaHandSparkles, FaRing, FaStar, FaCheck, FaImage, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Services: React.FC = () => {
    const [nailGalleryIndex, setNailGalleryIndex] = useState(0);
    const [mehndiGalleryIndex, setMehndiGalleryIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<{ imageNumber: number; galleryType: 'nail' | 'mehndi' } | null>(null);
    const [imagesPerView, setImagesPerView] = useState(4);
    const [isMobile, setIsMobile] = useState(false);
    const nailGalleryScrollRef = useRef<HTMLDivElement>(null);
    const mehndiGalleryScrollRef = useRef<HTMLDivElement>(null);

    // Image galleries (can add more images here)
    const nailGalleryImages = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 images
    const mehndiGalleryImages = [1, 2, 3, 4, 5, 6, 7, 8]; // 8 images

    // Update imagesPerView based on screen size
    useEffect(() => {
        const updateImagesPerView = () => {
            if (window.innerWidth < 768) {
                setImagesPerView(2); // Mobile: 2 columns
                setIsMobile(true);
            } else {
                setImagesPerView(4); // Desktop: 4 columns
                setIsMobile(false);
            }
        };

        updateImagesPerView();
        window.addEventListener('resize', updateImagesPerView);
        return () => window.removeEventListener('resize', updateImagesPerView);
    }, []);

    // Update nail gallery index based on scroll position on mobile
    useEffect(() => {
        if (!isMobile || !nailGalleryScrollRef.current) return;

        const container = nailGalleryScrollRef.current;
        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.clientWidth;
            const currentIndex = Math.round(scrollLeft / cardWidth);
            setNailGalleryIndex(currentIndex);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    // Update mehndi gallery index based on scroll position on mobile
    useEffect(() => {
        if (!isMobile || !mehndiGalleryScrollRef.current) return;

        const container = mehndiGalleryScrollRef.current;
        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.clientWidth;
            const currentIndex = Math.round(scrollLeft / cardWidth);
            setMehndiGalleryIndex(currentIndex);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    const nextNailGallery = () => {
        if (nailGalleryIndex < nailGalleryImages.length - imagesPerView) {
            setNailGalleryIndex(nailGalleryIndex + 1);
        }
    };

    const prevNailGallery = () => {
        if (nailGalleryIndex > 0) {
            setNailGalleryIndex(nailGalleryIndex - 1);
        }
    };

    const nextMehndiGallery = () => {
        if (mehndiGalleryIndex < mehndiGalleryImages.length - imagesPerView) {
            setMehndiGalleryIndex(mehndiGalleryIndex + 1);
        }
    };

    const prevMehndiGallery = () => {
        if (mehndiGalleryIndex > 0) {
            setMehndiGalleryIndex(mehndiGalleryIndex - 1);
        }
    };

    const openImageModal = (imageNumber: number, galleryType: 'nail' | 'mehndi') => {
        setSelectedImage({ imageNumber, galleryType });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            // Calculate scrollbar width
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            // Prevent scroll and compensate for scrollbar width
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            // Restore scroll and remove padding
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, [selectedImage]);

    const nailServices = [
        {
            name: 'Classic Manicure',
            price: '₹500',
            features: ['Nail shaping', 'Cuticle care', 'Hand massage', 'Polish application'],
        },
        {
            name: 'Gel Nail Art',
            price: '₹1200',
            features: ['Long-lasting gel', 'Custom designs', 'Nail strengthening', 'Glossy finish'],
        },
        {
            name: '3D Nail Art',
            price: '₹1800',
            features: ['3D embellishments', 'Unique designs', 'Premium materials', 'Extended wear'],
        },
        {
            name: 'Acrylic Extensions',
            price: '₹2000',
            features: ['Length extension', 'Shape customization', 'Durable finish', 'Nail art included'],
        },
    ];

    const mehndiServices = [
        {
            name: 'Simple Mehndi',
            price: '₹300',
            features: ['Basic patterns', 'Both hands', 'Natural henna', 'Quick application'],
        },
        {
            name: 'Arabic Mehndi',
            price: '₹800',
            features: ['Bold designs', 'Floral patterns', 'Modern style', 'Both hands & feet'],
        },
        {
            name: 'Bridal Mehndi',
            price: '₹3000',
            features: ['Intricate designs', 'Full hands & feet', 'Premium henna', 'Personalized motifs'],
        },
        {
            name: 'Rajasthani Mehndi',
            price: '₹1500',
            features: ['Traditional patterns', 'Dense coverage', 'Cultural designs', 'Both hands & feet'],
        },
    ];

    const packages = [
        {
            name: 'Bridal Package',
            price: '₹8000',
            icon: <FaRing className="text-5xl text-rose-400" />,
            features: [
                'Bridal mehndi (hands & feet)',
                'Nail art for bride',
                'Pre-wedding trial',
                'Touch-up service',
                'Complimentary family mehndi',
            ],
            popular: true,
        },
        {
            name: 'Party Package',
            price: '₹2500',
            icon: <FaStar className="text-5xl text-purple-300" />,
            features: [
                'Gel nail art',
                'Arabic mehndi design',
                'Hand spa treatment',
                'Nail accessories',
            ],
            popular: false,
        },
        {
            name: 'Festival Special',
            price: '₹1200',
            icon: <FaHandSparkles className="text-5xl text-fuchsia-300" />,
            features: [
                'Simple mehndi design',
                'Classic manicure',
                'Nail polish',
                'Hand moisturizing',
            ],
            popular: false,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
            <Header />

            {/* Page Title */}
            <section className="py-16 md:py-20 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3">Our Services</h1>
                    <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-300 mx-auto mb-4"></div>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Premium Beauty Services Tailored Just for You
                    </p>
                </motion.div>

                {/* Nail Art Services */}
                <div className="mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <div className="flex justify-center mb-3">
                            <FaPaintBrush className="text-5xl md:text-6xl text-purple-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
                            Nail Art Services
                        </h2>
                        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-300 mx-auto mb-3"></div>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Express yourself with stunning nail designs and premium care
                        </p>
                    </motion.div>

                    {/* Service Image Gallery with Carousel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 relative"
                    >
                        <div className="relative">
                            {/* Previous Button - Hidden on mobile */}
                            <button
                                onClick={prevNailGallery}
                                disabled={nailGalleryIndex === 0}
                                className={`hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all border-2 border-purple-200 items-center justify-center ${nailGalleryIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-50 active:scale-95'
                                    }`}
                                aria-label="Previous images"
                            >
                                <FaChevronLeft className="text-purple-600 text-xl" />
                            </button>

                            {/* Image Grid - Scrollable on mobile, carousel on desktop */}
                            <div 
                                ref={nailGalleryScrollRef}
                                className="overflow-x-auto md:overflow-hidden md:px-0 scrollbar-hide snap-x snap-mandatory"
                            >
                                <div
                                    className="flex md:grid md:grid-cols-4 gap-4 px-4 md:px-0 transition-transform duration-500"
                                    style={{ 
                                        transform: !isMobile ? `translateX(-${nailGalleryIndex * (100 / imagesPerView)}%)` : 'none'
                                    }}
                                >
                                    {nailGalleryImages.map((item) => (
                                        <div
                                            key={item}
                                            onClick={() => openImageModal(item, 'nail')}
                                            className="relative aspect-square w-full min-w-full md:min-w-0 md:w-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center group cursor-pointer snap-center"
                                        >
                                            <FaImage className="text-6xl text-purple-300 group-hover:text-purple-400 transition-colors" />
                                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                            <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded text-xs font-semibold text-purple-600">
                                                {item}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Next Button - Hidden on mobile */}
                            <button
                                onClick={nextNailGallery}
                                disabled={nailGalleryIndex >= nailGalleryImages.length - imagesPerView}
                                className={`hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all border-2 border-purple-200 items-center justify-center ${nailGalleryIndex >= nailGalleryImages.length - imagesPerView ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-purple-50 active:scale-95'
                                    }`}
                                aria-label="Next images"
                            >
                                <FaChevronRight className="text-purple-600 text-xl" />
                            </button>
                        </div>

                        {/* Indicator Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {Array.from({ length: isMobile ? nailGalleryImages.length : nailGalleryImages.length - imagesPerView + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setNailGalleryIndex(index);
                                        if (isMobile && nailGalleryScrollRef.current) {
                                            const cardWidth = nailGalleryScrollRef.current.clientWidth;
                                            nailGalleryScrollRef.current.scrollTo({
                                                left: index * cardWidth,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${index === nailGalleryIndex ? 'bg-purple-600 w-8' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Nail Services Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {nailServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-300"
                            >
                                <div className="text-center mb-4">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                                    <div className="text-3xl font-bold text-purple-600">{service.price}</div>
                                </div>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mehndi Services */}
                <div className="mb-16 md:mb-20 bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl p-6 md:p-8 lg:p-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <div className="flex justify-center mb-3">
                            <FaHandSparkles className="text-5xl md:text-6xl text-fuchsia-300" />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
                            Mehndi Services
                        </h2>
                        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-300 mx-auto mb-3"></div>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Traditional and contemporary mehndi designs for every occasion
                        </p>
                    </motion.div>

                    {/* Mehndi Image Gallery with Carousel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 relative"
                    >
                        <div className="relative">
                            {/* Previous Button - Hidden on mobile */}
                            <button
                                onClick={prevMehndiGallery}
                                disabled={mehndiGalleryIndex === 0}
                                className={`hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all border-2 border-fuchsia-200 items-center justify-center ${mehndiGalleryIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-fuchsia-50 active:scale-95'
                                    }`}
                                aria-label="Previous images"
                            >
                                <FaChevronLeft className="text-fuchsia-600 text-xl" />
                            </button>

                            {/* Image Grid - Scrollable on mobile, carousel on desktop */}
                            <div 
                                ref={mehndiGalleryScrollRef}
                                className="overflow-x-auto md:overflow-hidden md:px-0 scrollbar-hide snap-x snap-mandatory"
                            >
                                <div
                                    className="flex md:grid md:grid-cols-4 gap-4 px-4 md:px-0 transition-transform duration-500"
                                    style={{ 
                                        transform: !isMobile ? `translateX(-${mehndiGalleryIndex * (100 / imagesPerView)}%)` : 'none'
                                    }}
                                >
                                    {mehndiGalleryImages.map((item) => (
                                        <div
                                            key={item}
                                            onClick={() => openImageModal(item, 'mehndi')}
                                            className="relative aspect-square w-full min-w-full md:min-w-0 md:w-auto rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-fuchsia-100 to-purple-100 flex items-center justify-center group cursor-pointer snap-center"
                                        >
                                            <FaImage className="text-6xl text-fuchsia-300 group-hover:text-fuchsia-400 transition-colors" />
                                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                            <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded text-xs font-semibold text-fuchsia-600">
                                                {item}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Next Button - Hidden on mobile */}
                            <button
                                onClick={nextMehndiGallery}
                                disabled={mehndiGalleryIndex >= mehndiGalleryImages.length - imagesPerView}
                                className={`hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-xl hover:shadow-2xl transition-all border-2 border-fuchsia-200 items-center justify-center ${mehndiGalleryIndex >= mehndiGalleryImages.length - imagesPerView ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-fuchsia-50 active:scale-95'
                                    }`}
                                aria-label="Next images"
                            >
                                <FaChevronRight className="text-fuchsia-600 text-xl" />
                            </button>
                        </div>

                        {/* Indicator Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {Array.from({ length: isMobile ? mehndiGalleryImages.length : mehndiGalleryImages.length - imagesPerView + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setMehndiGalleryIndex(index);
                                        if (isMobile && mehndiGalleryScrollRef.current) {
                                            const cardWidth = mehndiGalleryScrollRef.current.clientWidth;
                                            mehndiGalleryScrollRef.current.scrollTo({
                                                left: index * cardWidth,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${index === mehndiGalleryIndex ? 'bg-fuchsia-600 w-8' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Mehndi Services Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mehndiServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-fuchsia-300"
                            >
                                <div className="text-center mb-4">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                                    <div className="text-3xl font-bold text-fuchsia-400">{service.price}</div>
                                </div>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Special Packages */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Special Packages
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-300 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Complete beauty solutions for your special occasions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${pkg.popular ? 'border-4 border-rose-400' : 'border-2 border-gray-200'
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                                        MOST POPULAR
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <div className="flex justify-center mb-4">{pkg.icon}</div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent">
                                    {pkg.price}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full bg-gradient-to-r from-purple-400 to-fuchsia-300 text-white py-3 rounded-full font-bold hover:from-purple-500 hover:to-fuchsia-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Book Now
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Our Services */}
                <div className="bg-gradient-to-r from-purple-300 via-fuchsia-200 to-purple-300 rounded-3xl p-12 shadow-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Why Choose Our Services?
                        </h2>
                        <div className="w-24 h-1 bg-white mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Premium Products', desc: 'Only the finest, skin-safe materials' },
                            { title: 'Expert Artists', desc: 'Trained and certified professionals' },
                            { title: 'Hygiene Standards', desc: 'Strict sanitization protocols' },
                            { title: 'Custom Designs', desc: 'Personalized to your preferences' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
                            >
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeImageModal}
                        className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full px-4"
                            style={{ height: '60vh', marginTop: '20vh', marginBottom: '20vh' }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeImageModal}
                                className="absolute -top-12 right-0 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all hover:scale-110"
                            >
                                <FaTimes className="text-gray-800 text-xl" />
                            </button>

                            {/* Image Container */}
                            <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ${
                                selectedImage.galleryType === 'nail' 
                                    ? 'bg-gradient-to-br from-purple-100 to-fuchsia-100' 
                                    : 'bg-gradient-to-br from-fuchsia-100 to-purple-100'
                            } flex items-center justify-center`}>
                                <FaImage className={`text-9xl ${
                                    selectedImage.galleryType === 'nail' 
                                        ? 'text-purple-300' 
                                        : 'text-fuchsia-300'
                                }`} />
                                <div className={`absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg text-lg font-bold ${
                                    selectedImage.galleryType === 'nail' 
                                        ? 'text-purple-600' 
                                        : 'text-fuchsia-600'
                                }`}>
                                    {selectedImage.galleryType === 'nail' ? 'Nail Art Design' : 'Mehndi Design'}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Services;
