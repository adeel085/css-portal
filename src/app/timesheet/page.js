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

const Timesheet = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [confirmationModal, setConfirmationModla] = useState(false);

    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState();
    const [isSpinner, setIsSpinner] = useState(false);

    const router = useRouter();

    const deletePost = () => {
        // setIsSpinner(true);
        // setConfirmationModla(false);
        // setPopupDetail({
        //     type: 'Success',
        //     text: 'Your post has been deleted.'
        // });
        // setIsPopup(true);
        // setTimeout(() => {
        //     setIsPopup(false);
        //     setIsSpinner(false);
        // }, 3000);
    };

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
                                Timesheet
                            </h1>
                        </div>
                    </div>

                    {/* page body */}
                    <div className="px-4 sm:px-6 lg:px-8">
                        {/* body */}
                        <div className="mt-4 flow-root">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <div className="block sm:flex">
                                            <div className="flex-1 mb-5 sm:mb-0">
                                                <TimesheetCalendar />
                                            </div>
                                            <div className="flex-1">
                                                <div className="pl-4">
                                                    <div className="mb-5">
                                                        <div className="text-right text-sm mb-1">
                                                            <span className="font-semibold">
                                                                Total Hours:
                                                            </span>
                                                            <span className="ml-2 w-[75px] inline-block">
                                                                0
                                                            </span>
                                                        </div>

                                                        <div className="text-right text-sm mb-1">
                                                            <span className="font-semibold">
                                                                Total Hours
                                                                Billed (£):
                                                            </span>
                                                            <span className="ml-2 w-[75px] inline-block">
                                                                0
                                                            </span>
                                                        </div>

                                                        <div className="text-right text-sm mb-1">
                                                            <span className="font-semibold">
                                                                Total Expenses
                                                                Claimed (£):
                                                            </span>
                                                            <span className="ml-2 w-[75px] inline-block">
                                                                0
                                                            </span>
                                                        </div>

                                                        <div className="text-right text-sm">
                                                            <span className="font-semibold">
                                                                Date:
                                                            </span>
                                                            <span className="ml-2 w-[75px] inline-block">
                                                                7/10/2024
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <FormControl
                                                            className="mb-4"
                                                            fullWidth
                                                        >
                                                            <InputLabel
                                                                id="demo-simple-select-label"
                                                                size="small"
                                                            >
                                                                Select Project *
                                                            </InputLabel>
                                                            <Select
                                                                size="small"
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                label="Select Project *"
                                                                className="w-full"
                                                                required
                                                            >
                                                                <MenuItem
                                                                    value={1}
                                                                >
                                                                    Project 1
                                                                </MenuItem>
                                                                <MenuItem
                                                                    value={2}
                                                                >
                                                                    Project 2
                                                                </MenuItem>
                                                                <MenuItem
                                                                    value={3}
                                                                >
                                                                    Project 3
                                                                </MenuItem>
                                                            </Select>
                                                        </FormControl>

                                                        <FormControl
                                                            className="mb-4"
                                                            fullWidth
                                                        >
                                                            <InputLabel
                                                                id="demo-simple-select-label"
                                                                size="small"
                                                            >
                                                                Select Practice
                                                            </InputLabel>
                                                            <Select
                                                                size="small"
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                label="Select Practice"
                                                                className="w-full"
                                                            >
                                                                <MenuItem
                                                                    value={1}
                                                                >
                                                                    Practice 1
                                                                </MenuItem>
                                                                <MenuItem
                                                                    value={2}
                                                                >
                                                                    Practice 2
                                                                </MenuItem>
                                                                <MenuItem
                                                                    value={3}
                                                                >
                                                                    Practice 3
                                                                </MenuItem>
                                                            </Select>
                                                        </FormControl>

                                                        <TextField
                                                            className="w-full mb-4"
                                                            type="number"
                                                            size="small"
                                                            label="Hours"
                                                            required
                                                        />

                                                        <TextField
                                                            className="w-full mb-4"
                                                            type="number"
                                                            size="small"
                                                            label="Rate"
                                                            disabled
                                                        />

                                                        <TextField
                                                            className="w-full mb-4"
                                                            type="number"
                                                            size="small"
                                                            label="Comment"
                                                            multiline
                                                            rows={2}
                                                        />
                                                    </div>

                                                    <div className="flex justify-end gap-2">
                                                        <SecondaryButton
                                                            size="small"
                                                            Text={"Save"}
                                                        />

                                                        <SecondaryButton
                                                            size="small"
                                                            Text={"Save & New"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* confirm delete category modal */}

            <Transition.Root show={confirmationModal} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-[60]"
                    onClose={() => {
                        setConfirmationModla(false);
                    }}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                            <ShieldExclamationIcon
                                                className="h-6 w-6 text-blue-600"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-base font-semibold leading-6 text-gray-900 mb-5"
                                            >
                                                Are you sure you want to delete
                                                this post
                                            </Dialog.Title>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-5 sm:mt-6">
                                        <button
                                            type="button"
                                            className="flex w-full bg-[#0a0a0a] text-white justify-center rounded-lg bg-gradient-to-r from-[#4387be] to-[#4387be] px-3 py-2 text-sm outline-none"
                                            onClick={() =>
                                                setConfirmationModla(false)
                                            }
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="button"
                                            className="ml-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm outline-none"
                                            onClick={deletePost}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

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

export default Timesheet;
