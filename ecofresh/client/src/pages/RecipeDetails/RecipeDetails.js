import React from 'react'
//import { Container } from './UploadRecipe.style'//
import Navbar from '../../components/Navbar/NavUser'
import { FooterContainer } from '../../components/Footer/FooterContainer'
import {useLocation} from 'react-router-dom';
import {Container, FlexContainer, ContentContainer, ImageIngredientsContainer, Directions,
    ImageContainer, IngredientsContainer} from './RecipeDetails.style';
import AppButton from '../../components/Button/Button';

function RecipeDetails() {
    const location = useLocation();
    console.log(location);

    const {costPerMeal, cuisine, description, ingredients, mealType, ratings, recipeName, s3URL, submittedBy} = location.state;
    const ingredientsArray = ingredients.split(",");
    const descriptionArray = description.split('.');
    
    return (
        <Container>
            <Navbar />
            <ContentContainer>
                <FlexContainer>
                    <ImageIngredientsContainer>
                        <ImageContainer>

                        <img src={s3URL} alt="Food!" height="256px" width="256px" />
                       
                        </ImageContainer>
                        <IngredientsContainer>
                            <ul>
                                {
                                    ingredientsArray.map(ingredient => (
                                        <li>{ingredient}</li>
                                    ))
                                }
                            </ul>
                          
                        </IngredientsContainer> 
                    </ImageIngredientsContainer>
                    <Directions>
                        <h1>{recipeName}</h1>
                        <div>{mealType}</div>
                        <div>{cuisine}</div>
                        <div>Directions</div>
                        <div>
                        <ul>
                                {
                                    descriptionArray.map(ingredient => (
                                        <li>{ingredient}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>{costPerMeal}</div>
                        <AppButton color="secondary">Add to cart</AppButton>


                    </Directions>
                </FlexContainer>
            </ContentContainer>
            <FooterContainer />
        </Container>    
    )
}

export default RecipeDetails