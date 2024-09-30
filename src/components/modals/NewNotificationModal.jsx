import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";
import { TextField } from "@mui/material";
import SecondaryButton from "../SecondaryButton";

import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
    return [...a, ...not(b, a)];
}

const NewNotificationModal = ({
    showModal,
    setShowModal,
    onSaveClickedCallback,
}) => {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([0, 1, 2, 3, 4, 5]);
    const [right, setRight] = React.useState([]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items) => intersection(checked, items).length;

    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const customList = (title, items) => (
        <Card className="shadow-none ring-1 ring-gray-300">
            <CardHeader
                sx={{ px: 1, py: 1 }}
                avatar={
                    <Checkbox
                        className="px-1"
                        onClick={handleToggleAll(items)}
                        checked={
                            numberOfChecked(items) === items.length &&
                            items.length !== 0
                        }
                        indeterminate={
                            numberOfChecked(items) !== items.length &&
                            numberOfChecked(items) !== 0
                        }
                        disabled={items.length === 0}
                        inputProps={{
                            "aria-label": "all items selected",
                        }}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} selected`}
            />
            <Divider />
            <List
                sx={{
                    width: 178,
                    height: 230,
                    bgcolor: "background.paper",
                    overflow: "auto",
                }}
                dense
                component="div"
                role="list"
            >
                {items.map((value) => {
                    const labelId = `transfer-list-all-item-${value}-label`;

                    return (
                        <ListItemButton
                            key={value}
                            role="listitem"
                            onClick={handleToggle(value)}
                            className="px-1"
                        >
                            <ListItemIcon className="min-w-[40px]">
                                <Checkbox
                                    className="px-2"
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        "aria-labelledby": labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={labelId}
                                primary={`Pharmacist ${value + 1}`}
                            />
                        </ListItemButton>
                    );
                })}
            </List>
        </Card>
    );

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
                                            New Notification
                                        </h5>
                                    </div>
                                    <div className="mb-6">
                                        <div className="mb-5">
                                            <TextField
                                                label="Notification Title"
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                required
                                            />
                                        </div>
                                        <div>
                                            <TextField
                                                label="Notification Body"
                                                variant="outlined"
                                                size="small"
                                                multiline
                                                fullWidth
                                                required
                                                rows={4}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <Grid
                                            container
                                            spacing={2}
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Grid item>
                                                {customList("Staff", left)}
                                            </Grid>
                                            <Grid item>
                                                <Grid
                                                    container
                                                    direction="column"
                                                    alignItems="center"
                                                >
                                                    <Button
                                                        sx={{ my: 0.5 }}
                                                        variant="outlined"
                                                        size="small"
                                                        onClick={
                                                            handleCheckedRight
                                                        }
                                                        disabled={
                                                            leftChecked.length ===
                                                            0
                                                        }
                                                        aria-label="move selected right"
                                                    >
                                                        &gt;
                                                    </Button>
                                                    <Button
                                                        sx={{ my: 0.5 }}
                                                        variant="outlined"
                                                        size="small"
                                                        onClick={
                                                            handleCheckedLeft
                                                        }
                                                        disabled={
                                                            rightChecked.length ===
                                                            0
                                                        }
                                                        aria-label="move selected left"
                                                    >
                                                        &lt;
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                {customList(
                                                    "Chosen Staff",
                                                    right
                                                )}
                                            </Grid>
                                        </Grid>
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

export default NewNotificationModal;
