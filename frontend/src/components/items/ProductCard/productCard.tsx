import { useState } from 'react';
import {Root, Content, Words} from './productCardStyles';
import { Button, Card, CardContent, Typography } from '@mui/material';
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
      <Root>
      <Card
        elevation={3}
        onClick={handleClickOpen}
        style={{
          height: '100%',
          backgroundColor: '#F3F4F6', // Background color
          color: '#333', // Text color
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Price: ${Number.isInteger(price) ? price : price}
          </Typography>
          <Typography variant="h6" component="p">
            Quantity: {Number.isInteger(quantity) ? quantity : quantity}
          </Typography>
        </CardContent>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Details
          </Button>
      </Card>
      {/* Add your product details popup here */}
    </Root>
    );
  }