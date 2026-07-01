import { motion, AnimatePresence } from "framer-motion";

import {

    X

} from "lucide-react";

export default function VideoModal({

    open,

    onClose,

    video

}) {

    if (!video) {

        return null;

    }

    let youtubeId = "";

    if (

        video.includes("youtube.com") ||

        video.includes("youtu.be")

    ) {

        const match = video.match(

            /(?:youtu\.be\/|v=)([^&]+)/

        );

        youtubeId = match?.[1] || "";

    }

    return (

        <AnimatePresence>

            {

                open && (

                    <motion.div

                        initial={{

                            opacity: 0

                        }}

                        animate={{

                            opacity: 1

                        }}

                        exit={{

                            opacity: 0

                        }}

                        className="

                            fixed

                            inset-0

                            z-[999]

                            bg-black/75

                            backdrop-blur-md

                            flex

                            items-center

                            justify-center

                            p-4

                        "

                        onClick={onClose}

                    >

                        <motion.div

                            initial={{

                                scale: .9,

                                opacity: 0

                            }}

                            animate={{

                                scale: 1,

                                opacity: 1

                            }}

                            exit={{

                                scale: .9,

                                opacity: 0

                            }}

                            transition={{

                                duration: .25

                            }}

                            className="

                                relative

                                w-full

                                max-w-4xl

                                rounded-3xl

                                overflow-hidden

                                bg-black

                            "

                            onClick={(e) =>

                                e.stopPropagation()

                            }

                        >

                            <button

                                onClick={onClose}

                                className="

                                    absolute

                                    top-4

                                    right-4

                                    z-20

                                    w-11

                                    h-11

                                    rounded-full

                                    bg-white/20

                                    backdrop-blur-md

                                    flex

                                    items-center

                                    justify-center

                                    text-white

                                    hover:bg-white/30

                                    transition-all

                                "

                            >

                                <X

                                    size={22}

                                />

                            </button>

                            {

                                youtubeId ? (

                                    <iframe

                                        className="

                                            w-full

                                            aspect-video

                                        "

                                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}

                                        title="Recipe Video"

                                        allow="autoplay; encrypted-media"

                                        allowFullScreen

                                    />

                                ) : (

                                    <video

                                        controls

                                        autoPlay

                                        className="

                                            w-full

                                        "

                                    >

                                        <source

                                            src={video}

                                        />

                                    </video>

                                )

                            }

                        </motion.div>

                    </motion.div>

                )

            }

        </AnimatePresence>

    );

}