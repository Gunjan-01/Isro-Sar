import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,

// } from 'reactstrap';

const Example = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  return (
    // <div>
    //   <Navbar color="light" light expand="md">
    //     <NavbarBrand href="/">reactstrap</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="mr-auto" navbar>
    //         <NavItem>
    //           <NavLink href="#">Components</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="#">GitHub</NavLink>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </div>
    <div>
      <nav className="navbar navbar-inverse">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">ISRO</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home<span class="sr-only">(current)</span></a></li>
        <li><a href="#">Application</a></li>
        
      </ul>
      
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Example;