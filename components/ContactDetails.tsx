import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { memo } from 'react';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';
import { buttonHover, buttonVariants, containerVariants, imageVariants } from '@/style';

const ContactDetails = () => {
    return (
        <motion.section
            className="w-full max-w-4xl mx-auto px-4 py-12"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <motion.div
                    variants={imageVariants}
                    className="relative w-[350px] h-[350px] flex items-center justify-center"
                >
                    <div className="absolute w-[300px] h-[300px] rounded-full bg-green-500/20 ring-4 ring-green-500/20"></div>

                    <div className="relative w-[400px] h-[400px]">
                        <Image
                            src="/assets/girl-contact.svg"
                            alt="Professional contact illustration"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 350px"
                            priority
                        />
                    </div>
                </motion.div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-white mb-6">Connect With Me</h2>
                    <p className="text-gray-300 mb-6">
                        I&apos;m available on various social media platforms. Feel free to connect with me! <br />
                        I Usually get back to you in 24 hours.
                    </p>
                    <SocialLinks />
                    <Link href="/resume" passHref>
                    <motion.div variants={buttonVariants} whileHover={buttonHover}>
                        <Button className="inline-flex bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white transition-colors duration-300 w-full sm:py-3 px-6 relative overflow-hidden group">
                            <span className="relative z-10">View My Resume</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </Button>
                    </motion.div>
                    </Link>
                </div>
            </div>
        </motion.section>
    );
};

export default memo(ContactDetails);