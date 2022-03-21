import styled from 'styled-components';

const RecipeCard = styled.div`
    margin-right: 24px; 
    margin-top: 24px;
    display: flex;
`;
const ImageContainer = styled.img`
    width: 250px;
    height: 250px;
    margin: 24px;
`;
const Content = styled.div``;

const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const RecipeName = styled.div`
    background: white;
    width: 250px;
    padding-top: 16px;
    font-family:  "Roboto","Helvetica","Arial","sans-serif";
    font-size: 14px;
    word-wrap: break-all;
    &.title {
        font-weight: bold;
    }
`;

const Title = styled.div`
    font-weight: bold;
    margin-bottom: 4px;
`;

const Description = styled.div`
    margin-bottom: 8px;
`;


export {RecipeCard, ImageContainer, Content, LeftColumn, RightColumn, RecipeName, Title, Description};