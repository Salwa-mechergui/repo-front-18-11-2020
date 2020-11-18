import React from 'react'
import TextField from '@material-ui/core/TextField';
import './Outlined.css';
  
export default function Outlined() {

    return (
        <div className="outlined-container">
            <form noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Ajouter des informations supplémentaires" variant="outlined" />
            </form>
        </div>
    )
}
