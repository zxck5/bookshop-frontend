import {useState,useEffect} from 'react';
import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Select from "react-select";




export default function () {
    const navigate = useNavigate();

    const [memberList,setMemberList] = useState([]);
    const[productList, setProductList] = useState([]);
    const [state, setState] = useState({
        member_id : '',
        product_id : [],
        quantity : ''
    });

    const [price , setPrice] = useState('');
    const [selectedOptions, setSelectedOptions] = useState();
    let optionList = [];


    useEffect(() => {
        //memberList
        //productList
        axios.get("/members")
            .then(res => setMemberList(res.data))

        axios.get("/items")
            .then(res => setProductList(res.data))



    },[])


    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        selectedOptions.map(s => {
            state.product_id = [...state.product_id, s.value]
        })
        console.log(state.product_id);

        Object.keys(state).map(key => {
            formData.append(key, state[key]);
        })
        axios.post("/order/new",formData)
            .then(res => {
                console.log(res);
                if (res.data == true) {
                    alert("order created");
                    navigate("/")


                } else alert(res.data);
            }).catch(err => {
            alert(err);
        })

    }

    const setInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setState({...state, [name] : value })
    }

    const handleSelect = (data) => {
        setSelectedOptions(data);
    }


    return(
        <Form onSubmit={submitForm}>

            <br/><br/>
            <Form.Select size="sm" name={"member_id"} onChange={setInput}>
                <option>select member</option>
                {
                    memberList.map((m,index)=> (
                        <option key = {index} value={m.id}>
                            {m.email }
                        </option>
                    ))
                }
            </Form.Select>


            <br/><br/>
            {/*<Form.Select size="sm" name={"product_id"} onChange={setInput}>*/}
            {/*    <option>select product</option>*/}
            {/*    {*/}
            {/*        productList.map((p,index)=> (*/}
            {/*            <option key = {index} value={p.id}>*/}
            {/*                {p.name}*/}
            {/*            </option>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Form.Select>*/}
            {productList.map(p => {
                optionList = [...optionList, {
                    value : p.id,
                    label : p.name
                }]

                if (p.id == state.product_id) {
                    return <div> stock quantity : {p.stockQuantity}</div>
                }
            })}
            <Select
                options={optionList}
                placeholder={"Select"}
                value={selectedOptions}
                onChange={handleSelect}
                isSearchable={true}
                isMulti
            />




            <br/><br/>

            <label>Quantity: {' '}
                <input id={"quantity"} type="text" placeholder="type quantity" name={"quantity"} onChange={setInput}/>
            </label>
            <br/><br/>

            <input type="submit" value={"submit"}/>

        </Form>
    )
}

