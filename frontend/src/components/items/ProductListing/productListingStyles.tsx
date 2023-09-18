import { styled  } from '@mui/system';

export const ProductListing = styled('div')({
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  });

export const PaginationStyled = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    paddingBottom:"30px",
})

export const NoProductsTitle = styled('div')({
  textAlign: 'center',
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#555', 
  marginTop: '40px',
  padding: '20px',
  backgroundColor: '#f2f2f2', // Background color
  borderRadius: '10px', // Rounded corners
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for depth
  border: '1px solid #ddd', // Light border
  transition: 'background-color 0.3s', // For Smooth background color transition on hover
  
  '&:hover': {
    backgroundColor: '#ddd', // Background color change on hover
    cursor: 'pointer', // Show a pointer cursor on hover
  },
});

