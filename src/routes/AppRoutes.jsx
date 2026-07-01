import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Home from "../pages/Home/Home";
import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import MyRecipes from "../pages/MyRecipes/MyRecipes";
import Favorites from "../pages/Favorites/Favorites";
import Profile from "../pages/Profile/Profile";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import MainLayout from "../layouts/MainLayout";

import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";
import AuthRedirect from "../components/AuthRedirect";

export default function AppRoutes() {

    return (

        <Routes>

            {/* Root */}

            <Route

                path="/"

                element={<AuthRedirect />}

            />

            {/* Authentication */}

            <Route

                path="/login"

                element={

                    <PublicRoute>

                        <Login />

                    </PublicRoute>

                }

            />

            <Route

                path="/register"

                element={

                    <PublicRoute>

                        <Register />

                    </PublicRoute>

                }

            />

            {/* Protected Routes */}

            <Route

                element={

                    <ProtectedRoute>

                        <MainLayout />

                    </ProtectedRoute>

                }

            >

                <Route

                    path="/home"

                    element={<Home />}

                />

                <Route

                    path="/create-recipe"

                    element={<CreateRecipe />}

                />

                <Route

                    path="/my-recipes"

                    element={<MyRecipes />}

                />
                <Route
                    path="/favorites"
                    element={<Favorites />}
                />

                <Route
                    path="/profile"
                    element={<Profile />}
                />

            </Route>
            <Route

                path="/recipe/:recipeId"

                element={<RecipeDetails />}

            />

            {/* 404 */}

            <Route

                path="*"

                element={<AuthRedirect />}

            />

        </Routes>

    );

}