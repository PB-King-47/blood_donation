import React from "react";

const InputField = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    required = false,
    size = "w-1/4",
}) => {
    return (
        <div className="flex items-center gap-4 w-full">
            {label && (
                <label
                    htmlFor={name}
                    className={`${size} text-end text-xl capitalize text-gray-700 mb-1`}
                >
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full px-4 py-2 text-xl border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
        </div>
    );
};

export default InputField;
