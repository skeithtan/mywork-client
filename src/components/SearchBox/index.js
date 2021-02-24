import React from "react";
import {Input, InputAdornment} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

export function SearchBox({searchKeyword, setSearchKeyword, placeholder}) {
    const handleChange = event => {
        setSearchKeyword(event.target.value);
    };

    return (
        <Input
            disableUnderline
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon/>
                </InputAdornment>
            }
            placeholder={placeholder}
            value={searchKeyword}
            onChange={handleChange}
        />
    );
}
