import React from "react";
import styled from "styled-components";
function Programdetails() {
    return (
        <ProgramContainer>
            <Programwrapper>
                <Titlecontainer>
                    <Titlehead>
                        <Titletop>സ്കൂളുകൾക്ക് <span className="Tefun">Tefun</span></Titletop>
                        <Title>പ്രോഗ്രാമിന്റെ ഭാഗമാകാം</Title>
                    </Titlehead>
                </Titlecontainer>
                <Datacontainer>
                    <Itemcontainer>
                        <Itembox>
                            <Imagecontainer>
                                <Iconcontainer>
                                    <Image src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/04-02-2022/phone-g-call.svg" alt="whatssapp"/>
                                </Iconcontainer>
                            </Imagecontainer>
                            <Detailscontainer>
                                <b>Tefun</b> പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് <b>Talrop</b>-ന്റെ ടീമുമായി <a className="mobile" href="https://wa.me/+918589998744">858 999 8744</a> എന്ന നമ്പറിൽ കോൺടാക്ട് ചെയ്യാവുന്നതാണ്.
                            </Detailscontainer>
                        </Itembox>
                        <Itembox>
                            <Imagecontainer style={{backgroundColor:"rgb(251, 184, 44)"}}>
                                <Iconcontainer style={{border:"2px solid rgb(251, 184, 44)"}}>
                                    <Image src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/28-01-2022/scissors.svg" alt="Scissors"/>
                                </Iconcontainer>
                            </Imagecontainer>
                            <Detailscontainer>
                                സ്കൂളിന്റെ ലോഗോയും ആവശ്യ വിവരങ്ങളും നൽകുക.
                            </Detailscontainer>
                        </Itembox>
                        <Itembox>
                            <Imagecontainer style={{backgroundColor:"rgb(255, 91, 47)"}}>
                                <Iconcontainer style={{border:"2px solid rgb(255, 91, 47)"}}>
                                    <Image src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/04-02-2022/certificate-r.svg" alt="Certificate"/>
                                </Iconcontainer>
                            </Imagecontainer>
                            <Detailscontainer>
                                സ്കൂൾ നിശ്ചയിക്കുന്ന ഉദ്ഘാടന ദിനത്തിൽ ആവശ്യമായ Inauguration Video ഡിജിറ്റലായി <b>Talrop</b> നൽകുന്നതാണ്. 
                            </Detailscontainer>
                        </Itembox>
                        <Itembox>
                            <Imagecontainer style={{backgroundColor:"rgb(178, 87, 255)"}}>
                                <Iconcontainer style={{border:"2px solid rgb(178, 87, 255)"}}>
                                    <Image src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/05-02-2022/devices.svg" alt="Devices"/>
                                </Iconcontainer>
                            </Imagecontainer>
                            <Detailscontainer>
                                Mobile, Tab, Laptop, Desktop Computer എന്നിവയിൽ ഏതെങ്കിലും ഡിവൈസുകൾ ഉപയോഗിച്ച് Talrop ലഭ്യമാക്കുന്ന Web, Android, iOS പ്ലാറ്റ്ഫോമുകളിലൂടെ കുട്ടികൾക്ക് പഠിക്കുവാൻ സാധിക്കും.
                            </Detailscontainer>
                        </Itembox>
                        <Itembox>
                            <Imagecontainer style={{backgroundColor:"rgb(76, 154, 254)"}}>
                                <Iconcontainer style={{boder:"2px solid rgb(76, 154, 254)"}}>
                                    <Image src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/05-02-2022/certificate.svg" alt="Certificate"/>
                                </Iconcontainer>
                            </Imagecontainer>
                            <Detailscontainer>
                                വിജയകരമായി പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നു.
                            </Detailscontainer>
                        </Itembox>
                    </Itemcontainer>
                    <Joinbutton>Join for free</Joinbutton> 
                </Datacontainer>
            </Programwrapper>
        </ProgramContainer>
    );
}
const ProgramContainer = styled.section`
    padding:50px 0px;
`;
const Programwrapper = styled.div`
    margin:0 auto;
    max-width:1280px;
    width:90%;
`;
const Titlecontainer = styled.div`
    text-align:center;
    margin-bottom:80px;
`;
const Titlehead = styled.h3`
    font-size:25px;
    font-family:gorditamedium;
    
`;
const Titletop = styled.span`
    color: rgb(15, 167, 111);
    display:block;
    font-weight:600;
`;
const Title = styled.span`
    color: rgb(15, 167, 111);
    font-weight:600;
`;
const Datacontainer = styled.div`
    width: 100%;
    text-align: center;
    height: 100%;
`
const Itemcontainer = styled.div`
    display:flex;
    align-items: flex-start;
    -webkit-box-pack:center;
    justify-content:center;
    flex-wrap: wrap;
    margin: 0px auto 35px;
    position: relative;
    gap:30px;
`;
const Itembox = styled.div`
    width: 30%;
    position: relative;
    margin-bottom: 30px;
    text-align: center;
`;
const Imagecontainer = styled.div`
    width: 150px;
    height: 150px;
    margin: 0px auto 50px;
    border-radius: 30px;
    transform: rotate(45deg);
    position: relative;
    background:rgb(0, 154, 102);
`;
const Detailscontainer = styled.div`
    margin: 0px auto;
    font-family: gorditaregular;
    font-size: 18px;
`;
const Iconcontainer = styled.span`
    position: absolute;
    bottom: 25%;
    right: -20%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(0, 154, 102) 
`;
const Image = styled.img`
    display: block;
    width: 40%;
    transform: rotate(-45deg);
`;
const Joinbutton = styled.button`
    cursor: pointer;
    margin: 0px auto;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-family: gorditamedium;
    width: 200px;
    height: 60px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 10px;
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
export default Programdetails;
