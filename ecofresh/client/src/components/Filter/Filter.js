import React, {useState, useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Container, FilterText, ButtonContainer} from './Filter.style';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '../Checkbox/Checkbox';
import AppButton from '../Button/Button';
import MaterialUIForm from 'react-material-ui-form'
import JssProvider from 'react-jss/lib/JssProvider';

function Filter(props) {
    const { filterData } = props;
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [clearFilters, setClearFilters] = useState(false);
    const handleSubmit = (values, pristineValues) => {
      console.log(values, pristineValues);
    }

    const applyFilters = () => {
      props.getSelectedFilters(selectedFilters);
    }

    const clearAllFilters = () => {
      setSelectedFilters([]);
      props.clearAllFilters();
    }

    useEffect(() => {
      // Update the document title using the browser API
      console.log("HERE")
    });

    function handleCheckbox(event, isChecked, value) {
      const selection = event.target.name;
      let currentlySelectedFilters = selectedFilters;
      if(currentlySelectedFilters.includes(selection)) {
        const id = currentlySelectedFilters.indexOf(selection);
        currentlySelectedFilters.splice(id, 1);
      } else {
        currentlySelectedFilters.push(selection);
      }
      
      setSelectedFilters(currentlySelectedFilters);
    }
    console.log(selectedFilters);
    return (
        <Container>
            <FilterText>Filters</FilterText>
            <JssProvider>
                <MaterialUIForm onSubmit={handleSubmit} onValuesChange={handleSubmit}>
                    {
                      filterData.map(data => {
                        console.log(data.key);
                        return (
                          <Accordion sx={{backgroundColor: "#355c43"}} defaultExpanded>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              sx={{color: "#FDAD11"}}
                            >
                              <Typography 
                                  style={{textTransform:"capitalize"}}
                              >
                                  {data.filterKey === "mealType" ? "Meal Type" : data.filterKey}
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{color: "#FFF"}}  
                            >
                                <FormGroup>
                                  {
                                    data.filterValues.map(value => (
                                        <FormControlLabel 
                                            control={<Checkbox 
                                                        onChange={(event) => handleCheckbox(event)} 
                                                        category={data.filterKey}
                                                        name={value}
                                                        //checked={selectedFilters === [] && false}
                                                    />} 
                                            label={value} />
                                    ))
                                  }
                                </FormGroup>
                            </AccordionDetails>
                          </Accordion>
                        )
                      })
                    }
                    <ButtonContainer>
                        <AppButton color="secondary" type="submit" onClick={applyFilters}>Apply</AppButton>
                        <AppButton type="submit" onClick={clearAllFilters}>Clear All</AppButton>
                    </ButtonContainer>
                </MaterialUIForm>
            </JssProvider>
</Container>
     
    );
  }
  
  export default Filter;