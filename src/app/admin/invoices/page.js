"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

import AdminSidebar from "@/src/components/AdminSidebar";
import Popup from "@/src/components/Popup";
import Spinner from "@/src/components/Spinner";
import Navbar from "@/src/components/Navbar";
import SecondaryButton from "@/src/components/SecondaryButton";
import { IconButton } from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

import { TextField } from "@mui/material";

const Invoices = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [selectedMonth, setSelectedMonth] = useState("2024-07");

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
                                Invoices
                            </h1>
                        </div>
                    </div>

                    {/* page body */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mt-4 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mb-3">
                                <div className="inline-block min-w-full py-2 align-middle px-4 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1ring-black ring-opacity-5 sm:rounded-lg bg-white">
                                        <div className="bg-white p-6 rounded-lg">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <TextField
                                                    type="month"
                                                    size="small"
                                                    variant="outlined"
                                                    label="Select Month"
                                                    value={selectedMonth}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    onChange={(event) => {
                                                        setSelectedMonth(
                                                            event.target.value
                                                        );
                                                    }}
                                                />

                                                <SecondaryButton
                                                    Text="Filter Invoices"
                                                    OnClickCallback={() => {
                                                        console.log("aaaa");
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mb-5">
                                <div className="inline-block min-w-full py-2 align-middle px-4 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden shadow ring-1ring-black ring-opacity-5 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-300">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Name
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Email
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Total
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Status
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                <tr className="cursor-pointer hover:bg-gray-100">
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Adeel Ahmed
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        adeel.ahmed9360@gmail.com
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        £ 100.00
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <span className="text-green-600 font-semibold">
                                                            Paid
                                                        </span>
                                                    </td>

                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <IconButton
                                                            aria-label="download"
                                                            size="small"
                                                            onClick={() => {
                                                                console.log(
                                                                    "Download Invoice"
                                                                );
                                                            }}
                                                        >
                                                            <DownloadIcon />
                                                        </IconButton>
                                                    </td>
                                                </tr>
                                                <tr className="cursor-pointer hover:bg-gray-100">
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Adeel Ahmed
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        adeel.ahmed9360@gmail.com
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        £ 150.00
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <span className="text-orange-400 font-semibold">
                                                            Pending
                                                        </span>
                                                    </td>

                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <IconButton
                                                            aria-label="download"
                                                            size="small"
                                                            onClick={() => {
                                                                console.log(
                                                                    "Download Invoice"
                                                                );
                                                            }}
                                                        >
                                                            <DownloadIcon />
                                                        </IconButton>
                                                    </td>
                                                </tr>
                                                <tr className="cursor-pointer hover:bg-gray-100">
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Adeel Ahmed
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        adeel.ahmed9360@gmail.com
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        £ 300.00
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <span className="text-red-600 font-semibold">
                                                            Rejected
                                                        </span>
                                                    </td>

                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <IconButton
                                                            aria-label="download"
                                                            size="small"
                                                            onClick={() => {
                                                                console.log(
                                                                    "Download Invoice"
                                                                );
                                                            }}
                                                        >
                                                            <DownloadIcon />
                                                        </IconButton>
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

export default Invoices;
