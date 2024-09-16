"use client";
import Link from "next/link";
import { Butty } from "./butty";
import { Bucket, Sv, Tree } from "./sv";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Import heart icons


export const Header = () => {
    const [isLiked, setIsLiked] = useState(false); // State to track if the heart is liked
    const [showRegistration, setShowRegistration] = useState(false); // State to show/hide registration form

    const handleHeartClick = () => {
        setIsLiked(!isLiked); // Toggle the like state
    };

    const handleRegistrationClick = () => {
        setShowRegistration(!showRegistration); // Toggle the registration form visibility
    };

    return (
        <header className="w-full h-[68px] bg-black flex justify-between items-center px-6">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <Link href="/">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <Tree/>
                    </svg>
                </Link>
                <Link href="/common">
                    <p className="text-white text-lg">Бүтээгдэхүүн</p>
                </Link>
            </div>

            {/* Button Section */}
            <div>
                <Butty />
            </div>
            <div className="flex items-center gap-3">
                <div className="cursor-pointer" onClick={handleHeartClick}>
                    {isLiked ? (
                        <FaHeart className="text-pink-500" /> // Filled heart in pink when liked
                    ) : (
                        <FaRegHeart className="text-white" /> // Unfilled heart when not liked
                    )}
                </div>
                <Bucket />
                <Link href="register">
                <button 
                    className="px-4 py-2 border-2 rounded-lg text-white hover:bg-white hover:text-black transition-colors" 
                >
                    Бүртгүүлэх
                </button>
                </Link>
           <a href="login">
                <button className="px-4 py-2 border-2 rounded-lg text-white hover:bg-white hover:text-black transition-colors" type="submit">
                    Нэвтрэх
                </button>
                </a>
            </div>

            {/* Registration Form */}
            {showRegistration && (
                <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg mb-4">Бүртгүүлэх</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-black mb-1">Нэр</label>
                            <input
                                type="text"
                                className="w-full border-2 p-2 rounded-lg"
                                placeholder="Нэрээ оруулна уу"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black mb-1">Имэйл</label>
                            <input
                                type="email"
                                className="w-full border-2 p-2 rounded-lg"
                                placeholder="Имэйлээ оруулна уу"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black mb-1">Нууц үг</label>
                            <input
                                type="password"
                                className="w-full border-2 p-2 rounded-lg"
                                placeholder="Нууц үгээ оруулна уу"
                            />
                        </div>
                        <button className="px-4 py-2 bg-black text-white rounded-lg">Бүртгүүлэх</button>
                    </form>
                </div>
            )}
        </header>
    );
};
