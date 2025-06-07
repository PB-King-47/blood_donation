import { useEffect } from "react";

const ConfirmAutoCall = ({ isOpen, onConfirm, onCancel }) => {
    // Lock scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50">
            <div className="bg-white w-fit m-auto mt-20 rounded-xl shadow-lg p-6 ">
              <p>
                    By clicking this, you are going to use the Auto-call
                    feature.
                    <br />
                    Click ‘Continue’ to proceed
                </p>
                <div className="space-x-3 mt-5">
                  
                    <button
                        onClick={onConfirm}
                        className="px-6 py-2 bg-black text-white font-bold rounded-xl hover:bg-gray-700 cursor-pointer"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={onCancel}
                        className="px-6 py-2 border-black border-2 text-black rounded-xl hover:bg-gray-300 cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAutoCall;
