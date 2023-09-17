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
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setNewItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    };
  
    const handleCreateClick = () => {
      onCreate(newItem);
      onClose();
      // Reset the form values
      setNewItem({
        name: '',
        description: '',
        price: 0,
        quantity: 0,
      });
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
          />
          <TextField
            name="description"
            label="Description"
            value={newItem.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="price"
            label="Price"
            type="number"
            value={newItem.price}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="quantity"
            label="Quantity"
            type="number"
            value={newItem.quantity}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
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