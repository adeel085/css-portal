import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TextField } from "@mui/material";
import SecondaryButton from "../SecondaryButton";
import UploadIcon from "@mui/icons-material/Upload";

import SimpleFileInput from "../SimpleFileInput";

const NewUserModal = ({ showModal, setShowModal, onSaveClickedCallback }) => {
    return (
        <Transition.Root show={showModal} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-[60]"
                onClose={() => {
                    setShowModal(false);
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-[500px] sm:p-6">
                                <div>
                                    <div className="mb-6">
                                        <h5 className="font-medium text-lg">
                                            New User
                                        </h5>
                                    </div>
                                    <div className="mb-5">
                                        <div className="mb-5">
                                            <TextField
                                                label="Full Name"
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                required
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <TextField
                                                label="Email"
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                required
                                            />
                                        </div>
                                        <div>
                                            <SimpleFileInput
                                                onFileChange={(files) => {
                                                    console.log(files);
                                                }}
                                                BtnIcon={UploadIcon}
                                                btnText="Documents"
                                                accept=".pdf,.docx,.jpg,.jpeg,.png"
                                                multiple
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <SecondaryButton
                                            Text={"Done"}
                                            size="small"
                                            variant="contained"
                                            disableElevation="true"
                                            OnClickCallback={() =>
                                                onSaveClickedCallback()
                                            }
                                        />
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default NewUserModal;
