"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

import Sidebar from "@/src/components/Sidebar";
import Popup from "@/src/components/Popup";
import Spinner from "@/src/components/Spinner";
import Navbar from "@/src/components/Navbar";
import SecondaryButton from "@/src/components/SecondaryButton";
import { IconButton } from "@mui/material";

import PlusIcon from "@mui/icons-material/Add";
import FileIcon from "@mui/icons-material/FilePresent";

import { TextField } from "@mui/material";

const MyTraining = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [selectedMonth, setSelectedMonth] = useState("2024-07");

    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();
    const [isSpinner, setIsSpinner] = useState(false);

    const router = useRouter();

    return (
        <>
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="lg:pl-72 bg-[#f2f2f7] min-h-screen">
                <Navbar
                    setSidebarOpen={setSidebarOpen}
                    username={"Pharmacist"}
                />
                <main className="py-10">
                    {/* page header */}
                    <div className="flex items-center justify-between mb-5 px-4 sm:px-6 lg:px-8">
                        <div className="flex-auto">
                            <h1 className="text-2xl leading-6 text-gray-900">
                                Training
                            </h1>
                        </div>
                    </div>

                    {/* page body */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mt-4 flow-root">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle px-4 sm:px-6 lg:px-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <div className="flex justify-between items-center gap-2 mb-5">
                                            <span className="text-md">
                                                <span className="text-red-400 font-semibold">
                                                    Note:
                                                </span>{" "}
                                                <span className="text-gray-500">
                                                    To remove training from
                                                    reminder list, please untick
                                                    reminder checkbox
                                                </span>
                                            </span>
                                            <TextField
                                                type="search"
                                                size="small"
                                                label="Search"
                                            />
                                        </div>
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b-1 border-gray-200">
                                                    <td className="pb-2 w-[34px]"></td>
                                                    <td className="pb-2 font-semibold text-gray-500">
                                                        Training Name
                                                    </td>
                                                    <td className="pb-2 font-semibold text-gray-500">
                                                        Issue Date
                                                    </td>
                                                    <td className="pb-2 font-semibold text-gray-500">
                                                        Exp. Date
                                                    </td>
                                                    <td className="pb-2 font-semibold text-gray-500">
                                                        Remind Date
                                                    </td>
                                                    <td className="pb-2 font-semibold text-gray-500">
                                                        Receive Date
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-1 pl-[4px]">
                                                        <FileIcon className="text-[#2da8e0]" />
                                                    </td>
                                                    <td className="py-1">
                                                        Reference 1
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm"></td>
                                                    <td className="py-1 text-gray-500 text-sm"></td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1 pl-[4px]">
                                                        <FileIcon className="text-[#2da8e0]" />
                                                    </td>
                                                    <td className="py-1">
                                                        Reference 2
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-1 pl-[4px]">
                                                        <FileIcon className="text-[#2da8e0]" />
                                                    </td>
                                                    <td className="py-1">CV</td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm"></td>
                                                    <td className="py-1 text-gray-500 text-sm"></td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {isSpinner && (
                <>
                    <div className="fixed left-0 top-0 h-full w-full bg-black opacity-50 z-[60]"></div>
                    <Spinner />
                </>
            )}

            <Popup
                type={popupDetail?.type}
                text={popupDetail?.text}
                isPopup={isPopup}
            />
        </>
    );
};

export default MyTraining;
