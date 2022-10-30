import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import Router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";


function App() {
    const [message, setMessage] = useState("");


    useEffect(()=> {
        axios.get("/home")
            .then((res)=>{

                setMessage(res.data);
            })
            .catch(e => {
                alert("error")
            })
    },[]);




    return (
        <BrowserRouter>
            <div className={'bg-light'} style={{backgroundSize : "cover",height: '700'}}>

                <div className={'d-flex justify-content-center'}>

                    <Link to={"/"}><span style={{border:1, borderWidth:1, margin: 10, fontWeight: "bold", fontSize: "30px"}}>{message}</span></Link>

                </div>

                <Router/>
            </div>

        </BrowserRouter>

    );
}

export default App;
