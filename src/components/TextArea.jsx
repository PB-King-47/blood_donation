import React from "react";

const Textarea = ({ label, name, value, onChange, placeholder, rows = 4, size = 'w-1/4' }) => {
  return (
    <div className="mb-4 flex gap-4 w-full">
      {label && (
        <label htmlFor={name} className={`${size} text-end text-xl mb-1 text-gray-700`}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-2 text-xl border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
    </div>
  );
};

export default Textarea;
