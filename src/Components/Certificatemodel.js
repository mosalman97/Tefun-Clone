import React from 'react'
import styled from 'styled-components';

function Certificatemodel() {
  return (
    <Certificatemodelcontainer>
        <CertificatemodelWrapper>
            <Leftsection>
                <Title>Certification</Title>
                <Description>പ്രോഗ്രാം പൂർത്തിയാക്കുന്ന എല്ലാ വിദ്യാർത്ഥികൾക്കും സ്കൂൾ ലോഗോയോടു കൂടിയ കംപ്ലീഷൻ സർട്ടിഫിക്കറ്റുകൾ.</Description>
                <Medal src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/28-01-2022/medal+.svg"  alt="Medal" />
            </Leftsection>
            <Rightsection>
                <Imagecontainer>
                    <Examplecertificateimage src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/31-01-2021/certificate.png"   alt="Certificate"/>
                    <Arrowimage src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/tefun/28-01-2022/arrow.svg"  alt="Arrow"/>
                </Imagecontainer>
            </Rightsection>
        </CertificatemodelWrapper>
    </Certificatemodelcontainer>
  )
}
const Certificatemodelcontainer = styled.section`
    padding:80px 0px;
`;
const CertificatemodelWrapper = styled.div`
    display: flex;
    position: relative;
    /* -webkit-box-align: center; */
    align-items: center;
    background-image: linear-gradient(to right, rgb(99, 187, 76) 0%, rgb(24, 152, 175) 100%);
    border-radius: 20px;
    min-height: 300px;
    margin:0 auto;
    width:90%;
    max-width:1280px;
`;
const Leftsection = styled.div`
    width:55%;
    padding-left:50px;

`;
const Title = styled.h3`
    color: rgb(255, 255, 255);
    font-size: 35px;
    font-family: gorditamedium;
`;
const Description = styled.p`
    width:80%;
    color:rgb(255, 255, 255);
    font-family: gorditaregular;
    font-size: 20px;
`;
const Medal = styled.img`
    display: block;
    position: absolute;
    top:0;
    width:3%;
`;
const Rightsection = styled.div`
    width: 45%;
    height: 100%;
`;
const Imagecontainer = styled.div`

`;
const Examplecertificateimage = styled.img`
    position: absolute;
    display: block;
    width: 550px;
    bottom: -63px;
    right: 7%;
`;
const Arrowimage = styled.img`
    display:block;
    position:absolute;
    bottom: -125px;
    left: 493px;
`;
export default Certificatemodel