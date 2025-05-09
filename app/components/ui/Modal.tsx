import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <CloseRoundedIcon
            sx={{
              cursor: "pointer",
            }}
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
