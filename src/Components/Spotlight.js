import React from 'react'
import styled from 'styled-components';
import tefunlog from "../Assets/Images/Tefun-logo.svg"
import media from "../Assets/Images/poster.svg"
import Mainimg from "../Assets/Images/spotmain.jpeg"
import Arrowimage from "../Assets/Images/arrow.svg"
import App from "../Assets/Images/grey-app-play.svg"
import Play from "../Assets/Images/playstore.svg"

function Spotlight() {
  return (
    <Spotlightcontainer className='spotlight'>
        <Spotlightwrapper>
            <Leftcontainer>
                <Tefunlogocontainer>
                    <Tefun src={tefunlog} alt="TefunLogo"  />
                </Tefunlogocontainer>
                <Tefunheading>Technology Fundamental Program</Tefunheading>
                <Tefuntitle>
                    കേരളത്തിലെ<Span> 20 ലക്ഷം </Span>സ്കൂൾ വിദ്യാർത്ഥികൾക്ക് സൗജന്യമായി ടെക്ക്നോളജി പഠിക്കാം!
                </Tefuntitle>
                <Tefundescription>
                    ടാൽറോപ്പിന്റെ OTT കമ്യൂണിറ്റി പ്ലാറ്റ്ഫോമായ 'യായ്'-ലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ.
                    <br/>
                    Tefun-ലൂടെ ടെക്ക്നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ 'yiaai' മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.
                </Tefundescription>
                <Tefunmediacontainer>
                    <Tefunmedia src={media}  alt="MediaImage" />
                </Tefunmediacontainer>
                <Buttoncontainer>
                    <Joinbutton>Join for free</Joinbutton>
                    <Registerbuttoncontainer>
                        <Registerbutton>Register school</Registerbutton>
                    </Registerbuttoncontainer>
                </Buttoncontainer>
            </Leftcontainer>
            <Rightcontainer>
                <Maincontainer>
                    <Mainimagecontainer>
                        <Mainimage src={Mainimg} alt="Spotlightimage"/>
                    </Mainimagecontainer>
                    <Arrow src={Arrowimage}  alt="Arrowimage" />
                </Maincontainer>
                    
                <Appbox>
                    <Appcontainer>
                        <Appstore src={App} alt="Appstoreimage" />
                    </Appcontainer>
                    <Playcontainer>
                        <Googlestore src={Play} alt="Googlestoreimage" />
                    </Playcontainer>
                </Appbox>
            </Rightcontainer>
        </Spotlightwrapper>
    </Spotlightcontainer>
  )
}
export default Spotlight

const Spotlightcontainer = styled.section`
   padding:130px 0 80px 0;
   position:relative;
`;

const Spotlightwrapper = styled.div`
   width:95%;
   margin:0 auto;
   border-radius: 35px;
   overflow: hidden;
   background-color: rgb(243, 249, 235);
   background-image:url("https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/28-01-2022/lines-bg.svg");
   background-repeat:no-repeat;
   background-size:75%;
   padding:5% 50px;
   display:flex;
   justify-content:space-between;
`;
const Leftcontainer = styled.div`
    width:45%;
`;
const Tefunlogocontainer =styled.div`
   margin-bottom: 20px;
`;
const Tefun = styled.img`
   display:block;
`;
const Tefunheading = styled.h4`
    font-size: 24px;
    font-family: gorditamedium;
    margin-bottom: 20px;
`;
const Tefuntitle = styled.h3`
    font-size: 24px;
    font-family: EGGIndulekhaUni;
    font-weight: 800;
    max-width: 100%;
    margin-bottom: 30px;
`;
const Span = styled.span`
    font-size: 24px;
    font-family: EGGIndulekhaUni;
    font-weight: 800;
    color:#4ea870;
`;
const Tefundescription = styled.p`
    font-size: 18px;
    font-family:gorditaregular;
    color: rgb(84, 84, 84);
    width:90%;
    line-height:1.3em;
    margin-bottom:40px;
`;
const Tefunmediacontainer = styled.div`
    margin-bottom: 25px;
    width: 80%;
`;
const Tefunmedia = styled.img`
   display: block;
   width:100%;
`;
const Buttoncontainer = styled.div`
    display: flex;
    align-items:center;
    margin-top:30px;
`;
const Joinbutton = styled.button`
    display: block;
    cursor: pointer;
    font-size:20px;
    border-radius:10px;
    border:none;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    color: #fff;
    margin-right: 20px;
    padding: 24px 63px;
    background-size: 200%;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    &:hover{
    background-position: 100% 0;
    /* moz-transition: all .4s ease-in-out; */
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    }
`;
const Registerbuttoncontainer = styled.div`
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 51%, rgb(99, 187, 76) 100%);
    background-size: 200%;
    padding: 2px;
    width: 242px;
    height: 70px;
    border-radius: 10px
`;
const Registerbutton = styled.button`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(15, 167, 111);
    font-family:gorditamedium;
    font-size: 18px;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px;
`;
const Rightcontainer = styled.div`
    width:53%;
`;
const Maincontainer = styled.div`
   position:relative;
`;
const Mainimagecontainer = styled.div`
    border-radius:10px;
    transform: rotate(2deg);
    overflow:hidden;
`;
const Mainimage = styled.img`
    display:block;
    width:100%;
    border-radius:30px;
`;
const Arrow = styled.img`
    position: absolute;
    top: 339px;
    left: -90px;
    width: 25%;
    z-index:3;
`;
const Appbox = styled.div`
    float: right;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 140px;
`;
const Appcontainer = styled.div`
    margin-right: 10px;
    width: 170px;
    display: block;
`;
const Appstore = styled.img`
     display: block;
     width:100%;
`;
const Playcontainer = styled.div`
    margin-right:0;
    width: 170px;
    display: block;
`;
const Googlestore = styled.img`
   display:block;
   width:100%;
`;
  