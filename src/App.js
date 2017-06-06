import React, { Component } from 'react';
import './App.css';
import LemonNav from './lemon-nav';
import MainPictureCarousel from './lemon-main-Carousel'
import IndividualStatus from './individualStatus'
import BlogSummary from './blogSummary';
import { Grid,Col,Row} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    	<div>
    	    <LemonNav/>
    	    <Grid >
    	    	<Row>
	    	    	<Col md={6}>
	    	    		<h1>欢乐时光</h1>
	    	    		<MainPictureCarousel/>
	    	    	</Col>
	    	    	<Col md={6}>
	    	    		<h1>最新动态</h1>
	    	    		<IndividualStatus/>
	    	    	</Col>
    	    	</Row>
    	    	<Row>
    	    		<Col>
	    	    		<BlogSummary/>
	    	    	</Col>
    	    	</Row>
    	    </Grid>
      		
    	</div>

    );
  }
}

export default App;
