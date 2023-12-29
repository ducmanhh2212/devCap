import React, {memo, useState} from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineUser, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu, AiOutlinePhone } from 'react-icons/ai'
import { formatter } from '../../Utils/formatter';


function ComponentHeader(props) {

    const [isShowProduct, setShowProduct] = useState(false);

    const [menus] = useState([
        {
            name: "Home",
            path: "",
        },
        {
            name: "Product",

            path: "/product",
        },
        {
            name: "Brand",
            path: "",
            isShowSubMenu: false,
            child: [
                {
                    name: "Xiaomi",
                    path: "",
                },
                {
                    name: "Iphone",
                    path: "",
                },
                {
                    name: "Samsung",
                    path: "",
                },
                {
                    name: "Vivo",
                    path: "",
                },
                {
                    name: "Oppo",
                    path: "",
                },
               
            ]
        },
        {
            name: "Cart",
            path: "/cart",
        },
        {
            name: "Contact",
            path: "/contact",
        },
        {
            name: "About",
            path: "/about",
        },

    ]);

    return (<>
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className='col-6 header_top_left'>
                        <ul>
                            <li><AiOutlineMail />team2@gmail.com</li>
                            <li>Free ship to {formatter(30000)}</li>
                        </ul>
                    </div>
                    <div className='col-6 header_top_right'>
                        <ul>
                            <Link to={""} >
                                <li><AiOutlineFacebook /></li>
                            </Link>
                            <Link to={""}>
                                <li><AiOutlineInstagram /></li>
                            </Link>
                            <Link to={""}>
                                <li><AiOutlineTwitter /></li>
                            </Link>
                            <Link to={""}>
                                <li><AiOutlineLinkedin /></li>
                            </Link>
                            <Link to={""}>
                                <li><AiOutlineUser /></li>
                            </Link>
                            <Link to="/login">SignIn</Link>
                            <Link to="/register">SignUp</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className='header_logo'>
                        <h1>Team 2 Shop</h1>
                    </div>
                </div>
                <div className="col-xl-6">
                    <nav className="header_menu">
                        <ul>
                            {
                                menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                        {
                                            menu.child && (
                                                <ul className="header_menu_dropdown">
                                                    {
                                                        menu.child.map((childItem, childKey) => (
                                                            <li key={`${menuKey}-${childKey}`}>
                                                                <Link to={childItem.path}>{childItem.name}</Link>
                                                            </li>

                                                        ))
                                                    }

                                                </ul>
                                            )
                                        }
                                    </li>
                                )
                                )
                            }

                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </>

        
    );
}

export default ComponentHeader;