import React from 'react';
//import { Image } from 'react-bootstrap';
import classes from './Toolbar.module.scss';

import { FaLocationDot } from 'react-icons/fa6';
import { BiSearch } from 'react-icons/bi';
import Search from '../Search/Search';

const Toolbar = (props) => 
{
	
	return(
	<header className={classes.toolbar}>
		<nav className={classes.toolbar_navigation}>
			<FaLocationDot fill='#00B4CC' size='15' />{"   "} Pune, India
			<div className={classes.toolbar_searchBox}>		
      {/* <input type="text" className={classes.search_input}  placeholder="Enter Location..."/> */}
	  <Search onSearchChange={props.onSearchChange}/>
      {/* <button type="submit"className={classes.search_btn} >
       <BiSearch/>
     </button>		 */}
			</div>
			<div className={classes.spacer}/>
			<div className={classes.toolbar_navigation_items}>
				<ul>
					<li></li>
					<li></li>
				</ul>
				
			</div>
		</nav>
	</header>
)};

export default Toolbar;