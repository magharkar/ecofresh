import styled from 'styled-components'
import { withStyles } from '@mui/styles';
import { TextField } from '@mui/material';

const Container = styled.div`
  background: #fff;
  height: 100vh;
`;

const ContentContainer = styled.div`
    position: relative;
    display: flex;
`;

const Content = styled.div`
    width: calc(100vw - 240px );
`;

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        '& fieldset': {
          borderColor: 'red !important',
        },
        '&:hover fieldset': {
          borderColor: 'red !important',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'red !important',
        },
      },
      '& .MuiOutlinedInput-focused': {
        '& fieldset': {
          borderColor: 'red !important',
        },
        '&:hover fieldset': {
          borderColor: 'red !important',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'red !important',
        },
      },
    },
  })(TextField);

  const SearchBar = styled.div`
    height: 60px;
    margin: 24px;
    display: flex;
    justify-content: space-between;
`;

const FlexContainer = styled.div`
    display: flex;
    //height: calc(100vh - 68.5px)
    padding-bottom: 24px;
`;

const MainContent = styled.div`
`;

const RecipeContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    // gap: 24px;
    margin-left: 24px;
`;

export {Container, ContentContainer, Content, SearchBar, FlexContainer, MainContent,
RecipeContainer, CssTextField};
