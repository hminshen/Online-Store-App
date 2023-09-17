import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { SuccessProductDialogProps } from "../types";

const SuccessProductDialog : React.FC<SuccessProductDialogProps> = ({ open, onClose, message }) => (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Success</DialogTitle>
      <DialogContent>
        <p>{message}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  export default SuccessProductDialog;