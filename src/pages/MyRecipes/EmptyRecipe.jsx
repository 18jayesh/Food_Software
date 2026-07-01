import { motion } from "framer-motion";
import { ChefHat, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EmptyRecipe() {

    const navigate = useNavigate();

    return (

        <motion.div

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}

            className="
                bg-white
                rounded-3xl
                shadow-lg
                border
                border-orange-100
                py-20
                px-8
                text-center
            "

        >

            <div

                className="
                    w-24
                    h-24
                    mx-auto
                    rounded-full
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                "

            >

                <ChefHat

                    size={52}
                    className="text-orange-500"

                />

            </div>

            <h2

                className="
                    text-3xl
                    font-bold
                    mt-8
                    text-gray-800
                "

            >

                No Recipes Yet 🍽️

            </h2>

            <p

                className="
                    mt-4
                    text-gray-500
                    max-w-md
                    mx-auto
                    leading-7
                "

            >

                You haven't created any recipes yet.
                Start sharing your delicious recipes with the community.

            </p>

            <button

                onClick={() => navigate("/dashboard/create-recipe")}

                className="
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    font-semibold
                    px-8
                    py-4
                    rounded-2xl
                    transition
                "

            >

                <PlusCircle size={22} />

                Create Recipe

            </button>

        </motion.div>

    );

}