import React, { useState } from 'react'
import styled from 'styled-components';
import img1 from "../Assets/Images/Newtech/img1.jpg";
import img2 from "../Assets/Images/Newtech/img2.jpg";
import img3 from "../Assets/Images/Newtech/img3.jpg";
import img4 from "../Assets/Images/Newtech/img4.jpg";
import img5 from "../Assets/Images/Newtech/img5.jpg";
import img6 from "../Assets/Images/Newtech/img6.jpg";
import img7 from "../Assets/Images/Newtech/img7.jpg";
import img8 from "../Assets/Images/Newtech/img8.jpg";


function Newtech() {
    const[list,setList] = useState([
        {
            id:1,
            img:img1,
            Name:"Artificial Intelligence",
            color:"rgb(227, 244, 230)"            
        },
        {
            id:2,
            img:img2,
            Name:"Robotics",
            color:"rgb(255, 248, 228)"              
        },{
            id:3,
            img:img3,
            Name:"Metaverse",
            color:"rgb(226, 249, 221)"
        },{
            id:4,
            img:img4,
            Name:"3D Printing",
            color:"rgb(239, 234, 250)"
        },{
           id:5,
           img:img5,
           Name:"Web 3.0",
           color:"rgb(255, 246, 237)" 
        },{
            id:6,
            img:img6,
            Name:"AR & VR",
            color:"rgb(235, 242, 250)"   
            
        },{
            id:7,
            img:img7,
            Name:"IoT",
            color:"rgb(227, 244, 230)"   

        },{
            id:8,
            img:img8,
            Name:"Driverless Cars",
            color:"rgb(249, 238, 251)"   
        }
    ])
    const renderitems = () =>{
        return list.map((items)=>(
             <Listitem style={{backgroundColor:items.color}}>
                 <Imagecontainer>
                     <Image src={items.img} alt="Items" />
                 </Imagecontainer>
                 <Name>{items.Name}</Name>
             </Listitem>
        ))
    }
  return (
    <Newtechcontainer>
        <Newtechcontainerwrapper>
            <Heading>
                <Title>പുതിയ ടെക്ക്നോളജികൾ മനസ്സിലാക്കാം</Title>
                <Subhead>ടെക്ക്-പഠനം വേറിട്ടതും, ക്രിയാത്മകവുമാക്കാൻ കഴിയുന്ന സിലബസ്</Subhead>
            </Heading>
            <Boxcontainer>
                <Boxlist>
                    {renderitems()}
                </Boxlist>
            </Boxcontainer>
        </Newtechcontainerwrapper>
    </Newtechcontainer>
  )
}
const Newtechcontainer = styled.section`
    text-align: center;
    padding: 50px 0px;
`;
const Newtechcontainerwrapper = styled.div`
    width:90%;
    margin:0 auto;
    max-width:1280px;
`;
const Heading = styled.div`

`;
const Title =  styled.h2`
    font-family:gorditamedium;
    font-size:30px;
    margin-bottom:30px;
    color: rgb(15,167,111);
    font-weight:600;
}
`;
const Subhead = styled.p`
    margin: 0px auto;
    max-width: 500px;
    font-size: 22px;
    font-family: gorditaregular;
`;
const Boxcontainer = styled.div`
    margin-top: 40px;
    width: 100%;
`;
const Boxlist = styled.ul`
    width: 85%;
    margin:0 auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
`; 
const Listitem = styled.li`
    width: calc(25% - 20px);
    border-radius: 10px;
    margin: 0px 10px 20px;
    padding: 15px;
    position: relative;
    &:last-child::after {
        position: absolute;
        content: "";
        width:100%;
        height:100%;
        background-image: url("https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/yiaai/05-02-2022/card.svg");
        right:-163px;
        bottom:-35%;
        background-repeat:no-repeat;
        background-size:contain;
    }
`;
const Imagecontainer = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
`;
const Image = styled.img`
    width:100%;
    height:100%;
    display:block;
    
`;
const Name = styled.span`
    display:block;
    font-size:18px;
    margin: 20px 0px 5px;
    font-family: gorditamedium;
`
export default Newtech