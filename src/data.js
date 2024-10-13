import { About } from "./About";
import { Contact } from "./Contact";
import {Home} from "./Home";
import {MainBlock} from './MainBlock'
import { SearchBar } from "./Search";

const data = [
    {
        route:'/',
        exact:true,
        name:'Home',
        element:()=><Home/>
    },{
        route:'/mainblock',
        exact:true,
        name:'MainBlock',
        element:()=><MainBlock/>
    },{
        route:'/about',
        exact:true,
        name:'About',
        element:()=><About/>
    },{
        route:'/search',
        exact:true,
        name:'Search bar',
        element:()=><SearchBar/>
    },{
        route:'/contact',
        exact:true,
        name:'Contact',
        element:()=><Contact/>
    },
]

export default data