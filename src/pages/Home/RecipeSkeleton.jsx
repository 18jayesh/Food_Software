import { motion } from "framer-motion";

export default function RecipeSkeleton() {

    return (

        <motion.div

            initial={{ opacity: 0.5 }}

            animate={{ opacity: 1 }}

            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8
            }}

            className="
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-gray-100
                shadow-sm
            "

        >

            {/* Header */}

            <div className="flex items-center justify-between p-4">

                <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-gray-200"></div>

                    <div>

                        <div className="w-32 h-4 rounded bg-gray-200 mb-2"></div>

                        <div className="w-20 h-3 rounded bg-gray-100"></div>

                    </div>

                </div>

                <div className="w-6 h-6 rounded bg-gray-200"></div>

            </div>

            {/* Image */}

            <div className="w-full h-72 bg-gray-200"></div>

            {/* Actions */}

            <div className="p-4">

                <div className="flex justify-between">

                    <div className="flex gap-6">

                        <div className="w-16 h-5 rounded bg-gray-200"></div>

                        <div className="w-16 h-5 rounded bg-gray-200"></div>

                    </div>

                    <div className="w-6 h-6 rounded bg-gray-200"></div>

                </div>

                {/* Title */}

                <div className="mt-5 w-3/4 h-6 rounded bg-gray-200"></div>

                {/* Category */}

                <div className="mt-3 w-1/2 h-4 rounded bg-gray-100"></div>

                {/* Description */}

                <div className="mt-5 space-y-2">

                    <div className="w-full h-4 rounded bg-gray-100"></div>

                    <div className="w-5/6 h-4 rounded bg-gray-100"></div>

                </div>

                {/* Bottom */}

                <div className="flex justify-between items-center mt-6">

                    <div className="w-28 h-10 rounded-full bg-gray-200"></div>

                    <div className="w-24 h-5 rounded bg-gray-200"></div>

                </div>

            </div>

        </motion.div>

    );

}