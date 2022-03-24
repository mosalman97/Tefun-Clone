import React from "react";
import styled from "styled-components";
function Tefunprogram() {
    return (
        <Tefuncontainer>
            <Tefunwrapper>
                <Heading>
                    <Head>
                        വിദ്യാർത്ഥികൾക്ക് <span className="Tefun">Tefun</span>
                        <Span>പ്രോഗ്രാമിന്റെ ഭാഗമാകാം</Span>
                    </Head>
                </Heading>
                <Tefuncontent>
                    <Leftcontent>
                        <Itemcontainer>
                            <Item>
                                <Number>01</Number>
                                <Description>
                                    <b>Tefun</b>പ്രോഗ്രാം സ്കൂളിൽ ഉദ്ഘാടനം
                                    ചെയ്തതിനുശേഷം വിദ്യാർത്ഥികൾക്ക്<b>Tefun</b>
                                    -ൽ ജോയിൻ ചെയ്യാവുന്നതാണ്.
                                </Description>
                            </Item>
                            <Item>
                                <Number>02</Number>
                                <Description>
                                    <b>Talrop</b>-ന്റെ Web, Android, iOS
                                    പ്ലാറ്റ്ഫോമുകളിലൂടെ
                                    <Link href="https://yia.ai/">(yia.ai)</Link>
                                    ഓൺലൈനായി<br/><b>Tefun</b>പ്രോഗ്രാമിന്റെ ഭാഗമാകാം.
                                </Description>
                            </Item>
                            <Item>
                                <Number>03</Number>
                                <Description>
                                    വിദ്യാർത്ഥികളുടെ മൊബൈൽ നമ്പർ നൽകിയതിനുശേഷം
                                    പ്രൊഫൈൽ തിരഞ്ഞെടുത്ത്<b>Tefun</b> പ്രോഗ്രാം
                                    സ്റ്റാർട്ട് ചെയ്യാം.
                                </Description>
                            </Item>
                            <Item>
                                <Number>04</Number>
                                <Description>
                                    പ്രൊഫൈൽ ലഭ്യമല്ലെങ്കിൽ വിദ്യാർത്ഥികൾക്ക്
                                    സ്കൂൾ കോഡും ക്ലാസും ഡിവിഷനും നൽകി
                                    <b>Tefun</b> പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ
                                    സാധിക്കും.
                                </Description>
                            </Item>
                            <Item>
                                <Number>05</Number>
                                <Description>
                                    വിദ്യാർത്ഥികൾക്ക് Virtual Schooling-ലൂടെ
                                    ഇഷ്ടമുള്ള സമയത്ത് പഠിക്കാൻ സാധിക്കും.
                                </Description>
                            </Item>
                            <Item>
                                <Number>06</Number>
                                <Description>
                                    <b>Tefun</b>പ്രോഗ്രാമിന്റെ അവസാനഘട്ടമായി
                                    സ്കൂൾ നിശ്ചയിക്കുന്ന ദിവസങ്ങളിൽ ഓൺലൈൻ എക്സാം
                                    ഉണ്ടായിരിക്കുന്നതാണ്.
                                </Description>
                            </Item>
                            <Item>
                                <Number>07</Number>
                                <Description>
                                    <b>Tefun</b> പ്രോഗ്രാം വിജയകരമായി
                                    പൂർത്തീകരിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ
                                    മുഖേന ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നു.
                                </Description>
                            </Item>
                        </Itemcontainer>
                    </Leftcontent>
                    <Rightcontent>
                        <Imagecontainer>
                            <Image
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/28-01-2022/join-img.png"
                                alt="Join-hero"
                            />
                        </Imagecontainer>
                    </Rightcontent>
                </Tefuncontent>
            </Tefunwrapper>
        </Tefuncontainer>
    );
}
const Tefuncontainer = styled.section`
    padding: 50px 0px;
`;
const Tefunwrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 1280px;
`;
const Heading = styled.div``;
const Head = styled.h3`
    font-size: 20px;
    font-family: gorditamedium;
    color: rgb(15, 167, 111);
    font-weight: bold;
`;
const Span = styled.span`
    display: block;
    font-weight: bold;
`;
const Tefuncontent = styled.div`
    margin-top: 30px;
    position: relative;
    display: flex;
    justify-content: space-between;
`;
const Leftcontent = styled.div`
    width: 52%;
    padding-left: 3%;
`;
const Itemcontainer = styled.ul`
    list-style: none;
    width:100%;
`;
const Item = styled.li`
    margin-bottom: 20px;
    padding: 15px 15px 15px 35px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 80%;
    height: 130px;
    border-radius: 20px;
    position: relative;
    background: rgb(254, 247, 236) !important;

    &:last-child small::after{
        border:0;
        height:0;
        width:0;
    }
`;
const Description = styled.h4`
    font-size:18px;
    font-family: gorditaregular;
    line-height: 1.4em;
`;
const Link = styled.a``;
const Number = styled.small`
    height: 60px;
    width: 60px;
    background-color: rgb(255,255,255);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 3px solid rgb(15,167,111);
    position: absolute;
    border-radius: 50%;
    left: -45px;
    top: 45px;
    &::after{
        content: "";
        width: 150px;
        transform: rotate(90deg);
        position: absolute;
        border-top: 2px dashed rgb(15, 167, 111);
        top: 100px;
        left: -90%;
        z-index: -1;
    }
`;
const Rightcontent = styled.div`
    width: 40%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`;
const Imagecontainer = styled.div`
    position: sticky;
    top: 113px;
`;
const Image = styled.img`
    display: block;
    width: 90%;
`;
export default Tefunprogram;
