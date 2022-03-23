import React,{useState} from 'react'
import styled from 'styled-components';
import img1 from "../Assets/Images/actors/jaya.jpg"
import img2 from "../Assets/Images/actors/antony.jpg"
import img3 from "../Assets/Images/actors/ravi.jpg"
import img4 from "../Assets/Images/actors/nirajana.jpg"
import img5 from "../Assets/Images/actors/bibin.jpg"
import img6 from "../Assets/Images/actors/sandra.jpg"
import img7 from "../Assets/Images/actors/vishnu.jpg"
import img8 from "../Assets/Images/actors/raju.jpg"
import img9 from "../Assets/Images/actors/gowari.jpg"
import img10 from "../Assets/Images/actors/hareesh.jpg"
function Wishsection() {
    const[Actors,setActors] = useState([
        {
           Id:1,
           img:img1,
           name:"Jayasurya",
           role:"Actor"
        },{
            Id:2,
            img:img2,
            name:"Antony Varghese",
            role:"Actor"
        },
        {
            Id:3,
            img:img3,
            name:"Major Ravi",
            role:"Actor"
        }, {
            Id:4,
            img:img4,
            name:"Niranjana Anoop",
            role:"Actress"
        },
        {
            Id:5,
            img:img5,
            name:"Bibin George",
            role:"Script writer & Actor"
        }, {
            Id:6,
            img:img6,
            name:"Sandra Thomas",
            role:"Producer & Actress"
        },{
            Id:7,
            img:img7,
            name:"Vishnu Unnikrishnan",
            role:"Actor & Screen writer"
        },{
            Id:8,
            img:img8,
            name:"Maniyanpilla Raju",
            role:"Actor"
        },
        {
            Id:9,
            img:img9,
            name:"Gowri Nandha",
            role:"Actress",
        },{
            Id:10,
            img:img10,
            name:"Hareesh Kanaran",
            role:"Actor",
        }
    ])
    const renderitems = () =>{
        return Actors.map((actor)=>(
            <Listitem className='listitem'>
                <Picturecontainer>
                    <Blur></Blur>
                    <Picture src={actor.img} alt="Profile" />
                </Picturecontainer>
                <Namecontainer  >
                    <Name>{actor.name}</Name>
                    <Role>{actor.role}</Role>
                    <Video className='button-video'>
                        <Arrowimage>
                            <img src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/21-01-2022/play-black.svg" alt="Arrow" />
                        </Arrowimage>
                        Watch Story
                    </Video>
                </Namecontainer>
           </Listitem>
        ))
        }
  return (
    <Wishcontainer>
        <WishcontainerWrapper>
            <Titlebox>
                <Span>TEFUN-ന്</Span>
                <br/>
                <Small>ആശംസകളോടെ</Small>
            </Titlebox>
            <Profilelist>
                {renderitems()}
            </Profilelist>
        </WishcontainerWrapper>
    </Wishcontainer>
  )
}
const Wishcontainer = styled.section`
    padding: 0px 8%;
    position: relative;
`;
const WishcontainerWrapper = styled.div`
    margin:0 auto;
    max-width:1280px;
    width:90%;
`;
const Titlebox = styled.h2`
    color: rgb(45,45,45);
    text-align: center;
    margin-bottom: 50px;
    /* font-size: 25px; */
    font-family:gorditamedium;
    font-size: 22px;

`;
const Span = styled.span`
  color:rgb(15, 167, 111);
`;
const Small = styled.small`

`;
const Profilelist = styled.ul`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px -10px;
    flex-wrap: wrap;
    position: relative;
`;
const Listitem = styled.li`
    width: calc(25% - 20px);
    margin: 0px 10px 30px;
    border-radius: 10px;
    overflow: hidden;
    position:relative;
`;
const Picturecontainer = styled.div`
    position: relative;
    cursor: pointer;
`;
const Blur = styled.div`
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(rgba(248, 248, 248, 0) 0%, rgb(0, 0, 0) 100%);
    opacity: 0.4;
`;
const Picture = styled.img`
    display:block;
    width:100%;
`;
const Namecontainer = styled.div`
    position:absolute;
    z-index: 1;
    bottom:0;
    left:0;
    right:0;
`;
const Name =  styled.h4`
    color: rgb(255, 255, 255);
    font-size: 22px;
    font-family:gorditamedium;
    text-align:center;
    text-transform:capitalize;
`;
const Role = styled.p`
    font-size: 15px;
    color: rgb(255, 255, 255);
    text-align:center;
    margin-bottom:10px;
`;
const Video = styled.button`
    background-color: rgb(255,255,255);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-family:gorditamedium;
    text-transform: uppercase;
    border-radius: 6px;
    cursor: pointer;
    /* padding: 12px 0; */
    padding:0;
    opacity:0;
    width: 70%;
    margin: 20px auto;
`;

const Arrowimage = styled.div`
   margin-right:5px;
   display:flex;
   justify-content:center;
   align-items:center;
   transform: translateY(-3px);

`;

export default Wishsection