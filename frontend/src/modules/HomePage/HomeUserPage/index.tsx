import LoadingHourglass from "@/components/common/LoadingHourglass/LoadingHourglass";
import ProductListings from "@/components/items/ProductListing/productListing";
import { ProductItem } from "@/components/items/types";
import itemService from "@/services/item";
import { useEffect, useState } from "react";

export default function HomeUser() {
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [loading, setLoading] = useState(true);
    async function fetchData() {
        const res = await itemService.getAllItems();
        if (res) {
          setProducts(res);
        }
        // }else {
        //   alert('Error loading products :(');
        // }
      }
      useEffect(() => {
        fetchData();
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
            <ProductListings
            products={products}
          />
        </div>
    );

}
