import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import {ProductListing, PaginationStyled} from "./productListingStyles";
import ProductCard from "../ProductCard/productCard";
import { ProductListingsProps } from "../types";

export default function ProductListings(props : ProductListingsProps) {
    const numListingsPerPage = 15;
    const [totalPages, setTotalPages] = useState<number>(1);
    const products = props.products;
    const [page, setPage] = useState(1);
    const [isReady, setReady] = useState<boolean>(false);
    

    const switchColumns = (index: number) => {
        if (isReady) {
          setReady(false);
          //setActiveTabIndex(index);
          setPage(1);
        }
      };
  
    const handlePageChange = (event, newPage) => {
      setPage(newPage);
  
      //https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
      const yOffset = -120;
      const pdtListingsTop = document.getElementById('productListings');
      const y =
        pdtListingsTop.getBoundingClientRect().top + window.scrollY + yOffset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
      // let pdtListingsTop = document.getElementById('productListings');
      // pdtListingsTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // document.getElementById('productListings').scrollTop -= 100;
    };
  
    //reset page back to 1 when products rerender
    useEffect(() => {
        setPage(1)
        setTotalPages(products && Math.ceil(products.length / numListingsPerPage));
    }, [products]);
  
  
    return (
      <div>
          <ProductListing
            id="productListings"
            data-aos-duration="300"
            data-aos="zoom-in-up"
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
          </ProductListing>
        <PaginationStyled>
          <Pagination
            count={products && Math.ceil(products.length / numListingsPerPage)}
            page={page}
            onChange={handlePageChange}
            style={{backgroundColor:"#D6F5DB"}}
          />
        </PaginationStyled>
      </div>
    );
  }