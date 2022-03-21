import React from 'react';
import {RecipeCard, RecipeName, Title, Description} from './RecipeCard.style';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';

function RecipeCards(props) {
    console.log(props.data);
    const {costPerServing, description, imageSrc, ingredients, name} = props.data;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
      };

    return (
        <React.Fragment>
            <RecipeCard>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea onClick={handleClickOpen}>
                        <CardMedia
                            component="img"
                            height="250"
                            width="250"
                            image={imageSrc}
                            alt="Food!"
                            style={{
                                width: "250px"
                            }}
                        />
                        <CardContent width="250" style={{padding: 0}}>
                            <RecipeName className="title">
                                    {name}
                            </RecipeName>
                            <RecipeName variant="body2" color="text.secondary">
                                {description}
                            </RecipeName>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{backgroundColor: 'white', justifyContent: "center", paddingTop: "16px"}}>
                        <Button size="small" style={{color: '#582e44', borderColor: "#582e44"}} variant="outlined">
                            Add to cart
                        </Button>
                    </CardActions>
                </Card>
            </RecipeCard>   

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle  style={{backgroundColor: "antiquewhite"}}>{name}</DialogTitle>
                <DialogContent  style={{backgroundColor: "antiquewhite"}}>
                    <Title>Description</Title>
                    <Description>{description}</Description>
                    <Title>Ingredients</Title>
                    <Description>
                        <ul>
                        {
                            ingredients.map(ingredient => (
                                <li>{ingredient}</li>
                            ))
                        }
                        </ul>
                        
                    </Description>
                    <Title>Cost per serving</Title>
                    <Description>{costPerServing}</Description>
                    <Button style={{color: '#582e44', borderColor: "#582e44"}} variant="outlined">Add to cart</Button>
                </DialogContent>
            </Dialog>
        </React.Fragment>
     
    );
  }
  
  export default RecipeCards;