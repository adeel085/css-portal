"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

import PlusIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import { IconButton } from "@mui/material";

import AdminSidebar from "@/src/components/AdminSidebar";
import Popup from "@/src/components/Popup";
import Spinner from "@/src/components/Spinner";
import Navbar from "@/src/components/Navbar";
import SecondaryButton from "@/src/components/SecondaryButton";

import NewTaskModal from "@/src/components/modals/NewTaskModal";
import ConfirmationModal from "@/src/components/modals/ConfirmationModal";

const Tasks = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [deleteConfirmationModal, setDeleteConfirmationModal] =
        useState(false);
    const [showNewTaskModal, setShowNewTaskModal] = useState(false);

    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();
    const [isSpinner, setIsSpinner] = useState(false);

    const router = useRouter();

    const tabs = [
        { name: "Active", href: "#", current: true },
        { name: "Archived", href: "#", current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    const saveTask = () => {
        setIsSpinner(true);
        setShowNewTaskModal(false);

        setTimeout(() => {
            setIsSpinner(false);
            setPopupDetail({
                type: "Success",
                text: "Task has been created successfully.",
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
                text: "Task has been deleted.",
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
                                Tasks
                            </h1>
                        </div>
                        <div>
                            <SecondaryButton
                                Text={"Task"}
                                Icon={PlusIcon}
                                size="small"
                                variant="contained"
                                disableElevation="true"
                                OnClickCallback={() => {
                                    setShowNewTaskModal(true);
                                }}
                            />
                        </div>
                    </div>

                    {/* page body */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="mt-4 flow-root">
                            <div className="mb-3">
                                <div className="sm:hidden">
                                    <label htmlFor="tabs" className="sr-only">
                                        Select a tab
                                    </label>
                                    {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                                    <select
                                        id="tabs"
                                        name="tabs"
                                        defaultValue={
                                            tabs.find((tab) => tab.current).name
                                        }
                                        className="block w-full rounded-md border-gray-300 focus:[#4aaad5] focus:ring-[#4aaad5]"
                                    >
                                        {tabs.map((tab) => (
                                            <option key={tab.name}>
                                                {tab.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="hidden sm:block">
                                    <nav
                                        aria-label="Tabs"
                                        className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
                                    >
                                        {tabs.map((tab, tabIdx) => (
                                            <a
                                                key={tab.name}
                                                href={tab.href}
                                                aria-current={
                                                    tab.current
                                                        ? "page"
                                                        : undefined
                                                }
                                                className={classNames(
                                                    tab.current
                                                        ? "text-gray-900"
                                                        : "text-gray-500 hover:text-gray-700",
                                                    tabIdx === 0
                                                        ? "rounded-l-lg"
                                                        : "",
                                                    tabIdx === tabs.length - 1
                                                        ? "rounded-r-lg"
                                                        : "",
                                                    "group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
                                                )}
                                            >
                                                <span>{tab.name}</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        tab.current
                                                            ? "bg-[#4aaad5]"
                                                            : "bg-transparent",
                                                        "absolute inset-x-0 bottom-0 h-0.5"
                                                    )}
                                                />
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
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
                                                        SNO
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Task Title
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        For
                                                    </th>

                                                    <th
                                                        scope="col"
                                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                    >
                                                        Due by
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
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        1
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Task 1
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Pharmacist 1
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        10/22/2024
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <span className="text-green-600 font-semibold">
                                                            Completed
                                                        </span>
                                                    </td>

                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <IconButton
                                                            aria-label="archive"
                                                            size="small"
                                                            onClick={() => {}}
                                                        >
                                                            <ArchiveIcon />
                                                        </IconButton>
                                                    </td>
                                                </tr>

                                                <tr className="cursor-pointer hover:bg-gray-100">
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        2
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Task 2
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Pharmacist 1
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        10/22/2024
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <span className="text-orange-400 font-semibold">
                                                            Pending
                                                        </span>
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

                                                <tr className="cursor-pointer hover:bg-gray-100">
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        3
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Task 3
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        Pharmacist 1
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        10/22/2024
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <span className="text-red-600 font-semibold">
                                                            Late
                                                        </span>
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

            {/* New Task Modal */}
            <NewTaskModal
                showModal={showNewTaskModal}
                setShowModal={setShowNewTaskModal}
                onSaveClickedCallback={saveTask}
            />

            {/* Deletion confirmation modal */}
            <ConfirmationModal
                confirmationModal={deleteConfirmationModal}
                setConfirmationModal={setDeleteConfirmationModal}
                text={"Are you sure you want to delete this task?"}
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

export default Tasks;
