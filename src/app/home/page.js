"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import axios from "axios";

import Sidebar from "@/src/components/Sidebar";
import Popup from "@/src/components/Popup";
import Spinner from "@/src/components/Spinner";
import Navbar from "@/src/components/Navbar";
import TimesheetCalendar from "@/src/components/TimesheetCalendar";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { MenuItem, TextField } from "@mui/material";
import SecondaryButton from "@/src/components/SecondaryButton";

const Home = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [confirmationModal, setConfirmationModla] = useState(false);

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
                    <div className="flex items-center mb-5 px-4 sm:px-6 lg:px-8">
                        <div className="flex-auto">
                            <h1 className="text-3xl leading-6 text-gray-900">
                                Home
                            </h1>
                        </div>
                    </div>

                    {/* page body */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* body */}
                        <div className="mt-4 flow-root">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md mb-7">
                                        <p className="text-red-400 font-semibold text-sm mb-4">
                                            You must request leave via Calendar
                                            tab
                                        </p>
                                        <h2 className="text-lg font-semibold text-gray-700 mb-5">
                                            Welcome to the Clinical Support
                                            Solutions
                                        </h2>
                                        <p className="mb-3">
                                            This is the system you will use to
                                            upload timesheets and request leave.
                                        </p>
                                        <p className="mb-3">
                                            The resources section, in the left
                                            column will take you to out clinical
                                            guides, company policies, key staff
                                            contact lists and much more.
                                        </p>
                                        <p className="mb-3">
                                            The objective of this system is to
                                            make your working life easier, to
                                            manage and support you in carrying
                                            out your roles.
                                        </p>
                                        <p className="mb-3">
                                            We would welcome your feedback and
                                            suggestions for added
                                            functionalities and how we can
                                            improve the system.
                                        </p>
                                        <p className="font-bold">Thank you,</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-lg shadow-md mb-3">
                                        <h2 className="text-lg font-semibold text-gray-700">
                                            Latest Announcements
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                                            <h4 className="font-semibold mb-4">
                                                Notification Title
                                            </h4>
                                            <div>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Quisque faucibus elit nec
                                                    leo auctor commodo.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                                            <h4 className="font-semibold mb-4">
                                                Notification Title
                                            </h4>
                                            <div>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Quisque faucibus elit nec
                                                    leo auctor commodo.
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

export default Home;
