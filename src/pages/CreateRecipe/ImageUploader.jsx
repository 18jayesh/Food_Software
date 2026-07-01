import { useRef } from "react";
import { motion } from "framer-motion";

import {
    Image,
    Upload,
    Trash2,
    Video
} from "lucide-react";
import { useRecipe } from "../../context/CreateRecipeContext";
export default function ImageUploader() {

    const {

        recipeData,

        setRecipeData

    } = useRecipe();

    const fileInputRef = useRef();

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setRecipeData({

            ...recipeData,

            image: file

        });

    };
    const handleVideo = (e) => {

        setRecipeData({

            ...recipeData,

            video: e.target.value

        });

    };

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 20
            }}

            animate={{
                opacity: 1,
                y: 0
            }}

            className="
                bg-white
                rounded-[30px]
                p-8
                shadow-lg
                border
                border-orange-100
            "

        >

            <h2
                className="
                    text-2xl
                    font-bold
                    mb-6
                "
            >
                Recipe Image
            </h2>

            <input

                type="file"

                accept="image/*"

                hidden

                ref={fileInputRef}

                onChange={handleImage}

            />

            {

                recipeData.image ?

                    (

                        <div className="space-y-5">

                            <img

                                src={URL.createObjectURL(recipeData.image)}

                                alt="preview"

                                className="
                                w-full
                                h-72
                                object-cover
                                rounded-3xl
                            "

                            />

                            <div className="flex gap-4">

                                <button

                                    type="button"

                                    onClick={() =>
                                        fileInputRef.current.click()
                                    }

                                    className="
                                    flex-1
                                    py-3
                                    rounded-2xl
                                    bg-orange-500
                                    text-white
                                    font-semibold
                                "

                                >

                                    Change Image

                                </button>

                                <button

                                    type="button"

                                    onClick={() =>
                                        setRecipeData({

                                            ...recipeData,

                                            image: null

                                        })
                                    }

                                    className="
                                    w-14
                                    rounded-2xl
                                    bg-red-500
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                "

                                >

                                    <Trash2 size={20} />

                                </button>

                            </div>

                        </div>

                    )

                    :

                    (

                        <div

                            onClick={() =>
                                fileInputRef.current.click()
                            }

                            className="
                            h-72
                            rounded-[30px]
                            border-2
                            border-dashed
                            border-orange-300
                            flex
                            flex-col
                            items-center
                            justify-center
                            cursor-pointer
                            hover:bg-orange-50
                            transition-all
                        "

                        >

                            <div
                                className="
                                w-20
                                h-20
                                rounded-full
                                bg-orange-100
                                flex
                                items-center
                                justify-center
                            "
                            >

                                <Image
                                    size={38}
                                    className="text-orange-500"
                                />

                            </div>

                            <h3
                                className="
                                mt-6
                                text-xl
                                font-bold
                            "
                            >
                                Upload Recipe Image
                            </h3>

                            <p
                                className="
                                mt-2
                                text-gray-500
                            "
                            >
                                JPG • PNG • WEBP
                            </p>

                            <button

                                type="button"

                                className="
                                mt-6
                                px-6
                                py-3
                                rounded-2xl
                                bg-orange-500
                                text-white
                                flex
                                items-center
                                gap-2
                            "

                            >

                                <Upload size={18} />

                                Browse Image

                            </button>

                        </div>

                    )

            }

            <div className="mt-8">

                <h3 className="text-xl font-bold mb-5">
                    Recipe Video
                </h3>

                <label
                    className="
            flex
            items-center
            gap-2
            font-semibold
            mb-3
            text-gray-700
        "
                >
                    <Video
                        size={18}
                        className="text-orange-500"
                    />

                    YouTube Video URL

                </label>

                <input

                    type="url"

                    placeholder="https://www.youtube.com/watch?v=..."

                    value={recipeData.video}

                    onChange={handleVideo}

                    className="
            w-full
            h-14
            px-5
            rounded-2xl
            border
            border-orange-200
            outline-none
            focus:border-orange-500
        "

                />

            </div>
            {

                recipeData.video && (

                    <div className="mt-6">

                        <iframe

                            className="
                    w-full
                    h-72
                    rounded-3xl
                "

                            src={

                                recipeData.video.replace(

                                    "watch?v=",

                                    "embed/"

                                )

                            }

                            title="Recipe Video"

                            allowFullScreen

                        />

                    </div>

                )

            }

        </motion.div>

    );

}