import React from 'react';
import Navbar  from 'react-bootstrap/lib/Navbar';
import Nav  from 'react-bootstrap/lib/Nav';
import NavItem  from 'react-bootstrap/lib/NavItem';
import MenuItem  from 'react-bootstrap/lib/MenuItem';
import NavDropdown  from 'react-bootstrap/lib/NavDropdown';
import FormGroup  from 'react-bootstrap/lib/FormGroup';
import FormControl  from 'react-bootstrap/lib/FormControl';
import Button  from 'react-bootstrap/lib/Button';

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">BingBlog</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">HTML&CSS</NavItem>
                            <NavItem eventKey={2} href="#">Mysql</NavItem>
                            <NavItem eventKey={2} href="#">Linux</NavItem>
                            <NavDropdown eventKey={3} title="Javascript" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>React</MenuItem>
                                <MenuItem eventKey={3.2}>Webpack</MenuItem>
                                <MenuItem eventKey={3.3}>Angular</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Babel</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                            {' '}
                            <Button type="submit">Submit</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}