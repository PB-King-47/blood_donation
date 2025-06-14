const ProfileParts = ({className, children}) => {
    return (
        <div className={`p-7 bg-white shadow-2xl rounded-2xl ${className}`}>
            {children}
        </div>
    );
};

export default ProfileParts;
