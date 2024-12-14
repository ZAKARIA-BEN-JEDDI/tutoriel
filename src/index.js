import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//! REDUX 
// import App from './redux/App';
import { Provider } from 'react-redux';
import store from './redux/store';
// import ReduxForm from './redux/ReduxForm';

//! 
// import FormReducer from './useReducer/FormReducer';
// import NewForm from './useReducer/Form';
// import TooltipNodeDemo from './Tooltipe/Tooltipe';
// import FavoriteColor from './tuto/Form';
// import Counter from './tuto/Form';
// import Fruit from './Fruit/fruit';
// import Formulaire from './Formulaire/formulaire';
// import StoreListe from './practice/store/StoreList';
// import LanguageSwitcherParent from './LanguageSwitcher/LanguageSwitherParent';
// import MasterForm from './Formulaire/MasterFormulaire';
// import MyMasterFormulaire from './Formulaire/MyMasterFormulaire';
// import MonsterFormulaire from './Formulaire/MonsterFormulaire';
// import App from './Router/App';
// import Calculator from './practice/calculator/Calculator';
// import Todolist from './practice/todolist/todolist';
// import Usecallback from './usecallbackhook/usecallback'
// import UseMemoEffect from './useMemo/useMemo'
// import Spli from './spline/spline'
// import useReducerHook from './useReducer/useReducer';
// import ContactUs from './Email/EmailJs';
// import Email from './Email/Email';
// import Sign from './SignIn/Sign';
// import Timer from './timer/timer';
import Layout from './Router/Pages2/Layout';
import App2 from './Router/App2';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const players = ['Mbappe','Vini','Rodrygo','Diaz','Endrik'];
root.render(
  // <Provider store={store}>
  //   <App/>
  // </Provider>
  <React.StrictMode>
    {/* <ReduxForm/> */}
    {/* <FormReducer/> */}
    {/* <NewForm/> */}
    {/* <Timer/> */}
    {/* <Sign/> */}
    {/* <Email/> */}
    {/* <ContactUs/> */}
    {/* <App/> */}
    {/* <useReducerHook/> */}
    {/* <Spli/> */}
    {/* <UseMemoEffect/> */}
    {/* <Usecallback/> */}
    {/* <Todolist/> */}
    {/* <Calculator/> */}
    {/* <App/> */}
    {/* <MonsterFormulaire/> */}
    {/* <MyMasterFormulaire/> */}
    {/* <MasterForm/> */}
    {/* <LanguageSwitcherParent/> */}
    {/* <Formulaire /> */}
    {/* <StoreListe/> */}
    {/* <MasterState/> */}
    {/* <Fruit /> */}
    {/* <Counter /> */}
    <App2/>
    {/* <App /> */}
    {/* <First FirstName="ZAKARIA" Lastname="BEN JEDDI" /> */}
    {/* <Form  plc="name required" nameinput="test">Enter Your First Name  </Form> */}
    {/* <Player players = {players} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
