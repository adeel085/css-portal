import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MenuItem, TextField } from "@mui/material";
import SecondaryButton from "../SecondaryButton";
import CheckIcon from "@mui/icons-material/Check";

const TaskDetailModal = ({ showModal, setShowModal }) => {
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
                                        <div className="flex justify-between items-center">
                                            <h5 className="font-medium text-lg">
                                                Task 2
                                            </h5>
                                            <div>
                                                <span className="text-orange-400 text-sm font-semibold">
                                                    Pending
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <div className="mb-5">
                                            <label className="font-semibold">
                                                Attachments
                                            </label>
                                            <div className="flex gap-3">
                                                <a
                                                    href="#"
                                                    className="text-sky-600"
                                                >
                                                    Attachment1.pdf
                                                </a>
                                                <a
                                                    href="#"
                                                    className="text-sky-600"
                                                >
                                                    Attachment2.docx
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label className="font-semibold">
                                                Start Date
                                            </label>
                                            <div>
                                                <span>7/22/2024</span>
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label className="font-semibold">
                                                Due by
                                            </label>
                                            <div>
                                                <span>10/22/2024</span>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="font-semibold">
                                                Task body
                                            </label>
                                            <div>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Morbi sit amet faucibus
                                                    massa. Phasellus in arcu
                                                    elit. Praesent faucibus,
                                                    diam ullamcorper viverra
                                                    vestibulum, enim tortor
                                                    rutrum orci, ac ultrices
                                                    purus ex ut leo. Curabitur
                                                    posuere dolor mauris.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <SecondaryButton
                                            Text={"Mark as completed"}
                                            Icon={CheckIcon}
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

export default TaskDetailModal;
