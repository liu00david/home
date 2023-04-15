import styled from 'styled-components'
import { Link } from 'react-scroll'

const lightPurple = '#D0C8E9'
const darkPurple = '#330C49'
const offWhite = '#F5F5E9'
const oppOffWhite = '#161615'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? lightPurple : darkPurple )
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 42px' : '12px 24px')};
    color: ${({dark}) => (dark ? '#000' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: feComponentTransfer;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-weight: 400;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? offWhite : oppOffWhite)}
    }
`

export const ButtonTransparent = styled(Link)`
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.1);
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: feComponentTransfer;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-weight: 400;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#def' : '#000')}
    }
`