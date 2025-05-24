import React from "react";

const SelectionInput = ({ label, options, value, onChange, name }) => {
    return (
        <div className="flex items-center gap-4 w-full">
            {label && <label className="w-1/4 text-end text-xl capitalize text-gray-700 mb-1">{label}</label>}
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2  text-xl border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
                <option value="">Select an option</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectionInput;
