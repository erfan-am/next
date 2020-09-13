import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    },
    marginTop: "100px"
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
      <form className={classes.form} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-name-input"
            label="Name"
            type="text"
            autoComplete="current-name"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-email"
            variant="outlined"
          />
        </div>
        <h2>
          if you have an account please got to{" "}
          <Link href="/auth/login">login</Link>{" "}
        </h2>
      </form>
  );
}
