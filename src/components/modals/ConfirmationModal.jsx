import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";

const ConfirmationModal = ({
    confirmationModal,
    setConfirmationModal,
    text,
    confirmBtnText,
    onConfrirmCallback,
}) => {
    return (
        <Transition.Root show={confirmationModal} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-[60]"
                onClose={() => {
                    setConfirmationModal(false);
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
                                            {text}
                                        </Dialog.Title>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="flex w-full bg-[#0a0a0a] text-white justify-center rounded-lg bg-gradient-to-r from-[#4387be] to-[#4387be] px-3 py-2 text-sm outline-none"
                                        onClick={() =>
                                            setConfirmationModal(false)
                                        }
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="button"
                                        className="ml-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm outline-none"
                                        onClick={() => onConfrirmCallback()}
                                    >
                                        {confirmBtnText}
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ConfirmationModal;
