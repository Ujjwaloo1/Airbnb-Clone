import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    return(
        <div className='header'>
            <SpeedInsights/>
            <Link to='/'>
            <img
                className="header__icon"
                src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                alt=""
            />
            </Link>
            <div className='header__center'>
                <input type="text"/>
                <SearchIcon/>
            </div>

            <div className=' header__right'>
            <Button onClick={() => history.push('/search')} variant='outline'>Become a host</Button>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Home
