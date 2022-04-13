import React from "react";

class Product extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    //nothing rendering yet because it's an empty state
    // items is an empty array
    // dataLoaded is equal to false
    // priceFilter and productType is set to null so it can reference the input values for the radio buttons when we create the functions
    this.state = {
      items: [],
      dataLoaded: false,
      priceFilter: null,
      productType: null,
    };

    // hoping this works - this helps the price filter function when called and also the typefilter when referencing the onChange method
    this.handlePriceFilterChanged = this.handlePriceFilterChanged.bind(this);
    this.handleTypeFilterChanged = this.handleTypeFilterChanged.bind(this);
  }
  // used to execute the code
  componentDidMount() {
    // by default, query localhost for the product (local development)
    let apiHost = "http://localhost:3001";

    // if we are in production, the URL wont include "localhost", so we can use a relative path
    // e.g. "/products"
    if (window.location.href.indexOf("localhost") === -1) {
      apiHost = "";
    }

    //fetching the url from the local host that's referencing the data I have in my server
    fetch(apiHost + "/products")
      // returning the products in json format, the data loaded will now be set to true
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          dataLoaded: true,
        });
      });
  }
  // targeting the value of priceFilter
  handlePriceFilterChanged(event) {
    this.setState({
      priceFilter: event.target.value,
    });
  }

  // target the value of productType
  handleTypeFilterChanged(event) {
    const value = event.target.value;
    if (value.length === 0) {
      // checks if the string is empty
      this.setState({
        productType: null,
      });
      // returns everything within productType
      // The all radio button will refresh and show all the products
    } else {
      this.setState({
        productType: event.target.value,
      });
    }
  }

  render() {
    //if the items cannot be loaded a message will appear that says that the current state is loading
    const { dataLoaded } = this.state;
    if (!dataLoaded)
      return (
        <section>
          <h1 className="loading-message">Loading.... </h1>
        </section>
      );
    // if there is not a price filter return everything within a new array
    let itemsFiltered = this.state.items.filter(
      (el) => !this.state.priceFilter || el.price <= this.state.priceFilter
    );
    //targeting the specific attribute for products
    itemsFiltered = itemsFiltered.filter(
      (el) => !this.state.productType || el.type == this.state.productType
    );

    return (
      <>
        {/* Once the state loads the products will display */}
        <h1 className="product-title">Digital Merchandise</h1>
        <p className="product-text">One stop shop for digital abstract merch</p>
        <section className="filter-input">
          <input
            className="product-prices"
            type="radio"
            name="price-filter"
            value="10"
            onChange={this.handlePriceFilterChanged}
          />
          <label className="label-prices" for="under-10">
            Under $10
          </label>
          <input
            className="product-prices"
            type="radio"
            name="price-filter"
            value="50"
            onChange={this.handlePriceFilterChanged}
          />
          <label className="label-prices" for="under-50">
            Under $50
          </label>
          <input
            className="product-prices"
            type="radio"
            name="price-filter"
            value="100"
            onChange={this.handlePriceFilterChanged}
          />
          <label className="label-prices" for="under-100">
            Under $100
          </label>

          {/* targeting t-shirts */}
          <input
            className="product-types"
            type="radio"
            name="pt"
            value="t-shirt"
            onChange={this.handleTypeFilterChanged}
          />
          <label className="label-prices" for="t-shirts">
            T-shirts
          </label>
          {/* targeting other products  */}
          <input
            className="product-other"
            type="radio"
            name="pt"
            value="other"
            onChange={this.handleTypeFilterChanged}
          />
          <label className="label-prices" for="t-shirts">
            Other
          </label>

          <input
            className="product-other"
            type="radio"
            name="pt"
            value=""
            onChange={this.handleTypeFilterChanged}
          />
          {/* reset functionality with all, you will see all the products  */}
          <label className="label-prices" for="t-shirts">
            All
          </label>

          <section></section>
        </section>
        <section className="container">
          <main className="grid">
            {itemsFiltered.map((item) => {
              return (
                <article>
                  <img
                    className="product-img"
                    src={item.pics}
                    alt="Product Image"
                  />
                  <section>
                    <h2 className="item-prices">${item.price}</h2>
                  </section>
                  <section className="product-name">
                    <h2 className="item-name">{item.name}</h2>
                    <p className="product-description">{item.description}</p>
                  </section>
                </article>
              );
            })}
          </main>
        </section>
      </>
    );
  }
}
export default Product;
