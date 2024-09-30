import React, { Fragment } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import TimesheetIcon from "@mui/icons-material/AccessTimeFilled";
import HomeIcon from "@mui/icons-material/Home";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import UserIcon from "@mui/icons-material/Person";
import InvoicesIcon from "@mui/icons-material/Receipt";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";
import FolderIcon from "@mui/icons-material/Folder";
import DocumentsIcon from "@mui/icons-material/FileCopy";
import TrainingIcon from "@mui/icons-material/PictureAsPdf";
import LinksIcon from "@mui/icons-material/Link";
import MeetingIcon from "@mui/icons-material/Groups";
import TaskIcon from "@mui/icons-material/Task";

import logo from "../../public/images/logo.png";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <>
            {/* mobile sidebar */}
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50 lg:hidden"
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button
                                            type="button"
                                            className="-m-2.5 p-2.5"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#fcfffe] px-6 pb-4">
                                    <div className="mt-3 mb-3">
                                        <Image
                                            className="h-auto w-[215px]"
                                            src={logo}
                                            alt="Safe Solar"
                                        />
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul
                                            role="list"
                                            className="flex flex-1 flex-col gap-y-7"
                                        >
                                            <li>
                                                <ul
                                                    role="list"
                                                    className="-mx-2 space-y-4"
                                                >
                                                    <li>
                                                        <Link
                                                            href="/home"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/home"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <HomeIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/home"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Home
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/my-profile"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/my-profile"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <UserIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/my-profile"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            My Profile
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/my-documents"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/my-documents"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <DocumentsIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/my-documents"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Documents
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/my-training"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/my-training"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <TrainingIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/my-training"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Training
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/timesheet"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/timesheet"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <TimesheetIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/timesheet"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Timesheet
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/calendar"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/calendar"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <CalendarIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/calendar"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Calendar
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/tasks"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/tasks"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <TaskIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/tasks"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Tasks
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/resources"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/resources"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <FolderIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/resources"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Resources
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/meetings"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/meetings"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <MeetingIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/meetings"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Meetings
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/invoices"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/invoices"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <InvoicesIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/invoices"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Invoices
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/feedbacks"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/feedbacks"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <FeedbackIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/feedbacks"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Feedbacks
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href="/useful-links"
                                                            className={classNames(
                                                                pathname ===
                                                                    "/useful-links"
                                                                    ? "text-[#2da8e0]"
                                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                            )}
                                                        >
                                                            <LinksIcon
                                                                className={classNames(
                                                                    pathname ===
                                                                        "/useful-links"
                                                                        ? "text-[#2da8e0]"
                                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                                    "h-6 w-6 shrink-0"
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                            Useful Links
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="mt-auto">
                                                <Link
                                                    href="/login"
                                                    className="text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6] group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                                >
                                                    <LogoutIcon
                                                        className="h-6 w-6 shrink-0 text-[#5e5e5e] group-hover:text-gray-800"
                                                        aria-hidden="true"
                                                    />
                                                    Sign out
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r-1">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#fcfffe] px-6 pb-4">
                    <div className="mt-3 mb-3">
                        <Image
                            className="h-auto w-[215px]"
                            src={logo}
                            alt="Clinical Support Solutions"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                        >
                            <li>
                                <ul role="list" className="-mx-2 space-y-4">
                                    <li>
                                        <Link
                                            href="/home"
                                            className={classNames(
                                                pathname === "/home"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <HomeIcon
                                                className={classNames(
                                                    pathname === "/home"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/my-profile"
                                            className={classNames(
                                                pathname === "/my-profile"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <UserIcon
                                                className={classNames(
                                                    pathname === "/my-profile"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            My Profile
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/my-documents"
                                            className={classNames(
                                                pathname === "/my-documents"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <DocumentsIcon
                                                className={classNames(
                                                    pathname === "/my-documents"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Documents
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/my-training"
                                            className={classNames(
                                                pathname === "/my-training"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <TrainingIcon
                                                className={classNames(
                                                    pathname === "/my-training"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Training
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/timesheet"
                                            className={classNames(
                                                pathname === "/timesheet"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <TimesheetIcon
                                                className={classNames(
                                                    pathname === "/timesheet"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Timesheet
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/calendar"
                                            className={classNames(
                                                pathname === "/calendar"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <CalendarIcon
                                                className={classNames(
                                                    pathname === "/calendar"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Calendar
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/tasks"
                                            className={classNames(
                                                pathname === "/tasks"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <TaskIcon
                                                className={classNames(
                                                    pathname === "/tasks"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Tasks
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/resources"
                                            className={classNames(
                                                pathname === "/resources"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <FolderIcon
                                                className={classNames(
                                                    pathname === "/resources"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Resources
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/meetings"
                                            className={classNames(
                                                pathname === "/meetings"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <MeetingIcon
                                                className={classNames(
                                                    pathname === "/meetings"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Meetings
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/invoices"
                                            className={classNames(
                                                pathname === "/invoices"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <InvoicesIcon
                                                className={classNames(
                                                    pathname === "/invoices"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Invoices
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/feedbacks"
                                            className={classNames(
                                                pathname === "/feedbacks"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <FeedbackIcon
                                                className={classNames(
                                                    pathname === "/feedbacks"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Feedbacks
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/useful-links"
                                            className={classNames(
                                                pathname === "/useful-links"
                                                    ? "text-[#2da8e0]"
                                                    : "text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6]",
                                                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                            )}
                                        >
                                            <LinksIcon
                                                className={classNames(
                                                    pathname === "/useful-links"
                                                        ? "text-[#2da8e0]"
                                                        : "text-[#5e5e5e] group-hover:text-gray-800",
                                                    "h-6 w-6 shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            Useful Links
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="mt-auto">
                                <Link
                                    href="/login"
                                    className="text-[#5e5e5e] hover:text-gray-800 hover:bg-[#f6f6f6] group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-100"
                                >
                                    <LogoutIcon
                                        className="h-6 w-6 shrink-0 text-[#5e5e5e] group-hover:text-gray-800"
                                        aria-hidden="true"
                                    />
                                    Sign out
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
