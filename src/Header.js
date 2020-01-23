import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => (

    <header className ='header'>
      	<section className='title-section'>
      		<section className='title '>
				<h1><span className="pink-main">sy<span className="green-main">n</span>ta<span className="yellow-main">x </span>l<span className="yellow-main">i</span>b<span className="green-main">ra</span>ry</span></h1>
      		</section>
			<section className="color-toggle-section">
				<button className="color-toggle-button">dark mode</button>
			</section>
      	</section>
		<section className="search-section">
			<p>try out a term</p>
			<section className="search-bar">
				<form action="">
					<input type="text" placeholder="Search.." name="search" />
						<button className="search-icon-to-text" type="submit"><span><FontAwesomeIcon icon={faSearch} size="sm" /></span></button>
				</form>
			</section>
		</section>
      </header>
);

export default Header;