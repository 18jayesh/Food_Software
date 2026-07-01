import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {

    ChefHat,

    Bookmark,

    Heart

} from "lucide-react";

import {

    getMyRecipes,

    getFavoriteCount,

    getTotalLikes

} from "../../services/recipeService";

export default function ProfileStats() {

    const [stats, setStats] = useState({

        recipes: 0,

        favorites: 0,

        likes: 0

    });

    useEffect(() => {

        loadStats();

    }, []);

    async function loadStats() {

        try {

            const myRecipes = await getMyRecipes();

            const favorites = await getFavoriteCount();

            const likes = await getTotalLikes();

            setStats({

                recipes: myRecipes.length,

                favorites,

                likes

            });

        }

        catch (error) {

            console.log(error);

        }

    }

    const data = [

        {

            title: "Recipes",

            value: stats.recipes,

            icon: ChefHat

        },

        {

            title: "Favorites",

            value: stats.favorites,

            icon: Bookmark

        },

        {

            title: "Likes",

            value: stats.likes,

            icon: Heart

        }

    ];

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

            transition={{

                duration: .35

            }}

            className="

                mt-8

                bg-white

                rounded-3xl

                border

                border-orange-100

                shadow-sm

                overflow-hidden

            "

        >

            <div

                className="

                    grid

                    grid-cols-3

                    divide-x

                    divide-orange-100

                "

            >

                {

                    data.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div

                                key={item.title}

                                className="

                                    py-7

                                    flex

                                    flex-col

                                    items-center

                                    justify-center

                                    hover:bg-orange-50

                                    transition-all

                                    duration-300

                                "

                            >

                                <div

                                    className="

                                        w-12

                                        h-12

                                        rounded-full

                                        bg-orange-100

                                        flex

                                        items-center

                                        justify-center

                                        mb-3

                                    "

                                >

                                    <Icon

                                        size={22}

                                        className="text-orange-500"

                                    />

                                </div>

                                <h2

                                    className="

                                        text-3xl

                                        font-bold

                                        text-gray-900

                                    "

                                >

                                    {item.value}

                                </h2>

                                <p

                                    className="

                                        mt-1

                                        text-sm

                                        font-medium

                                        text-gray-500

                                    "

                                >

                                    {item.title}

                                </p>

                            </div>

                        );

                    })

                }

            </div>

        </motion.div>

    );

}