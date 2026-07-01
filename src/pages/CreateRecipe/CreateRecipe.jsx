
import RecipeStepper from "./RecipeStepper";
import BasicInfo from "./BasicInfo";
import ImageUploader from "./ImageUploader";
import DifficultySelector from "./DifficultySelector";
import IngredientsSection from "./IngredientsSection";
import PreviewCard from "./PreviewCard";
import RecipeNavigation from "./RecipeNavigation";
import InstructionsSection from "./InstructionsSection";
import PublishSection from "./PublishSection";
import { CreateRecipeProvider, useRecipe} from "../../context/CreateRecipeContext";
import TagSelector from "./TagsSelector";

export default function CreateRecipe() {

    return (

        <CreateRecipeProvider>

            <CreateRecipeContent />

        </CreateRecipeProvider>

    );

}

function CreateRecipeContent() {

    const {

        currentStep,

        setCurrentStep

    } = useRecipe();

    return (

        <div className="space-y-8">
            


            <RecipeStepper

                currentStep={currentStep}

                setCurrentStep={setCurrentStep}

            />
            
                <RecipeNavigation
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
            />
            <div

                className="

                    grid

                    lg:grid-cols-3

                    gap-8

                "

            >

                <div

                    className="

                        lg:col-span-2

                        space-y-6

                    "

                >

                    {

                        currentStep === 1 &&

                        <BasicInfo />

                    }

                    {

                        currentStep === 2 &&

                        <ImageUploader />

                    }

                    {

                        currentStep === 3 &&

                        <DifficultySelector />

                    }

                    {

                        currentStep === 4 &&

                        <IngredientsSection />

                    }

                    {

                        currentStep === 5 &&

                        <div className="bg-white rounded-3xl p-10">

                            <InstructionsSection />

                        </div>

                    }

                    {
                        currentStep === 6 && 
                            <div>
                                <TagSelector />

                                <PublishSection />
                            </div>
                        
                    }

                </div>

                <PreviewCard />
                

            </div>
            
        </div>

    );

}