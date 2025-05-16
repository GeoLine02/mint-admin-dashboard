import Card from "@/app/components/ui/Card";

interface ColumnContextMenuProps {
  handleDeleteColumn: () => void;
}

const ColumnContextMenu = ({ handleDeleteColumn }: ColumnContextMenuProps) => {
  return (
    <Card className="absolute top-6 menu-transition">
      <button
        onClick={handleDeleteColumn}
        className="w-full py-2 hover:bg-red-500 transition-all duration-200"
      >
        Delete
      </button>
    </Card>
  );
};

export default ColumnContextMenu;
