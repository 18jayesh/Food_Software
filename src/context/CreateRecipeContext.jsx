import {
    createContext,
    useContext,
    useState
} from "react";

const CreateRecipeContext = createContext();

export function CreateRecipeProvider({ children }) {

    const [recipeData, setRecipeData] = useState({

        // Basic Info
        title: "",
        description: "",
        category: "",

        // Difficulty
        difficulty: "",

        // Details
        cookingTime: 30,
        servings: 2,

        // Media
        image: null,
        imagePreview: "",
        video: "",

        // Dynamic Data
        ingredients: [],
        instructions: [],
        tags: [],

        // Publish
        visibility: "public",
        status: "draft",
        agreeToPublish: false,

    });

    // Current Step
    const [currentStep, setCurrentStep] = useState(1);

    // Loading
    const [loading, setLoading] = useState(false);

    // Reset Form
    const resetRecipe = () => {

        setRecipeData({

            title: "",
            description: "",
            category: "",

            difficulty: "",

            cookingTime: 30,
            servings: 2,

            image: null,
            imagePreview: "",
            video: "",

            ingredients: [],
            instructions: [
                {
                    id: Date.now(),
                    text: ""
                }
            ],
            tags: [],

            visibility: "public",
            status: "draft",
            agreeToPublish: false
        });

        setCurrentStep(1);

    };

    return (

        <CreateRecipeContext.Provider

            value={{

                recipeData,
                setRecipeData,

                currentStep,
                setCurrentStep,

                loading,
                setLoading,

                resetRecipe

            }}

        >

            {children}

        </CreateRecipeContext.Provider>

    );

}

export function useRecipe() {

    const context = useContext(CreateRecipeContext);

    if (!context) {

        throw new Error(
            "useRecipe must be used inside CreateRecipeProvider"
        );

    }

    return context;

}