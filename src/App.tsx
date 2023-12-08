import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import PageNotFound from './pages/pageNotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/*' element = {<PageNotFound />} />
      <Route path = '/' element = {<Home />} />

      {/* <Route path = '/lists' element = {<Lists />}>
        <Route path = '/lists/top-ten-quantity' element = {<TopTenQuantity />}/>
        <Route path = '/lists/top-five-value' element = {<TopFiveValue />}/>
        <Route path = '/lists/products-most-consumed' element = {<ProdMostCons />}/>
        <Route path = '/lists/services-most-consumed' element = {<ServMostCons />}/>
        <Route path = '/lists/serv-and-prod-most-consumed' element = {<ServProdMostCons />}/>
        <Route path = '/lists/prod-most-consumed-per-species' element = {<ProdMostConsSpecies />}/>
        <Route path = '/lists/prod-most-consumed-per-breed' element = {<ProdMostConsBreed />}/>
        <Route path = '/lists/serv-most-consumed-per-species' element = {<ServMostConsSpecies />}/>
        <Route path = '/lists/serv-most-consumed-per-breed' element = {<ServMostConsBreed />}/>
      </Route>

      <Route path = '/consumption' element = {<Consumption />}>
        <Route path = '/consumption/product' element = {<ConsProd />}/>
        <Route path  = '/consumption/service' element = {<ConsServ />}/>
      </Route>

      <Route path = '/client' element = {<Client />}/>
      <Route path = '/client/register' element = {<RegisterClient />}/>
      <Route path = '/client/update' element = {<UpdateClient />}/>
      <Route path = '/client/delete' element = {<DeleteClient />}/>

      <Route path = '/product' element = {<Product />}/>
      <Route path = '/product/register' element = {<RegisterProduct />}/>
      <Route path = '/product/update' element = {<UpdateProduct />}/>
      <Route path = '/product/delete' element = {<DeleteProduct />}/>

      <Route path = '/service' element = {<Service />}/>
      <Route path = '/service/register' element = {<RegisterService />}/>
      <Route path = '/service/update' element = {<UpdateService />}/>
      <Route path = '/service/delete' element = {<DeleteService />}/>

      <Route path = '/pet' element = {<Pet />}/>
      <Route path = '/pet/register' element = {<RegisterPet />}/>
      <Route path = '/pet/update' element = {<UpdatePet />}/>
      <Route path = '/pet/delete' element = {<DeletePet />}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
