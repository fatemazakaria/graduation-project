import Search from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

export default function SearshBar() {

	const [input,setInput]=useState("")
  return (
    <>
      <FormControl sx={{mb: "50px"}} variant="outlined" fullWidth hiddenLabel>
        <OutlinedInput
		  placeholder="ابحث عن شيخك ...."
          type="text"
			 value={input}
			 onChange={(e)=>{setInput(e.target.value)}}
          startAdornment={
            <InputAdornment position="start">
              <Search style={{fill: "rgba(68, 68, 68, 1)", fontSize: "30px"}} />
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
}
