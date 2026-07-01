import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

import { useNavigate, Link } from "react-router-dom";

import {
    Mail,
    Lock,
    ArrowRight
} from "lucide-react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill all fields");
            return;
        }

        try {

            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(auth.currentUser);
            toast.success("Login Successful");

            setEmail("");
            setPassword("");

            navigate("/home");

        } catch (error) {

            console.log(error);

            switch (error.code) {

                case "auth/invalid-credential":
                    toast.error("Invalid Email or Password");
                    break;

                case "auth/user-not-found":
                    toast.error("User Not Found");
                    break;

                case "auth/wrong-password":
                    toast.error("Wrong Password");
                    break;

                default:
                    toast.error("Login Failed");
            }
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#fff8f0] flex items-center justify-center px-4">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-300 rounded-full blur-3xl opacity-30"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >

                <div className="backdrop-blur-xl bg-white/80 border border-white shadow-2xl rounded-3xl p-8">

                    <div className="text-center mb-8">

                        <h1 className="text-4xl font-bold text-gray-900">
                            Welcome Back
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Login to continue sharing recipes
                        </p>

                    </div>

                    <form
                        onSubmit={handleLogin}
                        className="space-y-5"
                    >

                        <div className="relative">

                            <Mail
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-4 focus:ring-orange-200 transition"
                            />

                        </div>

                        <div className="relative">

                            <Lock
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-4 focus:ring-orange-200 transition"
                            />

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#ff6b35] hover:bg-[#f85a20] hover:scale-[1.02] transition-all duration-300 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                        >

                            Login

                            <ArrowRight size={18} />

                        </button>

                    </form>

                    <div className="mt-6 text-center">

                        <p className="text-gray-500 text-sm">
                            Don't have an account?
                        </p>

                        <Link
                            to="/register"
                            className="mt-2 inline-block font-semibold text-[#ff6b35] hover:underline"
                        >
                            Create Account
                        </Link>

                    </div>

                </div>

            </motion.div>

        </div>
    );
}