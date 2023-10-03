import React from 'react'
import "./Widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
let data;
console.log(type)
//temporary
const amaunt=100;
const diff =20;

switch(type){
  case "user":
    data={
      title : "USERS",
      isMoney:false,
      link:"see all users",
      icon:<PersonOutlineOutlinedIcon className='icon' style={{
        color:"crimson",
        backgroundColor:"rgba(255,0,0,0.2)",
      }}/>
    };
    break;
    case "order":
    data={
      title : "ORDERS",
      isMoney:false,
      link:"view all ordes",
      icon:<ShoppingCartOutlinedIcon className='icon' style={{
        color:"goldenrod",
        backgroundColor:"rgba(218,165,32,0.2)"
      }}/>
    };
    break;
    case "erarning":
    data={
      title : "EARNING",
      isMoney:true,
      link:"view net erarning",
      icon:<MonetizationOnOutlinedIcon className='icon' style={{
        color:"green",
        backgroundColor:"rgba(0,128,0,0.2)"
      }}/>
    };
    break;
    case "balance":
    data={
      title : "BALANCE",
      isMoney:true,
      link:"see details",
      icon:<AccountBalanceOutlinedIcon className='icon' style={{
        color:"purple",
        backgroundColor:"rgba(128,0,128,0.2)"

      }}/>
    };
    


}



  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
              {data.isMoney && "$"} {amaunt}
            </span>
            <span className="link">{data.link}</span>

        </div>
        <div className="right">
            <div className="parsenteg positive">
                <KeyboardArrowUpIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget