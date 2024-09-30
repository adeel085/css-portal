"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";

import AdminSidebar from "@/src/components/AdminSidebar";
import Popup from "@/src/components/Popup";
import Spinner from "@/src/components/Spinner";
import Navbar from "@/src/components/Navbar";
import SecondaryButton from "@/src/components/SecondaryButton";

import FolderIcon from "@mui/icons-material/FolderOpen";
import FileIcon from "@mui/icons-material/FilePresent";

import ConfirmationModal from "@/src/components/modals/ConfirmationModal";

const Resources = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();
    const [isSpinner, setIsSpinner] = useState(false);

    const router = useRouter();

    return (
        <>
            <AdminSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="lg:pl-72 bg-[#f2f2f7] min-h-screen">
                <Navbar setSidebarOpen={setSidebarOpen} username={"Admin"} />
                <main className="py-10">
                    {/* page header */}
                    <div className="flex items-center justify-between mb-5 px-4 sm:px-6 lg:px-8">
                        <div className="flex-auto">
                            <h1 className="text-2xl leading-6 text-gray-900">
                                Resources
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
                                            <span className="text-md font-semibold">
                                                Root /
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
                                                        Category Name
                                                    </td>
                                                    <td className="pb-2 font-semibold text-gray-500">
                                                        Date Modified
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200">
                                                    <td className="py-1 pl-[4px]">
                                                        <FolderIcon className="text-[#2da8e0]" />
                                                    </td>
                                                    <td className="py-1">
                                                        1. Key Staff Contact
                                                        List
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024 9:40:00
                                                    </td>
                                                </tr>

                                                <tr className="hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200">
                                                    <td className="py-1 pl-[4px]">
                                                        <FolderIcon className="text-[#2da8e0]" />
                                                    </td>
                                                    <td className="py-1">
                                                        2. Core Prescribing
                                                        Solutions - Company
                                                        Policies
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024 9:40:00
                                                    </td>
                                                </tr>

                                                <tr className="hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200">
                                                    <td className="py-1 pl-[4px]">
                                                        <FolderIcon className="text-[#2da8e0]" />
                                                    </td>
                                                    <td className="py-1">
                                                        3. How to request leave
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024 9:40:00
                                                    </td>
                                                </tr>

                                                <tr className="hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200">
                                                    <td className="py-1 pl-[4px]">
                                                        <FolderIcon className="text-[#2da8e0]" />
                                                    </td>
                                                    <td className="py-1">
                                                        4. How to update your
                                                        Email Signature
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024 9:40:00
                                                    </td>
                                                </tr>

                                                <tr className="hover:bg-gray-100 cursor-pointer border-b-1 border-gray-200">
                                                    <td className="py-1 pl-[4px]">
                                                        <FolderIcon className="text-[#2da8e0]" />
                                                    </td>
                                                    <td className="py-1">
                                                        5. Incident Reporting
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024 9:40:00
                                                    </td>
                                                </tr>

                                                <tr className="hover:bg-gray-100 cursor-pointer">
                                                    <td className="py-1 pl-[4px]">
                                                        <FileIcon className="text-[#2da8e0]" />
                                                    </td>
                                                    <td className="py-1">
                                                        File 1
                                                    </td>
                                                    <td className="py-1 text-gray-500 text-sm">
                                                        7/9/2024 9:40:00
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

export default Resources;
