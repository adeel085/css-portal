"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

import { Avatar } from "@mui/material";

import AdminSidebar from "@/src/components/AdminSidebar";
import Popup from "@/src/components/Popup";
import Spinner from "@/src/components/Spinner";
import Navbar from "@/src/components/Navbar";
import SecondaryButton from "@/src/components/SecondaryButton";

import NewNotificationModal from "@/src/components/modals/NewNotificationModal";
import ConfirmationModal from "@/src/components/modals/ConfirmationModal";

const Feedbacks = () => {
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
                                Feedbacks
                            </h1>
                        </div>
                    </div>

                    {/* page body */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mt-4 flow-root">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                                            <div className="mb-4 font-semibold text-sm flex items-center gap-2">
                                                <Avatar
                                                    sx={{
                                                        width: 24,
                                                        height: 24,
                                                    }}
                                                />
                                                <span>Adeel Ahmed</span>
                                            </div>
                                            <div>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Sed malesuada, est eget
                                                    vestibulum sodales, erat
                                                    libero imperdiet massa, sed
                                                    fermentum sem diam vel
                                                    felis. Nunc varius sed dolor
                                                    nec rutrum. Sed mattis,
                                                    turpis fermentum dignissim
                                                    pellentesque, risus felis
                                                    sagittis augue, vitae
                                                    posuere neque libero eu
                                                    neque.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                                            <div className="mb-4 font-semibold text-sm flex items-center gap-2">
                                                <Avatar
                                                    sx={{
                                                        width: 24,
                                                        height: 24,
                                                    }}
                                                />
                                                <span>Adeel Ahmed</span>
                                            </div>
                                            <div>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Sed malesuada, est eget
                                                    vestibulum sodales, erat
                                                    libero imperdiet massa, sed
                                                    fermentum sem diam vel
                                                    felis. Nunc varius sed dolor
                                                    nec rutrum. Sed mattis,
                                                    turpis fermentum dignissim
                                                    pellentesque, risus felis
                                                    sagittis augue, vitae
                                                    posuere neque libero eu
                                                    neque.
                                                </p>
                                            </div>
                                        </div>
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

export default Feedbacks;
