import { motion } from "framer-motion"
import { a } from "framer-motion/client"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { SiLeetcode } from "react-icons/si"

const Header = () => {
    return (
        <header className="absolute w-full z-50 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">


                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2,
                    }}
                    className="flex items-center">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-x1 mr-3">
                        S
                    </div>
                    <span className="text-x1 font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                        Shashmitha
                    </span>

                </motion.div>

                {/* Navigation - desktop*/}
                <nav className="lg:flex hidden space-x-10">
                    {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                        <motion.a
                            key={item}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                typr: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.7 + index * 0.2,
                            }}
                            className="relative text-gray-800 dark:text-gray-200 font-medium hover:text-gray-200 hover:violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                            href="#">
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}

                </nav>
                {/* social icons - desktop */}
                <div className="md:flex hidden itrms-center space-x-4">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.3,
                            duration: 0.8,
                        }}

                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="#">
                        <FiGithub className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.3,
                            duration: 0.8,
                        }}

                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="#">
                        <FiLinkedin className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.3,
                            duration: 0.8,
                        }}

                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300" href="#">
                        <SiLeetcode className="w-5 h-5" />
                    </motion.a>
                </div>

                {/* Hire me Button */}
                <motion.button
                initial={{ opacity: 0, scale: 0.8}} 
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    delay: 1.6,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                }}
                className="m1-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500">
                    Hire Me
                </motion.button>

            </div>

        </header>
    )
}

export default Header
