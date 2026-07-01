import { useAuth } from "../../context/AuthContext";

import {
    Camera,
    Mail,
    ChefHat,
    UtensilsCrossed
} from "lucide-react";

import { motion } from "framer-motion";

export default function ProfileHeader() {

    const { user } = useAuth();

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 30
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: .4
            }}

            className="
                bg-white
                rounded-3xl
                shadow-sm
                border
                border-gray-100
                overflow-hidden
            "

        >

            {/* Cover */}

            <div

                className="
                    h-36
                    bg-gradient-to-r
                    from-orange-400
                    via-orange-500
                    to-orange-600
                    relative
                "

            >

                {/* Profile */}

                <div

                    className="
                        absolute
                        left-1/2
                        bottom-0
                        -translate-x-1/2
                        translate-y-1/2
                    "

                >

                    <div className="relative">

                        {

                            user?.photoURL

                                ?

                                <img

                                    src={user.photoURL}

                                    alt="profile"

                                    className="
                                        w-32
                                        h-32
                                        rounded-full
                                        object-cover
                                        border-4
                                        border-white
                                    "

                                />

                                :

                                <div

                                    className="
                                        w-32
                                        h-32
                                        rounded-full
                                        bg-orange-100
                                        border-4
                                        border-white
                                        flex
                                        items-center
                                        justify-center
                                    "

                                >

                                    <ChefHat

                                        size={58}

                                        className="text-orange-500"

                                    />

                                </div>

                        }

                        <button

                            className="
                                absolute
                                bottom-2
                                right-2
                                w-9
                                h-9
                                rounded-full
                                bg-orange-500
                                text-white
                                flex
                                items-center
                                justify-center
                                shadow-lg
                            "

                        >

                            <Camera size={18} />

                        </button>

                    </div>

                </div>

            </div>

            {/* User Info */}

            <div

                className="
                    pt-20
                    pb-8
                    px-6
                    text-center
                "

            >

                <h2

                    className="
                        text-3xl
                        font-bold
                        text-gray-900
                    "

                >

                    {

                        user?.displayName ||

                        "Food Creator"

                    }

                </h2>

                <div

                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        mt-3
                        text-gray-500
                    "

                >

                    <Mail size={16} />

                    <span>

                        {user?.email}

                    </span>

                </div>

                <p

                    className="
                        mt-5
                        text-gray-600
                        max-w-xl
                        mx-auto
                        leading-7
                    "

                >

                    Passionate food lover  • Sharing homemade recipes •
                    Cooking with love 

                </p>

            </div>

        </motion.div>

    );

}