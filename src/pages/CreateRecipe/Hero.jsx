import { motion } from "framer-motion";
import { ChefHat, Sparkles, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
            }}
            className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-gradient-to-br
                from-orange-500
                via-orange-400
                to-amber-400
                p-8
                lg:p-12
                text-white
                shadow-2xl
            "
        >
            {/* Background Blur */}

            <div
                className="
                    absolute
                    -top-24
                    -right-24
                    w-72
                    h-72
                    rounded-full
                    bg-white/10
                    blur-3xl
                "
            />

            <div
                className="
                    absolute
                    -bottom-24
                    -left-24
                    w-72
                    h-72
                    rounded-full
                    bg-yellow-300/20
                    blur-3xl
                "
            />

            <div
                className="
                    relative
                    z-10
                    grid
                    lg:grid-cols-2
                    gap-10
                    items-center
                "
            >
                {/* Left */}

                <div>

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            bg-white/20
                            backdrop-blur-md
                            px-4
                            py-2
                            rounded-full
                            mb-6
                        "
                    >
                        <Sparkles size={18} />

                        <span className="text-sm font-medium">
                            Share your creativity
                        </span>

                    </div>

                    <h1
                        className="
                            text-4xl
                            lg:text-6xl
                            font-black
                            leading-tight
                        "
                    >
                        Create
                        <br />

                        Amazing Recipes
                    </h1>

                    <p
                        className="
                            mt-5
                            text-orange-100
                            text-lg
                            max-w-lg
                        "
                    >
                        Add your favourite dishes,
                        inspire thousands of food lovers
                        and build your own recipe collection.
                    </p>

                    <button
                        className="
                            mt-8
                            inline-flex
                            items-center
                            gap-2
                            bg-white
                            text-orange-600
                            px-6
                            py-3
                            rounded-2xl
                            font-semibold
                            shadow-xl
                            hover:scale-105
                            transition-all
                            duration-300
                        "
                    >
                        <Link to="/dashboard/create-recipe">

                            Start Creating
                        </Link>
                        

                        <ArrowRight size={18} />
                    </button>

                </div>

                {/* Right */}

                <motion.div
                    animate={{
                        y: [0, -12, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                    }}
                    className="flex justify-center"
                >

                    <div
                        className="
                            relative
                            bg-white/20
                            backdrop-blur-xl
                            border
                            border-white/30
                            rounded-[30px]
                            p-4
                            shadow-2xl
                        "
                    >

                        <img
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900"
                            alt="Recipe"
                            className="
                                w-[340px]
                                h-[340px]
                                object-cover
                                rounded-[24px]
                            "
                        />

                        <div
                            className="
                                absolute
                                -top-5
                                -left-5
                                w-16
                                h-16
                                rounded-2xl
                                bg-white
                                text-orange-500
                                flex
                                items-center
                                justify-center
                                shadow-xl
                            "
                        >
                            <ChefHat size={30} />
                        </div>

                    </div>

                </motion.div>

            </div>

        </motion.section>
    );
}