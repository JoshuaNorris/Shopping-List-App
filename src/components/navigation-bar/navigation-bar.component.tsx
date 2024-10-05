import { Fragment } from "react/jsx-runtime";
import './navigation-bar.styles.scss';
import { Outlet } from "react-router-dom";
import searchIcon from '../../assets/search-icon.svg';
import burgerIcon from '../../assets/burger-icon.svg';


export const NavigationBar = () => {
    return (
        <Fragment>
            <div className="navigation-container">
                <div className="logo-container">
                    <img src={burgerIcon} alt="" className="logo-icon"/>
                    <label className="logo-label">Recipe Finder</label>
                </div>
                <div className="search-box">
                    <button className="btn-search"><img src={searchIcon} /></button>
                    <input type="text" placeholder="Search..." className="input-search"/>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}