import {Routes, Route} from "react-router-dom";
import Layout from './layout';
import MemberForm from './members/memberForm';
import MemberList from "./members/memberList";
import {Container , Row, Col} from 'react-bootstrap'
import BookForm from "./product/bookCreate";
import ItemList from "./product/itemList";
import ModifyForm from "./product/modifyBookForm";
import OrderCreate from "./orders/OrderCreate";
import Orders from './orders/orderList';
import UserItemList from './orders/userItemList';

function Router () {

    return (

                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route path={"members/new"} element={<MemberForm/>}/>
                        <Route path={"members"} element={<MemberList/>}/>
                        <Route path={"items/new"} element={<BookForm/>}/>
                        <Route path={"items"} element={<ItemList/>}/>
                        <Route path={"items/:id/edit"} element={<ModifyForm/>}/>
                        <Route path={"order/new"} element={<OrderCreate/>}/>
                        <Route path={"orders"} element={<Orders/>}/>
                        <Route path={"orders/items"} element={<UserItemList/>}/>
                    </Route>
                </Routes>



    )



}





export default Router;