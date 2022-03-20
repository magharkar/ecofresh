import { Button } from "@mui/material";
import React from "react";

function AppButton(props) {
    return(
        <Button color={props.color}>
            {props.children}
        </Button>
      
        
    )
}

export default AppButton;