const Button = ({ className, type = "button", text, children, ...props }) => (
    <button
        className={`btn cursor-pointer bg-black text-white py-6 rounded-2xl capitalize px-10 ${className}`}
        type={type}
        {...props}
    >
        {children && children}
        {text && text}
    </button>
);

export default Button;