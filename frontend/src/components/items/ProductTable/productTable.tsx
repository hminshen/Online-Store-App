import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ProductItem, ProductTableProps } from "../types";
import EditProductDialog from "../ProductDialog/editProductDialog";
import { useState } from "react";
import DeleteProductDialog from "../ProductDialog/deleteProductDialog";
  
  const ProductTable: React.FC<ProductTableProps> = ({ products, onEditClick, onDeleteClick }) => {
    const [editProductId, setEditProductId] = useState<number | null>(null);
    const [deleteProductId, setDeleteProductId] = useState<number | null>(null);

    const handleEditClick = (product: ProductItem) => {
      setEditProductId(product.item_id);
    };

    const handleDeleteClick = (product: ProductItem) => {
        setDeleteProductId(product.item_id);
    };
  
    const handleEditDialogClose = () => {
      setEditProductId(null);
    };

    const handleDeleteDialogClose = () => {
        setDeleteProductId(null);
      };

    const handleEditDialogConfirm = (updatedProduct: ProductItem) => {
        // Call a function to handle the updated product
        onEditClick(updatedProduct);
        handleEditDialogClose();
      };

    const handleDeleteDialogConfirm = (product: ProductItem) => {
        // Call a function to handle the deletion
        onDeleteClick(product);
        handleDeleteDialogClose();
      };
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.item_id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEditClick(product)}>
                    Edit
                  </Button>
                  <EditProductDialog
                    open={editProductId === product.item_id}
                    product={product}
                    onClose={handleEditDialogClose}
                    onConfirm={handleEditDialogConfirm}
                    />
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(product)}>
                    Delete
                  </Button>
                  <DeleteProductDialog
                    open={deleteProductId === product.item_id}
                    product={product}
                    onClose={handleDeleteDialogClose}
                    onConfirm={handleDeleteDialogConfirm}
                    />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default ProductTable;