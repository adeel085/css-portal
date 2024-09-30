"use client";
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

import Sidebar from "@/src/components/Sidebar";
import Popup from "@/src/components/Popup";
import Spinner from "@/src/components/Spinner";
import Navbar from "@/src/components/Navbar";

import { Avatar } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { TextField, MenuItem } from "@mui/material";
import SecondaryButton from "@/src/components/SecondaryButton";

const MyProfile = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [isPopup, setIsPopup] = useState(false);
    const [popupDetail, setPopupDetail] = useState("");

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
                                My Profile
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
                                        <div className="mb-8">
                                            <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                                Personal Information
                                            </h2>
                                            <Avatar
                                                style={{
                                                    width: "120px",
                                                    height: "120px",
                                                }}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                                            <div>
                                                <TextField
                                                    label="Employee Code"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Region"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Login Name"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Office Email"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="First Name"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Middle Name"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Last Name"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    label="Birth Date"
                                                    value={"18/05/1997"}
                                                    disabled
                                                    fullWidth
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Department"
                                                    value={"Clinical Staff"}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant="outlined"
                                                    size="small"
                                                    disabled
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Line Manager"
                                                    value={"Line Manager 1"}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant="outlined"
                                                    size="small"
                                                    disabled
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Cover Approver"
                                                    value={"Cover Approver 1"}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant="outlined"
                                                    size="small"
                                                    disabled
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Job Title"
                                                    value={
                                                        "Pharmacy Technician"
                                                    }
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    variant="outlined"
                                                    size="small"
                                                    disabled
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <FormControl fullWidth>
                                                    <InputLabel
                                                        id="demo-simple-select-label"
                                                        size="small"
                                                    >
                                                        Select Gender *
                                                    </InputLabel>
                                                    <Select
                                                        size="small"
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        label="Select Gender *"
                                                        className="w-full"
                                                        required
                                                    >
                                                        <MenuItem value={1}>
                                                            Male
                                                        </MenuItem>
                                                        <MenuItem value={2}>
                                                            Female
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>

                                            <div>
                                                <TextField
                                                    label="NI Number"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Mobile"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Extension"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Status"
                                                    value={"Working"}
                                                    variant="outlined"
                                                    size="small"
                                                    disabled
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    label="Joining Date"
                                                    value={"10/07/2024"}
                                                    disabled
                                                    fullWidth
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    label="Review Date"
                                                    value={"10/07/2024"}
                                                    disabled
                                                    fullWidth
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    label="Leaving Date"
                                                    value={"10/07/2024"}
                                                    disabled
                                                    fullWidth
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Address"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Home Telephone"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Home Email"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div className="flex items-center">
                                                <label className="select-none cursor-pointer">
                                                    <input type="checkbox" />{" "}
                                                    Non Medical Pescriber
                                                </label>
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Hours Per Week"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    disabled
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Hours Per Hour"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    disabled
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                                            <div>
                                                <TextField
                                                    label="Smartcard Number"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    disabled
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                                            <div>
                                                <TextField
                                                    label="GPHC Number"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    disabled
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    label="Exp. Date"
                                                    value={"10/07/2024"}
                                                    disabled
                                                    fullWidth
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    size="small"
                                                    variant="outlined"
                                                    label="Checked On"
                                                    value={"10/07/2024"}
                                                    disabled
                                                    fullWidth
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                            Emergency Contact Detail - 1
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                                            <div>
                                                <TextField
                                                    label="Name"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Home Telephone"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Work Telephone"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Relationship"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Address"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                            Emergency Contact Detail - 2
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            <div>
                                                <TextField
                                                    label="Name"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Home Telephone"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Work Telephone"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Relationship"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <TextField
                                                    label="Address"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Popup
                type={popupDetail?.type}
                text={popupDetail?.text}
                isPopup={isPopup}
            />
        </>
    );
};

export default MyProfile;
