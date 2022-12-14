import Link from 'next/link'
import { Button, Container, Nav, Navbar, NavDropdown, Offcanvas, Image } from 'react-bootstrap'

/**
 * Navbar: BsPrefixRefForwardingComponent<"nav", NavbarProps>
 * @returns NavbarComponent: () => JSX.Element
 */
const NavbarComponent = () => {
  const expand = 'lg'
  return (
    <>
      <Navbar key={expand} bg="white" expand={expand}>
        <Container fluid>
          <Navbar.Brand as={Link} href='/ojii3/home'>

            <Image
              alt="icon"
              src="/selfmade-icon.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ borderRadius: '50%' }}
            />

            {' '}OJII3
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link as={Link} href='/ojii3/home'>
                  Home
                </Nav.Link>
                <NavDropdown
                  title="Works"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.ItemText className='text-info'>Website</NavDropdown.ItemText>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} href='/ojii3/nextjs-gh-pages'>Next.js × GitHub Pages</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href='/ojii3/tetris'>Tetris</NavDropdown.Item>
                  <NavDropdown.ItemText />
                  <NavDropdown.ItemText className='text-info'>Chrome Extensions</NavDropdown.ItemText>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} href='/ojii3/chrome-form-character-counter'>Form Character Counter</NavDropdown.Item>
                  <NavDropdown.ItemText />
                  <NavDropdown.ItemText className='text-info'>Bot</NavDropdown.ItemText>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} href='/ojii3/ichimon-itto-bot'>一問一答bot</NavDropdown.Item>
                  <NavDropdown.ItemText />
                </NavDropdown>
                <NavDropdown
                  title="Info"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item as='a' href="https://github.com/ojii3" target='_blank'>
                    <Image fluid width={32} alt='github icon' src='/GitHub.png' />{' '}
                    GitHub
                  </NavDropdown.Item>
                  <NavDropdown.Item as='a' href="https://qiita.com/ojii3" target='_blank'>
                    <Image fluid width={32} alt='qiita icon' src='/Qiita.png' />{' '}
                    Qiita
                  </NavDropdown.Item>
                  {/*
                  <NavDropdown.Item onClick={() => alert("I can't tell you my twitter! Sorry")}>
                    <Image fluid width={32} alt='twitter icon' src='/Twitter.svg' />
                    Twitter
                  </NavDropdown.Item>
  */}
                </NavDropdown>
              </Nav>
              {/* 
            <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
              <Button variant="outline-success">Search</Button>
              </Form>*/
              }
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
      <hr className='mx-lg-3 mb-3 mt-1' style={{ borderBottom: 'solid 1px #ccc' }} />
    </>
  )
}

export default NavbarComponent;