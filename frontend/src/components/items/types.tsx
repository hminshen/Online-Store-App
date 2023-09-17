export interface ProductItem {
    item_id?: number,
    name: string,
    description: string,
    price: number,
    quantity: number,
}

export interface ProductListingsProps {
    products: ProductItem[];
  }

export interface ProductCardProps {
    product: ProductItem;
  }

export interface ProductTableProps {
    products: ProductItem[];
    onEditClick: (product: ProductItem) => void;
    onDeleteClick: (product: ProductItem) => void;
}
export interface CreateItemDialogProps {
  open: boolean;
  onClose: () => void;
  onCreate: (newItem: ProductItem) => void;
}

export interface EditProductDialogProps {
    open: boolean;
    product: ProductItem;
    onClose: () => void;
    onConfirm: (updatedProduct: ProductItem) => void;
  }

export interface DeleteProductDialogProps {
    open: boolean;
    product: ProductItem;
    onClose: () => void;
    onConfirm: (product: ProductItem) => void;
  }

export interface SuccessProductDialogProps {
    open: boolean;
    onClose: () => void;
    message: string;
  }