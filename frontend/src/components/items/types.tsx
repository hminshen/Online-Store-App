export interface ProductItem {
    item_id: number,
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