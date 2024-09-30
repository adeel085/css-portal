"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "../../../public/images/logo.png";

const Login = () => {
    const router = useRouter();
    return (
        <>
            <div className="h-screen bg-gradient-to-br from-slate-900 to-blue-900">
                <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md"></div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                        <div className="bg-[#fcfffe] px-6 py-12 shadow sm:rounded-lg sm:px-12">
                            <div className="mb-8">
                                <Image
                                    className="h-auto w-[215px] mx-auto"
                                    src={logo}
                                    alt="Safe Solar"
                                />
                                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    Sign in to your account
                                </h2>
                            </div>
                            <form className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-0"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            autoComplete="current-password"
                                            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-0"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-2 block text-sm leading-6 text-gray-900"
                                        >
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm leading-6">
                                        <a
                                            href="#"
                                            className="font-semibold text-[#4aaad5]"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={() => {
                                            router.push("/admin/dashboard");
                                        }}
                                        type="button"
                                        className="flex w-full justify-center rounded-md bg-[#4aaad5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2996c7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
