import React , {Component} from 'react';
import { Carousel,Image} from 'react-bootstrap';


class MainPictureCarousel extends Component{
  render(){
    return(
		<Carousel indicators={false}>
			<Carousel.Item animateIn={true}>
			  <Image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496601740888&di=0c6ee3a9826e35994acd0600c044a382&imgtype=0&src=http%3A%2F%2Ftupian.36992.com%2F2013%2F05%2F07%2F6.jpg" responsive/>
			  <Carousel.Caption>
			    <h3>First slide label</h3>
			    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			  </Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item animateIn={true}>
			  <Image alt="900x500" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496601740888&di=0c6ee3a9826e35994acd0600c044a382&imgtype=0&src=http%3A%2F%2Ftupian.36992.com%2F2013%2F05%2F07%2F6.jpg" rounded/>
			  <Carousel.Caption>
			    <h3>Second slide label</h3>
			    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			  </Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item animateIn={true}>
			  <Image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496601740888&di=0c6ee3a9826e35994acd0600c044a382&imgtype=0&src=http%3A%2F%2Ftupian.36992.com%2F2013%2F05%2F07%2F6.jpg" rounded/>
			  <Carousel.Caption>
			    <h3>Third slide label</h3>
			    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			  </Carousel.Caption>
			</Carousel.Item>
		</Carousel>
    );
  }
}
export default MainPictureCarousel;