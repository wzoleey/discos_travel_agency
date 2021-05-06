import React from 'react';
import Slide from "../Slide/Slide";
import IndexPageContent from "../IndexPageContent/IndexPageContent";
import Footer from "../Footer/Footer";


function IndexPage() {
	return (
		<div className="indexPage">
			<Slide />
			<IndexPageContent />
			<Footer />
		</div>
	)
}

export default IndexPage
