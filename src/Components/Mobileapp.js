import React from 'react';
import styled from 'styled-components';

function Mobileapp() {
  return (
    <Mobilecontainer>
        <Mobilewrapper>
            <Leftsection>
                <Heading>ടാൽറോപിന്റെ OTT കമ്മ്യൂണിറ്റി പ്ലാറ്റ്‌ഫോമായ യായിലൂടെ തികച്ചും സൗജന്യമായി ഇപ്പോൾ തന്നെ പഠനം ആരംഭിക്കൂ</Heading>
                <Description><b>Tefun</b>-ലൂടെ ടെക്ക്‌നോളജിയുടെ വിസ്മയലോകം ഇനിയിതാ നിങ്ങളിലേക്ക്. ടെക്ക്-പഠനം ഇനി കൂടുതൽ എളുപ്പമാക്കാൻ <Span>yia.ai</Span> മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യൂ.</Description>
                <Buttoncontainer>
                    <Appbutton>
                        <App src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/31-01-2021/green-app-play.svg" alt="Appstore"/>
                    </Appbutton>
                    <Playbutton>
                        <Play src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/31-01-2021/green-and-play.svg" alt="Play" />
                    </Playbutton>
                </Buttoncontainer>
            </Leftsection>
            <Rightsection>
                <Imagecontainer>
                    <Image src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/04-02-22/mobile-app.png" alt="Mobile" />
                </Imagecontainer>
            </Rightsection>
        </Mobilewrapper>
    </Mobilecontainer>
  )
}
const Mobilecontainer = styled.section`
    padding:50px 0px;
`;
const Mobilewrapper = styled.div`
    margin:0 auto;
    width:90%;
    max-width:1280px;
    background-color: rgb(243, 249, 235);
    background-image: url("https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/28-01-2022/lines-bg.svg");
    background-position: left 10% top 0px;
    background-repeat: no-repeat;
    background-size: 700px;
    border-radius: 20px;
    padding: 80px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
`;
const Leftsection = styled.div`
    width:50%;
`;
const Heading = styled.h3`
    font-size: 20px;
    width: 100%;
    font-family:EGGIndulekha;
    margin-bottom: 35px;
    font-weight: 600;
    line-height: 1.5;
`;
const Description = styled.p`
    width: 90%;
    font-size: 20px;
    color: rgb(100, 101, 99);
    margin-bottom: 30px;
    line-height: 1.3em;
    font-family: gorditaregular;
`;
const Span = styled.span`

`;
const Buttoncontainer = styled.div`
    display: flex;
    width: 80%;
    -webkit-box-align: center;
    align-items: center;
`;
const Appbutton = styled.button`
    display: block;
    margin-right: 10px;
    width: 150px;
    cursor: pointer;
`;
const App = styled.img`
    display: block;
    width: 100%;
`;
const Playbutton = styled.button`
    display: block;
    margin-right:0px;
    width: 150px; 
    cursor:pointer;
`;
const Play = styled.img`
    display: block;
    width: 100%;
`;
const Rightsection = styled.div`
    width:50%;
`;
const Imagecontainer = styled.div`
   position: absolute;
    top:35px;
`;
const Image = styled.img`
   display: block;
   width:100%;
`;

export default Mobileapp