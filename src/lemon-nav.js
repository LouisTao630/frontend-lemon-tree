import React , {Component} from 'react';
import logo from './logo.svg';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';

class LemonNav extends Component{
  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <logo/>
            <a href="#">Lemon Tree</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullLeft>
        <NavItem eventKey={1} href="#">首页</NavItem>
        <NavItem eventKey={2} href="#">关于我</NavItem>
        <NavItem eventKey={3} href="#">我的工作</NavItem>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={1} title="兴趣爱好" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1}>编程</MenuItem>
          <MenuItem eventKey={1.2}>阅读</MenuItem>
          <MenuItem eventKey={1.3}>摄影</MenuItem>
          <MenuItem eventKey={1.4}>旅游</MenuItem>
        </NavDropdown>
        <NavItem eventKey={2} href="#">Blog</NavItem>
        <NavItem eventKey={3} href="#">联系我</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}
export default LemonNav;
