import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import {ProductListing, PaginationStyled} from "./productListingStyles";
import ProductCard from "../ProductCard/productCard";
import { ProductListingsProps } from "../types";

export default function ProductListings(props : ProductListingsProps) {
    const numListingsPerPage = 9;
    const [totalPages, setTotalPages] = useState<number>(1);
    const products = props.products;
    const [page, setPage] = useState(1);
 
    const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
      setPage(newPage);
      const yOffset = -120;
      const pdtListingsTop = document.getElementById('productListings');
      if(pdtListingsTop){
         const y = pdtListingsTop.getBoundingClientRect().top + window.scrollY + yOffset;
         window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
  
    //reset page back to 1 when products rerender
    useEffect(() => {
        setPage(1)
        setTotalPages(products && Math.ceil(products.length / numListingsPerPage));
    }, [products]);
  
  
    return (
      <div>
          {products && products.length > 0 && (<ProductListing
            id="productListings"
            data-aos-duration="300"
            data-aos="zoom-in-up"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}
          >
            {products &&
              products
                .slice(
                  (page - 1) * numListingsPerPage,
                  (page - 1) * numListingsPerPage + numListingsPerPage
                )
                .map((pdt) => (
                  <>
                    <ProductCard product={pdt} />
                  </>
                ))}
          </ProductListing>)}
        {products && products.length > numListingsPerPage && (<PaginationStyled>
          <Pagination
            count={products && Math.ceil(products.length / numListingsPerPage)}
            page={page}
            onChange={handlePageChange}
            style={{backgroundColor:"#D6F5DB" , alignSelf: 'center'}}
          />
        </PaginationStyled>)}
      </div>
    );
  }