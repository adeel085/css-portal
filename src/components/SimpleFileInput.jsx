import { useState } from "react";

const SimpleFileInput = ({ btnText, BtnIcon, onFileChange, ...props }) => {
    const [selectedFilesCount, setSelectedFilesCount] = useState(0);

    const handleFileChange = (event) => {
        setSelectedFilesCount(event.target.files.length);
        onFileChange(event.target.files);
    };

    return (
        <div
            className="flex"
            style={{
                borderRadius: "4px",
                border: "1px solid #c4c4c4",
            }}
        >
            <div
                style={{
                    padding: "8.5px 14px",
                }}
                className="flex-1"
            >
                <span
                    style={{
                        color: "#666666",
                        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
                        fontWeight: 400,
                        fontWize: "1rem",
                        lineHeight: "1.4375em",
                        letterSpacing: "0.00938em",
                    }}
                >
                    {selectedFilesCount > 0
                        ? `${selectedFilesCount} files selecetd`
                        : "No file selected"}
                </span>
            </div>
            <label
                style={{
                    padding: "8.5px 14px",
                }}
                className="bg-gray-200 cursor-pointer"
            >
                <span className="text-sm">
                    {BtnIcon && (
                        <BtnIcon
                            style={{
                                fontSize: "20px",
                            }}
                            className="mr-1"
                        />
                    )}
                    {btnText}
                </span>
                <input
                    type="file"
                    style={{
                        display: "none",
                    }}
                    onChange={handleFileChange}
                    {...props}
                />
            </label>
        </div>
    );
};

export default SimpleFileInput;
