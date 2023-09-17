import { useEffect, useState } from "react";
import { EditProductDialogProps, ProductItem } from "../types";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

  
  const EditProductDialog: React.FC<EditProductDialogProps> = ({ open, product, onClose, onConfirm }) => {
    const [editedProduct, setEditedProduct] = useState<ProductItem>({ ...product });

    const [originalProduct, setOriginalProduct] = useState<ProductItem>(product);

    useEffect(() => {
        // Update the edited product whenever the product prop changes (e.g., when editing a different item)
        setEditedProduct(product);
        setOriginalProduct(product);
    }, [product]);
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    };
  
    const handleConfirmClick = () => {
      onConfirm(editedProduct);
      onClose();
    };

    const handleCancelClick = () => {
        // Reset the edited product to the original product data
        setEditedProduct(originalProduct);
        onClose();
      };
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            value={editedProduct.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="description"
            label="Description"
            value={editedProduct.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            value={editedProduct.price}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="quantity"
            label="Quantity"
            type="number"
            value={editedProduct.quantity}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelClick} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmClick} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default EditProductDialog;