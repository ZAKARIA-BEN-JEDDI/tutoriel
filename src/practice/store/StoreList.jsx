import { useEffect, useState } from "react";
import Product from './Product';
import DataTable from "react-data-table-component";
export default function StoreListe() {

    const [productList , setproductList] = useState([])
    const [categorieList , setcategorieList] = useState([])
    const [serchInput , SetsearchInput] = useState('')
    const [serchCategorie , SetserchCategorie] = useState('')

    const getProduct = () =>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> setproductList(json))
    }

    const getCategories = () =>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setcategorieList(json))
    }

    const listProduct = () =>{
        var productListTemp = productList
        if (serchInput) {
            productListTemp = productListTemp.filter(product => {
                return product.title.toLowerCase().includes(serchInput.toLowerCase()) 
                || product.id.toString().toLowerCase().includes(serchInput.toLowerCase())  
                || product.price.toString().toLowerCase().includes(serchInput.toLowerCase())  
                || product.description.toString().toLowerCase().includes(serchInput.toLowerCase())  
                || product.category.toString().toLowerCase().includes(serchInput.toLowerCase())  
            });
        }
        if (serchCategorie) {
            productListTemp = productListTemp.filter(product => {
                return product.category === serchCategorie
            })
        }
        if (productListTemp.length > 0) {
            return productListTemp.map((item , key) => {
                return <Product key={key} prd={item} />
            })
        }else{
            return (
                <tr>
                    <td colSpan={7} className="text-center text-danger">No Items !</td>
                </tr>
            )
        }
    }

    const listCategorie = () =>{
        if (categorieList.length) {
            return categorieList.map((categorie,key) =>{
                return <button className="col btn btn-warning mx-4" key={key} value={categorie} onClick={searchByCategorie}>{categorie}</button>
            })
        }
    }
    const searchByCategorie = (e) =>{
        const searchCategorieValue = e.target.value
        SetserchCategorie(searchCategorieValue);
    }

    const handSearch = (e) =>{
        let txt = document.querySelector('#txt').value
        SetsearchInput(txt)
        console.log(serchInput);
        
    }

    const ResetButton = () =>{
        SetsearchInput('')
        SetserchCategorie('')
    }

    useEffect( () =>{
        getProduct();
        getCategories();
    }
    ,[])
    return <div className="container">
        <h1 className="text-center my-3">Store Liste</h1>
        <div class="input-group mb-4">
            <span className="input-group-text">Search</span>
            <input type="text" id="txt" placeholder="Search product" className="form-control" onChange={handSearch}/>
            <input type="submit" value="Search" className="input-group-text btn btn-primary mx-1" onClick={handSearch} />
            <input type="submit" value="Reset" className="input-group-text btn btn-danger mx-1" onClick={ResetButton} />
        </div>
        <hr />
        <h4 className="text-center my-3">Catergories</h4>
        <div className="row mb-5">
            {listCategorie()}
        </div>

        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Categorie</th>
                        <th>Image</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct()}
                </tbody>
            </table>
        </div>
    </div>
}