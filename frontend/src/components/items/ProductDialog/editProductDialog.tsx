import { useEffect, useState } from "react";
import { EditProductDialogProps, ProductItem } from "../types";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

  
  const EditProductDialog: React.FC<EditProductDialogProps> = ({ open, product, onClose, onConfirm }) => {
    const [editedProduct, setEditedProduct] = useState<ProductItem>({ ...product });

    const [originalProduct, setOriginalProduct] = useState<ProductItem>(product);

    const [errors, setErrors] = useState({
      name: '',
      description: '',
      price: '',
      quantity: '',
    });

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
      // Clear error message when user starts typing in the field
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    };
  
    const handleConfirmClick = () => {
      const validationErrors = validateInputs(editedProduct);
      if (Object.keys(validationErrors).some((key) => !!validationErrors[key])) {
        // If there are validation errors, update the errors state
        setErrors(validationErrors);
      } 
      else{
        onConfirm(editedProduct);
        onClose();
      }

    };

    const handleCancelClick = () => {
        // Reset the edited product to the original product data
        setEditedProduct(originalProduct);
        onClose();
      };

    const validateInputs = (inputData: ProductItem) => {
        let error = {
          name: '',
          description: '',
          price: '',
          quantity: '',};
        // 1. Name validation
        if (!inputData.name) {
          error.name = 'Name is required.';
        } else if (!/[A-Z]/.test(inputData.name.charAt(0))) {
          error.name = 'Name must start with a capital letter.';
        } else if (inputData.name.length > 30) {
          error.name = 'Name cannot exceed 30 characters.';
        }

        // 2. Description validation
        if (inputData.description.length > 255) {
          error.description = 'Description cannot exceed 255 characters.';
        }

        // 3. Price validation
        if (isNaN(inputData.price) || inputData.price < 0) {
          error.price = 'Price must be a non-negative number.';
        } else {
          const priceParts = inputData.price.toString().split('.');
          if (priceParts.length === 2 && priceParts[1].length > 2) {
            error.price = 'Price can have at most 2 decimal places.';
          }
        }

        // 4. Quantity validation
        if (isNaN(inputData.quantity) || inputData.quantity < 0) {
          error.quantity = 'Quantity must be a non-negative number.';
        }

        return error;
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
            error={!!errors.name} // Set the error prop based on the presence of errors
            helperText={errors.name} // Display the error message
          />
          <TextField
            name="description"
            label="Description"
            value={editedProduct.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.description} // Set the error prop based on the presence of errors
            helperText={errors.description} // Display the error message
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            value={editedProduct.price}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.price} // Set the error prop based on the presence of errors
            helperText={errors.price} // Display the error message
          />
          <TextField
            name="quantity"
            label="Quantity"
            type="number"
            value={editedProduct.quantity}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.quantity} // Set the error prop based on the presence of errors
            helperText={errors.quantity} // Display the error message
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