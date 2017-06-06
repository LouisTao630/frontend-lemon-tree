import React , {Component} from 'react';
import { Media,Image} from 'react-bootstrap';

class IndividualStatus extends Component{
	render(){
		return (
			<div>
				<Media>
				    <Media.Left>
				    	<Image width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
				    </Media.Left>
				   	<Media.Body>
				        <Media.Heading>2017/6/6 晴</Media.Heading>
				        <p>我终于想清楚右边应该放置什么东东了。一个个人的动态信息。</p>
				    </Media.Body>
				</Media>    
				<Media>    
				    <Media.Left>
				    	<Image width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
				    </Media.Left>
				   	<Media.Body>
				        <Media.Heading>2017/6/6 晴</Media.Heading>
				        <p>是不是应该发布博客的时候自动的更新到这里呢？我得好好想想</p>
				    </Media.Body>
				</Media>    
				<Media>    
				    <Media.Left>
				    	<Image width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
				    </Media.Left>
				   	<Media.Body>
				        <Media.Heading>2017/6/7 晴</Media.Heading>
				        <p>我的天，可不可以把微信朋友圈的内容直接读取过来呢？</p>
				    </Media.Body>
				<Media>    
				</Media>
					<Media.Left>
				    	<Image width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
				    </Media.Left>   
				   	<Media.Body>
				        <Media.Heading>2017/6/7 晴</Media.Heading>
				        <p>左侧的照片应该放置一些个人的臭屁照片，可是我没有，要多拍拍</p>
				    </Media.Body>					    			    			    
				</Media>
			</div>
			);
	}
}

export default IndividualStatus;
