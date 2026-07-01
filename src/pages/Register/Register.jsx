import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import {
    User,
    Mail,
    Lock,
    ArrowRight
} from "lucide-react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            toast.error("Please fill all fields");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            const user = userCredential.user;

            await set(ref(db, `users/${user.uid}`), {
                uid: user.uid,
                name,
                email,
                profileImage: "",
                createdAt: Date.now(),
            });

            toast.success("Account created successfully");

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-[#fff8f0] flex items-center justify-center px-4">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-300 rounded-full blur-3xl opacity-30" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="backdrop-blur-xl bg-white/80 border border-white shadow-2xl rounded-3xl p-8">

                    <div className="text-center mb-8">

                        <h1 className="text-4xl font-bold text-gray-900">
                            Create Account
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Join the recipe community and share your creations
                        </p>

                    </div>

                    <form
                        onSubmit={handleRegister}
                        className="space-y-5"
                    >

                        <div className="relative">
                            <User
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-4 focus:ring-orange-200 transition"
                            />
                        </div>

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

                        <div className="relative">
                            <Lock
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(
                                        e.target.value
                                    )
                                }
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-4 focus:ring-orange-200 transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#ff6b35] hover:scale-[1.02] hover:bg-[#f85a20] transition-all duration-300 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                        >
                            Create Account

                            <ArrowRight size={18} />
                        </button>

                    </form>

                    <div className="mt-6 text-center">

                        <p className="text-gray-500 text-sm">
                            Already have an account?
                        </p>

                        <Link
                            to="/login"
                            className="mt-2 inline-block font-semibold text-[#ff6b35] hover:underline"
                        >
                            Login
                        </Link>

                    </div>

                </div>
            </motion.div>

        </div>
    );
}