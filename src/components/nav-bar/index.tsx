import styled from 'styled-components';
import Button from './Button';

const Navbar: any = styled.div`
    background-color: #404040;
    display: flex;
    flex-direction: row;
    height: 50px;
    padding: 5px;
    color: #FFFFFF;
    align-items: center;
`;

Navbar.Button = Button;

export default Navbar;