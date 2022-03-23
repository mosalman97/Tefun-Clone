import React,{useEffect,useState} from "react";
import styled from 'styled-components';
import logo from '../Assets/Images/logo.svg'

function Header(){
    const[head,setHead]=useState(false);

    const changeBackground = () => {
      if(window.scrollY >=100){
        setHead(true)
      }else{
        setHead(false);
      }
    };
      useEffect(() =>{
        window.addEventListener('scroll',changeBackground);
    
      })
    return(
        <Headercontainer className={`${head && "activebackground"}`}>
            <Headerwrapper>
                <Leftsection>
                    <Head>
                        <Link>
                            <Logo src={logo} alt="Logo" />
                        </Link>
                    </Head>
                </Leftsection>
                <Rightsection>
                    <Joinbutton>Join Now</Joinbutton>
                </Rightsection>
            </Headerwrapper>
        </Headercontainer>
    )
}
export default Header
const Headercontainer = styled.section`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    padding:10px 0;
    z-index:1;
`;
const Headerwrapper = styled.div`
    width:85%;
    margin:0 auto;
    display: flex;
    justify-content:space-between;
    align-items: center;

`;
const Leftsection = styled.div`
   
`;
const Head = styled.h1`
   
`;
const Link = styled.a`
    cursor: pointer;
`;
const Logo = styled.img`
   display:block;
   width:90%;
`;
const Rightsection = styled.div`

`;
const Joinbutton = styled.button`
    display: block;
    cursor: pointer;
    color:#fff;
    font-size:16px;
    padding:15px 30px;
    font-family: gorditamedium;
    border-radius:5px;
    background-size: 200%;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    &:hover{
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
`;