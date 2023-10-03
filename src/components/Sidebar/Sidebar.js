import React, { useEffect, useState } from 'react';
import classes from './Sidebar.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { GiModernCity } from 'react-icons/gi';
import { FiMap,FiSettings} from 'react-icons/fi';
import { NavBtn } from './navBtn';



const Sidebar = props => {
    const [NavOptions] = useState([
        { name: 'Dashboard', route: '/Dashboard',icon:<RxDashboard size={30}/> },
        { name: 'City', route: '/City',icon:<GiModernCity size={30}/> },
        { name: 'Map', route: '/Map',icon:<FiMap size={30}/> },
        { name: 'Setting', route: '/Setting',icon:<FiSettings size={30}/> },
        
    ]);

    const [clickedItem, setClickedItem] = useState(window.location.pathname);

    useEffect(() => {
        setClickedItem(window.location.pathname)
    }, [window.location.pathname])

    const [path, setPath] = useState('')
    let drawerClasses = [classes.side_drawer];
    console.log(props.sidebar, "=================");
    if (props.sidebar) {
        drawerClasses.push(classes.open)

    }

    const history = useHistory();

    return (

        <nav className={drawerClasses.join(' ')} >
            <ul>
                {
                    NavOptions.map((item, index) => {
                        return (
                            <li key={item.name} onClick={props.handleToggleSidebar}>
                                <NavBtn
                                    setClickedItem={setClickedItem}
                                    clickedItemName={clickedItem}
                                    name={item.icon}
                                    path={item.route}
                                />
                            </li>)
                    })
                }

            </ul>

        </nav>
    )
}


export default Sidebar