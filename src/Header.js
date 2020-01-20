import React from 'react';
import { Component } from 'react';

const Header = () => (

    <header className ='header'>
      	<section className='title-section'>
      		<section className='title pink-main outlined'>
				<h1>sy<span className="green-offset">n</span>tax library</h1>
      		</section>
			<section className="color-toggle-section">
				<button className="color-toggle-button button">dark mode</button>
			</section>
      	</section>
		<section className="search-section">
			<p>try out a term</p>
			<section className="search-bar">
				<form action="">
					<input type="text" placeholder="Search.." name="search" />
						<button type="submit">Search</button>
				</form>
			</section>
		</section>
      </header>
);

export default Header;