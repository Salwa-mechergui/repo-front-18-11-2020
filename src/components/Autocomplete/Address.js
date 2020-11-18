import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import './Address.css';
export default function Adress() {
  const [adresses, setadresses] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api-adresse.data.gouv.fr/search/?q=a&autocomplete=1&limit=20`
      )
      .then((res) => setadresses(res.data.features))
      .catch((err) => console.log(err));
  }, []);
    const handleChange = (e, v) => {
      console.log(v);
      axios
        .get(
          `https://api-adresse.data.gouv.fr/search/?q=${v}&autocomplete=1&limit=20`
        )
        .then((res) => setadresses(res.data.features))
        .catch((err) => console.log(err));
    };
  return (
    <div className="address-container">
      {console.log(adresses)}
      {adresses ? (
        <Autocomplete
          id="combo-box-demo"
          options={adresses}
          getOptionLabel={(option) => option.properties.label}
          onInput={(e, v) => {
            handleChange(e, e.target.value);
          }}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
        />
      ) : null}
    </div>
  );
}