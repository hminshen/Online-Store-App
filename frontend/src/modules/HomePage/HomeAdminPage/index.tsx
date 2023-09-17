import LoadingHourglass from "@/components/common/LoadingHourglass/LoadingHourglass";
import SuccessProductDialog from "@/components/items/ProductDialog/successProductDialog";
import ProductTable from "@/components/items/ProductTable/productTable";
import { ProductItem } from "@/components/items/types";
import authService from "@/services/auth";
import itemService from "@/services/item";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CreateItemButton, SignoutButton } from "./style";
import CreateItemDialog from "@/components/items/ProductDialog/createProductDialog";

export default function HomeAdmin() {
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [loading, setLoading] = useState(true);

    const [successDialogOpen, setSuccessDialogOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const [createItemDialogOpen, setCreateItemDialogOpen] = useState(false);

    const router = useRouter();


    const handleEditClick = async (updateProduct: ProductItem) => {
        // Handle edit action
        console.log("Edited product");
        console.log(updateProduct);
        try {
            // Make an API call to update the product
            const response = await itemService.updateItem(updateProduct);
      
            if (response === 200) {
              // Handle the success case
              setSuccessMessage('Product updated successfully.');
              setSuccessDialogOpen(true);
              fetchItemsData();
            } else {
              // Handle the error case
              console.error('Error updating product:');
            }
          } catch (error) {
            // Handle any network or API call errors
            console.error('API call error:', error);
          }
      };
    
    const handleDeleteClick = async (deleteProduct: ProductItem) => {
        // Handle delete action
        console.log("Delete product");
        console.log(deleteProduct);
        try {
            const item_id = deleteProduct.item_id? deleteProduct.item_id : 0;
            // Make an API call to delete the product
            const response = await itemService.deleteItem(item_id);
      
            if (response === 200) {
              // Handle the success case
              setSuccessMessage('Product deleted successfully.');
              setSuccessDialogOpen(true);
              fetchItemsData();
            } else {
              // Handle the error case
              console.error('Error deleting product');
            }
          } catch (error) {
            // Handle any network or API call errors
            console.error('API call error:', error);
        }
    };
    const handleCloseSuccessDialog = () => {
        setSuccessDialogOpen(false);
      };

    const handleSignoutClick = async () => {
    try {
        // Make an API call to sign out
        const response = await authService.signOut();

        if (response == 200) {
            // Handle the success case
            setSuccessMessage('You have been successfully signed out.');
            setSuccessDialogOpen(true);
            router.push('/home');
            router.reload();
        // You may also navigate the user to a sign-in page or perform other actions
        } else {
        // Handle the error case
            console.error('Error signing out:');
        }
    } catch (error) {
        // Handle any network or API call errors
        console.error('API call error:', error);
    }
    };
    const handleCreateItem = async (newItem: ProductItem) => {
        try {
          // Make an API call to create a new item
          const response = await itemService.createItem(newItem);
    
          if (response == 200) {
            // Handle the success case
            setSuccessMessage('Item created successfully.');
            setSuccessDialogOpen(true);
            // Refresh the product data
            setLoading(true);
            fetchItemsData();
            setLoading(false);
          } else {
            // Handle the error case
            console.error('Error creating item:');
          }
        } catch (error) {
          // Handle any network or API call errors
          console.error('API call error:', error);
        }
      };

    async function fetchItemsData() {
        const res = await itemService.getAllItems();
        if (res) {
          setProducts(res);
        }
        // }else {
        //   alert('Error loading products :(');
        // }
      }
    useEffect(() => {
        fetchItemsData();
        setLoading(false);
      }, []);

    if(loading){
        return (
            <div
              style={{
                position: "absolute",
                top: "calc((100% - 8rem) / 2)",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <LoadingHourglass />
            </div>
          );
    }
    return (
        <div>
            <SignoutButton>
                <Button variant="contained" color="primary" onClick={handleSignoutClick}>
                    Signout
                </Button>
            </SignoutButton>
            <CreateItemButton>
                <Button variant="contained" color="primary" onClick={() => setCreateItemDialogOpen(true)}>
                    Create Item
                </Button>
            </CreateItemButton>
            <ProductTable 
            products={products} onEditClick={handleEditClick} onDeleteClick={handleDeleteClick}
          />
          <SuccessProductDialog
            open={successDialogOpen}
            onClose={handleCloseSuccessDialog}
            message={successMessage}
            />
          <CreateItemDialog
            open={createItemDialogOpen}
            onClose={() => setCreateItemDialogOpen(false)}
            onCreate={handleCreateItem}
            />
        </div>
    )
}