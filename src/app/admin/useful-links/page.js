"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

import PlusIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InvoiceIcon from "@mui/icons-material/Receipt";
import UserIcon from "@mui/icons-material/Person";
import DocumentsIcon from "@mui/icons-material/PictureAsPdf";
import { IconButton } from "@mui/material";

import AdminSidebar from "@/src/components/AdminSidebar";
import Popup from "@/src/components/Popup";
import Spinner from "@/src/components/Spinner";
import Navbar from "@/src/components/Navbar";
import SecondaryButton from "@/src/components/SecondaryButton";

import ConfirmationModal from "@/src/components/modals/ConfirmationModal";
import NewLinkModal from "@/src/components/modals/NewLinkModal";

const UsefulLinks = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [deleteConfirmationModal, setDeleteConfirmationModal] =
        useState(false);
    const [showNewLinkModal, setShowNewLinkModal] = useState(false);

    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();
    const [isSpinner, setIsSpinner] = useState(false);

    const router = useRouter();

    const saveLink = () => {
        setIsSpinner(true);
        setShowNewLinkModal(false);

        setTimeout(() => {
            setIsSpinner(false);
            setPopupDetail({
                type: "Success",
                text: "Link has been saved successfully.",
            });
            setIsPopup(true);

            setTimeout(() => {
                setIsPopup(false);
            }, 3000);
        }, 2000);
    };

    const deleteRecord = () => {
        setIsSpinner(true);
        setDeleteConfirmationModal(false);

        setTimeout(() => {
            setIsSpinner(false);
            setPopupDetail({
                type: "Success",
                text: "Link has been deleted.",
            });
            setIsPopup(true);

            setTimeout(() => {
                setIsPopup(false);
            }, 3000);
        }, 3000);
    };

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
                                Useful Links
                            </h1>
                        </div>
                        <div>
                            <SecondaryButton
                                Text={"Link"}
                                Icon={PlusIcon}
                                size="small"
                                variant="contained"
                                disableElevation="true"
                                OnClickCallback={() => {
                                    setShowNewLinkModal(true);
                                }}
                            />
                        </div>
                    </div>

                    {/* page body */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mt-4 flow-root">
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
                                                        Link
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
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        <a
                                                            href="https://google.com"
                                                            target="_blank"
                                                        >
                                                            https://google.com
                                                        </a>
                                                    </td>

                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <IconButton
                                                            aria-label="delete"
                                                            size="small"
                                                            onClick={() => {
                                                                setDeleteConfirmationModal(
                                                                    true
                                                                );
                                                            }}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="bg-white rounded-lg p-6 w-full shadow-md"></div> */}
                        </div>
                    </div>
                </main>
            </div>

            {/* New Link Modal */}
            <NewLinkModal
                showModal={showNewLinkModal}
                setShowModal={setShowNewLinkModal}
                onSaveClickedCallback={saveLink}
            />

            {/* Deletion confirmation modal */}
            <ConfirmationModal
                confirmationModal={deleteConfirmationModal}
                setConfirmationModal={setDeleteConfirmationModal}
                text={"Are you sure you want to delete this Link?"}
                confirmBtnText={"Yes"}
                onConfrirmCallback={deleteRecord}
            />

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

export default UsefulLinks;
