import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RecipeActions from "../Home/RecipeActions";

import VideoModal from "./VideoModal";

import {
    ArrowLeft,
    UserCircle2,
    Play,
    Heart,
    MessageCircle,
    Bookmark,
    Share2
} from "lucide-react";

export default function RecipeHeader({

    recipe

}) {

    const navigate = useNavigate();

    const [openVideo, setOpenVideo] = useState(false);

    const hasVideo =

        recipe.video &&

        recipe.video.trim() !== "";

    return (
        
        <motion.section
            
            initial={{
                opacity: 0,
                y: 25
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            transition={{
                duration: .35
            }}

        >
            
            {/* Back Button */}

            <button

                onClick={() => navigate(-1)}

                className="

                    mb-5

                    w-11

                    h-11

                    rounded-full

                    border

                    border-gray-200

                    bg-white

                    flex

                    items-center

                    justify-center

                    shadow-sm

                    hover:bg-orange-50

                    transition-all

                "

            >

                <ArrowLeft

                    size={20}

                    className="text-gray-700"

                />

            </button>
                        {/* Hero Image */}

            <div

                className="

                    relative

                    overflow-hidden

                    rounded-3xl

                    cursor-pointer

                    group

                "

                onClick={() => {

                    if (hasVideo) {

                        setOpenVideo(true);

                    }

                }}

            >

                <img

                    src={recipe.image}

                    alt={recipe.title}

                    className="

                        w-full

                        h-[320px]

                        md:h-[500px]

                        object-cover

                        transition-transform

                        duration-500

                        group-hover:scale-105

                    "

                />

                {

                    hasVideo && (

                        <>

                            {/* Dark Overlay */}

                            <div

                                className="

                                    absolute

                                    inset-0

                                    bg-black/20

                                "

                            />

                            {/* Play Button */}

                            <div

                                className="

                                    absolute

                                    inset-0

                                    flex

                                    items-center

                                    justify-center

                                "

                            >

                                <div

                                    className="

                                        w-20

                                        h-20

                                        rounded-full

                                        bg-white/20

                                        backdrop-blur-xl

                                        border

                                        border-white/30

                                        shadow-2xl

                                        flex

                                        items-center

                                        justify-center

                                        transition-all

                                        duration-300

                                        group-hover:scale-110

                                    "

                                >

                                    <Play

                                        size={34}

                                        className="

                                            text-white

                                            ml-1

                                        "

                                        fill="white"

                                    />

                                </div>

                            </div>

                        </>

                    )

                }

            </div>
                <div className="mt-8">

                    <RecipeActions

                        recipe={recipe}

                    />

                </div>
            <VideoModal

                open={openVideo}

                onClose={() => setOpenVideo(false)}

                video={recipe.video}

            />
                        {/* Recipe Content */}

            <div

                className="

                    mt-6

                    bg-white

                    rounded-3xl

                    border

                    border-gray-100

                    shadow-sm

                    p-6

                "

            >

                {/* Author */}

                <div

                    className="

                        flex

                        items-center

                        gap-3

                        mb-5

                    "

                >

                    <UserCircle2

                        size={48}

                        className="text-orange-500"

                    />

                    <div>

                        <h3

                            className="

                                text-lg

                                font-semibold

                                text-gray-900

                            "

                        >

                            {recipe.authorName}

                        </h3>

                        <p

                            className="

                                text-sm

                                text-gray-500

                            "

                        >

                            {recipe.authorEmail}

                        </p>

                    </div>

                </div>

                {/* Title */}

                <h1

                    className="

                        text-3xl

                        md:text-4xl

                        font-bold

                        text-gray-900

                        leading-tight

                    "

                >

                    {recipe.title}

                </h1>

                {/* Description */}

                <p

                    className="

                        mt-4

                        text-gray-600

                        leading-8

                    "

                >

                    {recipe.description}

                </p>

                {/* Tags */}

                {

                    recipe.tags?.length > 0 && (

                        <div

                            className="

                                flex

                                flex-wrap

                                gap-2

                                mt-6

                            "

                        >

                            {

                                recipe.tags.map((tag) => (

                                    <span

                                        key={tag}

                                        className="

                                            px-4

                                            py-2

                                            rounded-full

                                            bg-orange-100

                                            text-orange-600

                                            text-sm

                                            font-medium

                                        "

                                    >

                                        #{tag}

                                    </span>

                                ))

                            }

                        </div>

                    )

                }

                {/* Recipe Info */}

                <div

                    className="

                        grid

                        grid-cols-3

                        gap-4

                        mt-8

                    "

                >

                    <div

                        className="

                            rounded-2xl

                            bg-orange-50

                            p-4

                            text-center

                        "

                    >

                        <p

                            className="

                                text-xs

                                text-gray-500

                            "

                        >

                            Category

                        </p>

                        <h4

                            className="

                                mt-1

                                font-semibold

                                text-gray-900

                            "

                        >

                            {recipe.category}

                        </h4>

                    </div>

                    <div

                        className="

                            rounded-2xl

                            bg-orange-50

                            p-4

                            text-center

                        "

                    >

                        <p

                            className="

                                text-xs

                                text-gray-500

                            "

                        >

                            Time

                        </p>

                        <h4

                            className="

                                mt-1

                                font-semibold

                                text-gray-900

                            "

                        >

                            {recipe.cookingTime}

                        </h4>

                    </div>

                    <div

                        className="

                            rounded-2xl

                            bg-orange-50

                            p-4

                            text-center

                        "

                    >

                        <p

                            className="

                                text-xs

                                text-gray-500

                            "

                        >

                            Servings

                        </p>

                        <h4

                            className="

                                mt-1

                                font-semibold

                                text-gray-900

                            "

                        >

                            {recipe.servings}

                        </h4>

                    </div>

                </div>
                                {/* Action Buttons */}

                

            </div>

        </motion.section>

    );

}