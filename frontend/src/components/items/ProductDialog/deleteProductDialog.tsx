import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { DeleteProductDialogProps } from "../types";

const DeleteProductDialog: React.FC<DeleteProductDialogProps> = ({ open, product, onClose, onConfirm }) => {
    const handleConfirmClick = () => {
      onConfirm(product);
      onClose();
    };
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this product?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmClick} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default DeleteProductDialog;