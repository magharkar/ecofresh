import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Container, FilterText} from './Filter.style';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '../Checkbox/Checkbox';
import Drawer from '../Drawer/Drawer';

function Filter() {
    return (
        <Container>

            <FilterText>Filters</FilterText>
              <Drawer />
                {/* <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Food Type</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Meat" />
                            <FormControlLabel control={<Checkbox />} label="Vegan" />
                        </FormGroup>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                        <Typography>Cuisine</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Chinese" />
                    <FormControlLabel control={<Checkbox />} label="Indian" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Italian" />
                    <FormControlLabel control={<Checkbox />} label="Mediterranean" />
                  </FormGroup>
                  </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Dietary</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Protein-rich" />
                <FormControlLabel control={<Checkbox />} label="High-fibre" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Low-fat" />
            </FormGroup>
        </AccordionDetails>
      </Accordion> */}
</Container>
     
    );
  }
  
  export default Filter;