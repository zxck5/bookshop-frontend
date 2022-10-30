import {useState,useEffect} from 'react';
import {Form} from "react-bootstrap";
import {Navigate} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import axios from "axios";



export default function () {
    const navigate = useNavigate();


    const [state, setState] = useState({
        email : "",
        city : "",
        street : "",
        zipcode : ""
    });


    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(state).map(key => {
            formData.append(key, state[key]);
        })
        axios.post("/members/new",formData)
            .then(res => {
                console.log(res);
                if (res.data == true) {
                    alert("registration success");
                    navigate("/");
                } else alert(res.data);
            }).catch(err => {
                alert(err);
            })

    }



    const setInput = (event) => {
        let id = event.target.id;
        let value = event.target.value;
        setState({...state, [id] : value })
    }


    return(
        <Form onSubmit={submitForm}>

            <br/><br/>
            <label>email
                <input id={"email"} type="text" placeholder="type your email" name={"email"} onChange={setInput}/>
            </label>
            <br/><br/>
            <label>city
                <input id={"city"} type="text" placeholder="type your city" name={"city"} onChange={setInput}/>
            </label>
            <br/><br/>

            <label>street
                <input id={"street"} type="text" placeholder="type your street" name={"street"} onChange={setInput}/>
            </label>
            <br/><br/>

            <label>zipcode:
                <input id={"zipcode"} type="text" placeholder="type your zipcode" name={"zipcode"} onChange={setInput}/>
            </label>

            <input type="submit" value={"submit"}/>

        </Form>
    )
}

