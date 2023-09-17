import { useState } from 'react';
import {Root, Content, Words} from './productCardStyles';
import { Card, CardContent, Typography } from '@mui/material';
import { ProductCardProps } from '../types';



export default function ProductCard(props : ProductCardProps) {
    const 
    {item_id,
        name,
        description,
        price,
        quantity} = props.product;
  
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  
    return (
      <div>
        <Root>
            <Card
            onClick={handleClickOpen}
            style={{
                height: '540px',
                backgroundColor: '#FFFFFF',
                color: '#033F63',
            }}
            >
                <Content>
                <Words>
                <CardContent style={{ height: '400px' }}>
                <Typography gutterBottom variant="h4" component="h2" noWrap>
                    {name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    ${Number.isInteger(price) ? price : price}
                </Typography>
                <Typography
                    style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    height: '73px',
                    }}
                >
                    {description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    ${Number.isInteger(quantity) ? quantity : quantity}
                </Typography>
                </CardContent>
                </Words>
                </Content>
            </Card>
        </Root>
        {/*open && (
          <ProductPopup
            //callback
            parentCallback={handleClose}
            product={product}
            images={images}
          />
        )*/}
      </div>
    );
  }