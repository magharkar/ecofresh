import React from 'react'
import { Container, ContentContainer, Content, CssTextField, SearchBar as SearchBarContainer,
FlexContainer, MainContent, RecipeContainer } from './UserHomepage.style'
import Navbar from '../../components/Navbar/NavUser'
import { FooterContainer } from '../../components/Footer/FooterContainer'
import LandingPage from '../LandingPage/LandingPage'
import Filter from '../../components/Filter/Filter'
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import RecipeCards from '../../components/RecipeCard/RecipeCard';
import fvLogo from '../../assets/pictures/french-onion.jpg';
import spicyLogo from '../../assets/pictures/spicy-chicken.jpg';
import porkChopLogo from '../../assets/pictures/pork-chop.jpg';
import lasagnaSoupLogo from '../../assets/pictures/lasagna-soup.webp';
import friedDumplingLogo from '../../assets/pictures/fried-dumpling.jpg';
import thaiChickenLogo from '../../assets/pictures/thai-chicken.jpg';


const recipeCardData = [
    {
      id: 1,
      name: 'French Onion Soup',
      imageSrc: fvLogo,
      costPerServing: 8.99,
      description: "Click on card for more details. Lorem ipsum dolor sit amet",
      ingredients: ["Onion", "sdasf", "sdfsdf", "sdfsff", "sdfsdfdsf"],
    },
    {
      id: 2,
      name: 'Spicy Honey Butter Fried Chicken',
      imageSrc: spicyLogo,
      costPerServing: 11.99,
      description: "Click on card for more details. Lorem ipsum dolor sit amet",
      ingredients: ["Spices", "Honey", "Butter", "Chicken", "sdfsdfdsf"],
    },
    {
      id: 3,
      name: 'Vietnamese Grilled Pork Chops',
      imageSrc:  porkChopLogo,
      costPerServing: 12.99,
      description: "Click on card for more details. Lorem ipsum dolor sit amet",
      ingredients: ["Pork", "sdasdasd", "asdasdasd", "sdfasdasd"],
    },
    {
      id: 4,
      name: 'Lasagna Soup',
      imageSrc:  lasagnaSoupLogo,
      costPerServing: 7.99,
      description: "Click on card for more details. Lorem ipsum dolor sit amet",
      ingredients: ["Cheese", "sdasdasd", "asdasdasd", "sdfasdasd"],
    },
    {
      id: 5,
      name: 'Cheesy Fried Dumplings',
      imageSrc:  friedDumplingLogo,
      costPerServing: 9.99,
      description: "Click on card for more details. Lorem ipsum dolor sit amet",
      ingredients: ["Cheese", "sdasdasd", "asdasdasd", "sdfasdasd"],
    },
    {
      id: 6,
      name: 'Thai Turmeric Chicken Rice',
      imageSrc:  thaiChickenLogo,
      costPerServing: 12.99,
      description: "Click on card for more details. Lorem ipsum dolor sit amet",
      ingredients: ["Cheese", "sdasdasd", "asdasdasd", "sdfasdasd"],
    }
  ]

function UserHomepage() {
    const [sortBy, setSortKey] = React.useState('');

    const handleChange = (event) => {
      setSortKey(event.target.value);
    };

  return (
    <Container>
      <Navbar />
      <ContentContainer>
            <Filter />
            <Content>
            <SearchBarContainer>
              <CssTextField
                style={{width: "40%", borderColor: '#582e44'}}
                label="What would you like to eat?"
                InputProps={{
                  style: { background: "#fff" },
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                InputLabelProps={{
                  style: {color: "#582e44"}
                }}
              />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sortBy}
          onChange={handleChange}
          label="Sort By"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Price - low to high</MenuItem>
          <MenuItem value={20}>Price - high to low</MenuItem>
        </Select>
      </FormControl>
            </SearchBarContainer>
            <FlexContainer>
                <MainContent>
                  <RecipeContainer>
                  {
                    recipeCardData.map(cardData => (
                      <RecipeCards data={cardData} />
                    ))
                  }
                  </RecipeContainer>
                </MainContent>
              </FlexContainer>
            </Content>
      </ContentContainer>
      <FooterContainer />
    </Container>    
  )
}

export default UserHomepage