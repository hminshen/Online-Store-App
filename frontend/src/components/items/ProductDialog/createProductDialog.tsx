import { useState } from "react";
import { CreateItemDialogProps, ProductItem } from "../types";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const CreateItemDialog: React.FC<CreateItemDialogProps> = ({ open, onClose, onCreate }) => {
    const [newItem, setNewItem] = useState<ProductItem>({
      name: '',
      description: '',
      price: 0,
      quantity: 0,
    });
    const [errors, setErrors] = useState({
      name: '',
      description: '',
      price: '',
      quantity: '',
    });
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
      // Clear error message when user starts typing in the field
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    };
  
    const handleCreateClick = () => {
      const validationErrors = validateInputs(newItem);
      if (Object.keys(validationErrors).some((key) => !!validationErrors[key])) {
        // If there are validation errors, update the errors state
        setErrors(validationErrors);
      } 
      else{
        onCreate(newItem);
        onClose();
        // Reset the form values
        setNewItem({
          name: '',
          description: '',
          price: 0,
          quantity: 0,
        });
        setErrors({
          name: '',
          description: '',
          price: '',
          quantity: '',
        });
      }
      
    };

    const handleCancelClick = () => {
        onClose();
        // Reset form fields after canceling the popup
        setNewItem({
          item_id: 0, // Reset or provide a default value for item_id
          name: '',
          description: '',
          price: 0,
          quantity: 0,
        });
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
        } else if (!/[A-Z]/.test(inputData.name)) {
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
        <DialogTitle>Create Item</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            value={newItem.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.name} // Set the error prop based on the presence of errors
            helperText={errors.name} // Display the error message
          />
          <TextField
            name="description"
            label="Description"
            value={newItem.description}
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
            value={newItem.price}
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
            value={newItem.quantity}
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
          <Button onClick={handleCreateClick} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default CreateItemDialog;