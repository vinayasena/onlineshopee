import Head from "next/head";
import Product from "../components/Product";
import Filters from "./../components/Filters";
import { useContext, useEffect,useState } from "react";
import { DataContext } from "./../store/GlobalsState";

const Home = (props) => {
  const [products, setproducts] = useState(props.products);
  const { state, dispatch } = useContext(DataContext);
  const { categories } = state;
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')
  
  const handleCategory = (e)=>{
    const value = e.target.value;
    setCategory(value)
    if(value === 'all'){
      setproducts(props.products)    
      return;
    }
    let filteredProducts = props.products.filter((item)=>{
      return (item.category === e.target.value)
    })
    
    setproducts(filteredProducts)  
  }

  const handleSearch =(e)=>{
    setSearch(e.target.value)
   
    let filteredProducts = props.products.filter((item)=>{
      return (item.title.toLowerCase().includes(e.target.value))
    })
    
    setproducts(filteredProducts)

  }

 
  return (
    <>
      <div>
        <title>Home</title>
      </div>
      
      
      <div className="input-group">
        <div className="input-group-prepend col-md-2 px-0 mt-2">
          <select
            className="custom-select text-capitalize"
             value={category}
             onChange={handleCategory}
          >
            <option value="all">All Products</option>

            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <form autoComplete="off" className="mt-2 col-md-8 px-0">
                <input type="text" className="form-control" list="title_product"
                value={search.toLowerCase()} onChange={handleSearch} placeholder='Search of a product'/>
            </form>

      </div>
      <div className="products">
        {products.length === 0 ? (
          <h2>No Producst Found</h2>
        ) : (
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        )}
      </div>
    </>
  );
};
export async function getStaticProps(context) {
  let products = [];
  const res = await fetch("https://fakestoreapi.com/products");
  if (res.status !== 404) {
    products = await res.json();
  }
  return {
    props: {
      products,
    }, revalidate:60
  };
}

export default Home;
