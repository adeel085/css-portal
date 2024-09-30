"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

import PlusIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import AdminSidebar from "@/src/components/AdminSidebar";
import Popup from "@/src/components/Popup";
import Spinner from "@/src/components/Spinner";
import Navbar from "@/src/components/Navbar";
import SecondaryButton from "@/src/components/SecondaryButton";

import NewNotificationModal from "@/src/components/modals/NewNotificationModal";
import ConfirmationModal from "@/src/components/modals/ConfirmationModal";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [deleteConfirmationModal, setDeleteConfirmationModal] =
        useState(false);
    const [showNewNotifModal, setShowNewNotifModal] = useState(false);

    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();
    const [isSpinner, setIsSpinner] = useState(false);

    const router = useRouter();

    const saveNotification = () => {
        setIsSpinner(true);
        setShowNewNotifModal(false);

        setTimeout(() => {
            setIsSpinner(false);
            setPopupDetail({
                type: "Success",
                text: "Notification has been saved successfully.",
            });
            setIsPopup(true);

            setTimeout(() => {
                setIsPopup(false);
            }, 3000);
        }, 3000);
    };

    const deleteRecord = () => {
        setIsSpinner(true);
        setDeleteConfirmationModal(false);

        setTimeout(() => {
            setIsSpinner(false);
            setPopupDetail({
                type: "Success",
                text: "Notification has been deleted.",
            });
            setIsPopup(true);

            setTimeout(() => {
                setIsPopup(false);
            }, 3000);
        }, 2000);
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
                                Dashboard
                            </h1>
                        </div>
                        <div>
                            <SecondaryButton
                                Text={"Notification"}
                                Icon={PlusIcon}
                                size="small"
                                variant="contained"
                                disableElevation="true"
                                OnClickCallback={() => {
                                    setShowNewNotifModal(true);
                                }}
                            />
                        </div>
                    </div>

                    {/* page body */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mt-4 flow-root">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                                            <h4 className="font-semibold mb-4">
                                                Notification Title
                                            </h4>
                                            <div className="mb-2">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Quisque faucibus elit nec
                                                    leo auctor commodo.
                                                </p>
                                            </div>
                                            <div className="flex justify-end">
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
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                                            <h4 className="font-semibold mb-4">
                                                Notification Title
                                            </h4>
                                            <div className="mb-2">
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                </p>
                                            </div>
                                            <div className="flex justify-end items-end flex-grow">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* New notification modal */}
            <NewNotificationModal
                showModal={showNewNotifModal}
                setShowModal={setShowNewNotifModal}
                onSaveClickedCallback={saveNotification}
            />

            {/* Deletion confirmation modal */}
            <ConfirmationModal
                confirmationModal={deleteConfirmationModal}
                setConfirmationModal={setDeleteConfirmationModal}
                text={"Are you sure you want to delete this notification?"}
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

export default Dashboard;
