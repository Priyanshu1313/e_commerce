import { useEffect, useState } from 'react';
import '../style/home.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { addCart } from '../redux/action/addToCartAction';

import {Atom} from 'react-loading-indicators';
import { useDispatch, useSelector } from 'react-redux';

//useEffect use garera data fetch garcham, 

const Products = () =>{
  const[data,setData] = useState([]);
  const[filterData,setfilterData] = useState(data);
  const[categories,setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory,setSelectedCategory] = useState("")
  const [searchProductText,setsearchProductText] = useState("")

const state = useSelector((state) => state.handleCart)

  const dispatch = useDispatch();

  const addProduct = (product) => {
    console.log(product);
    
    dispatch(addCart(product))
  }

  useEffect(()=>{
      const getProducts = async() =>{
          setLoading(true);
          const response = await fetch("https://fakestoreapi.com/products/");
          setLoading(false)
          setData(await response.clone().json())
          setfilterData(await response.clone().json())
          console.log(await response.clone().json());
      };
      getProducts();
  }, []);
  useEffect(()=>{
    const getCategories = async() =>{
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products/categories/");
        setLoading(false)
        setCategories(await response.clone().json())
        console.log(await response.clone().json());
    };
    getCategories();
}, []);


const updateFilterData = (category) => {
  console.log(category);
  setSelectedCategory(category);
  if(category=="")
    setfilterData(data)
  else{
    const newList = data.filter(d => d.category === category)
    setfilterData(newList);
  }
}

  const Loading = () => {
    return(
      <>
      <Atom color="#32cd32" size="medium" text="" textColor="" />
      </>
    )
  }
  const ListCategories = () => {
    return (
      <>
        <select value={selectedCategory} onChange={(e)=>{updateFilterData(e.target.value)}}>
          <option value="" key={-1}>all</option>
          {
            categories.map((category, index) =>
                <option value={category} key={index}>{category}</option>
            )
          }
        </select>
      </>
    )
  }
  const searchProduct = (typedText) =>{
    setsearchProductText(typedText);
    console.log(typedText);
    
    const newList = data.filter(product => 
      product.title.indexOf(typedText) > -1
    )
    
    setfilterData(newList);

  }

  const SearchField = () =>{
    return(
      <>
        <input type="text" value={searchProductText} id="searchField" placeholder='Search For' onChange={(e)=>{searchProduct(e.target.value)}} />
      </>
    )
  }


  const ShowProducts = () => {
    return (
      <>
        { filterData.map((item)=> {
          return(
          <div className="product-box vertical" key={item.id}>
            <img src={item.image} alt= {item.title} />
            <div className="product-info">
              <h3>{item.title}</h3>
              <p> {item.description}</p>
              <button onClick={()=> addProduct(item)}>Add to Cart</button> 
              {/* // we will use redux */}
            </div>
          </div>
          )
        })}
      </>
    );
  };



  return(
      <>
      
      <div className="product-container centerDiv">
      <h2>Featured Products</h2>
      <hr className='drawLine'/>
      <SearchField/>
      <ListCategories/>
      <div className="product-grid">

        <div className="product-row">
          {loading? <Loading/> : <ShowProducts/>}
          {/* <div className="product-box vertical">
            <img src="#" alt="Product 1" />
            <div className="product-info">
              <h3>Product 1</h3>
              <p> Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="product-box vertical">
            <img src="#" alt="Product 2" />
            <div className="product-info">
              <h3>Product 2</h3>
              <p> Description of Product 2</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-row">
          <div className="product-box vertical">
            <img src="#" alt="Product 3" />
            <h3>Product 3</h3>
            <p> Description of Product 3</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-box vertical">
            <img src="#" alt="Product 4" />
            <h3>Product 4</h3>
            <p> Description of Product 4</p>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="product-row"> */}
          {/* <div className="product-box vertical">
            <img src="#" alt="Product 5" />
            <div className="product-info">
              <h3>Product 5</h3>
              <p> Description of Product 5</p>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="product-box vertical">
            <img src="#" alt="Product 6" />
            <div className="product-info">
              <h3>Product 6</h3>
              <p> Description of Product 6</p>
              <button>Add to Cart</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Products;