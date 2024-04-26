import {Container,Nav,Navbar} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'


const Header =()=>{

const navigate = useNavigate()

const loginHandler=()=>{
  navigate('/login')
}
const signUpHandler=()=>{
  navigate('/signup')
}


    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
          <Button className='btn-sm mx-3' variant="light" onClick={loginHandler}>Login</Button>
          <Button className='btn-sm mx-3' variant="light" onClick={signUpHandler}>Sign Up</Button>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header;