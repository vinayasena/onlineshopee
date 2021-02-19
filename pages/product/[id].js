import Head from "next/head";
import { useState, useContext } from "react";
import router from "next/router";
import { DataContext } from "../../store/GlobalsState";
import { addToCart } from "../../store/Actions";

const DetailProduct = (props) => {
  const [product, setProduct] = useState(props.product);
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  return (
    <div className="row detail_page">
      <Head>
        <title>Detailed Product</title>
      </Head>
      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.title}
          className="d-block img-thumbnail rounded mt-4 w-100"
          style={{ height: "600px", border: "1px solid #ccc" }}
        />
        <div className="row mx-0">
          <img
            src={product.image}
            alt={product.title}
            className="img-thumbnail rounded"
            style={{
              height: "100px",
              width: "20%",
              border: "1px solid #333",
              marginTop: "3px",
            }}
          />
        </div>
      </div>
      <div className="col-md-6 mt-3">
        <h2 className="text-uppercase">{product.title}</h2>
        <h2 className="text-danger" style={{ marginTop: "30px" }}>
          ${product.price}
        </h2>
        <div style={{ marginTop: "30px", fontSize: "19px" }}>
          {product.description}
        </div>
        <div
          className="text-uppercase my-2"
          style={{ marginTop: "30px", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          {product.category}
        </div>
        <button
          type="button"
          className="btn btn-dark my-3 px-5"
          onClick={() => dispatch(addToCart(product, cart))}
        >
          Buy
        </button>

        <span
          style={{
            cursor: "pointer",
            marginLeft: "20px",
            textDecoration: "underline",
            fontSize: "20px",
          }}
          onClick={() => router.back()}
        >
          
          Back To Results
        </span>
      </div>
    </div>
  );
};

export default DetailProduct;

export const getServerSideProps = async ({ params: { id } }) => {
  let product = [];
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (response.status !== 404) {
    product = await response.json();
  }

  return {
    props: {
      product,
    },
  };
};
//revalidate:60
