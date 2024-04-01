import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GiFarmTractor } from "react-icons/gi";
import { useAuth } from '../../context/auth';
import { toast } from 'react-hot-toast';
import SearchInput from '../form/SearchInput';
import useCategory from '../../Hooks/useCategory';
import { useCart } from '../../context/cart';
import { Badge } from 'antd';

const Header = () => {
    const [auth, setAuth] = useAuth();
    const categories = useCategory();
    const [cart] = useCart();
    const handleLogout = () => {
        let answer;
        if (cart?.length > 0) {
            answer = window.prompt('Are you sure you want to logout without buying the items in your cart?')
        }
        if (!answer) return;
        setAuth({
            ...auth,
            user: null,
            token: ''
        })
        localStorage.removeItem('auth');
        toast.success('Logout Successful')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand tw-text-green-600"><GiFarmTractor /> AgroConnect</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <SearchInput />
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/analysis" className="nav-link" >Analysis</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={'/categories'}>All Categories</Link></li>
                                    {categories?.map((c) => (
                                        <li key={c.slug}><Link className="dropdown-item" to={`/category/${c.slug}`}>{c.name}</Link></li>

                                    ))}
                                </ul>

                            </li>
                            {!auth.user ? (<>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link" >Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link" >Login</NavLink>
                                </li>
                            </>) :
                                (<>
                                    <li className="nav-item dropdown">
                                        <NavLink
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            style={{ border: "none" }}
                                        >
                                            {auth?.user?.name}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink
                                                    to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                                    className="dropdown-item"
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    onClick={handleLogout}
                                                    to="/login"
                                                    className="dropdown-item"
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>)

                            }
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link" >Cart <Badge count={cart?.length}></Badge></NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    Language
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="https://translate.google.com/">Google Translate</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Header;
