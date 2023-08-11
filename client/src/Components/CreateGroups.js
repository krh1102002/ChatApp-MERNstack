import React from 'react';
import { IconButton } from '@mui/material';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded'
const CreateGroups = () => {
    return (
        <div className="createGroup-container">
            <input placeholder='Enter Group Name' className='search-box' />
            <IconButton>
                <DoneOutlineRoundedIcon/>
            </IconButton>
        </div>
    );
};

export default CreateGroups;