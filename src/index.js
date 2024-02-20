//mere react lessons
//ye dependencies import hui h abhi ke liye chor de
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

/*
//ab dekh yaha ek function define krdiya apan ne[just like in js but return html karwaya h]
//LEARNING JSX
//we always return jsx 
function App() {
  return (
    <>
      <h1>Hello</h1>
      <h2>Hi</h2>
    </>
  );
}

//RENDERING COMPONENT INTO ANOTHER COMPONENT
//YAAD RAKHNA JIS COMPONENT ME APAN ROOT CREATE KIYA HAI WAHI RENDER HOGA SIRF
function Greet() {
  return (
    <>
      <h1>Hello</h1>
      <h2>Hi</h2>
      </>
  );
}

function App() {
  return <Greet />;
}


//put login in component always outside of return

function Greet() {
  const h1E = <h1>Hello</h1>;
  const h2E = <h2>Hi</h2>;
  const h1 = "Hello";
  const h2 = "HI";
  return (
    <>
    {h1E}
    {h2E}
    <h1>{h1}</h1>
    <h2>{h2}</h2>
    </>
    );
  }
  
  function App() {
    return <Greet />;
}

//reusuability []
function Greet() {
  const h1 = "Hello";
  const h2 = "HI";
  return (
    <>
      <h1>{h1}</h1>
      <h2>{h2}</h2>
    </>
  );
}

function Reuse() {
  return (
    <>
    <Greet />
    <Greet />
    </>
    );
  }
  
  function App() {
    return (
      <>
      <Reuse />
      </>
      );
    }

    
    //how to style jsx component
function Greet() {
  const h1 = "Hello";
  const h2 = "HI";
  const style = { textAlign: "center" };
  return (
    <>
    <header className="header">Header</header>
      <h1 style={{ color: "red" }}>{h1}</h1>
      <h2 style={style}>{h2}</h2>
    </header>
  );
}

function Reuse() {
  return (
    <>
      <Greet />
      <Greet />
    </>
  );
}

function App() {
  return (
    <>
      <Reuse />
    </>
  );
}
function App() {
  return <PassingFun />;
}

function Props() {
  return (
    <>
    <h1>This is my learning</h1>
    <h2>today date is {new Date().getDate()}</h2>
    </>
    );
  }
  
  //now lets write with props
  function App() {
  return <PassingFun />;
}

function Props(prop) {
  return (
    <>
    <h1>This is my learning</h1>
      <h2>today date is {prop.propOne}</h2>
      </>
  );
}
function PassingFun() {
  return (
    <>
      <Props propOne={new Date().getDate()} />
    </>
  );
}


//different way of passing props
//we destruct prop object and passed directly the value.
function App() {
  return <PassingFun />;
}

function Props({ propOne }) {
  return (
    <>
    <h1>This is my learning</h1>
    <h2>today date is {propOne}</h2>
    </>
    );
  }
  function PassingFun() {
    return (
    <>
    <Props propOne={new Date().getDate()} />
    </>
  );
}

//passing data from one component into another is what props does basically
function App() {
  return <Garage />;
}
function Cars({ brand, model }) {
  return (
    <>
      <h2>
        I am a {brand} {model}
      </h2>
    </>
  );
}
function Garage() {
  const car = { carName: "FORD", model: "ct-20" };
  return (
    <>
    <h1>I am in a Garage</h1>
    <Cars brand={car.carName} model={car.model} />
    </>
    );
  }
  */
function App() {
  return <Garage />;
}
function Cars({ carInfo }) {
  return (
    <>
      <h2>
        I am a {carInfo.carName} {carInfo.model}
      </h2>
    </>
  );
}
function Garage() {
  const car = { carName: "FORD", model: "ct-20" };
  return (
    <>
      <h1>I am in a Garage</h1>
      <Cars carInfo={car} />
    </>
  );
}
//////////////////
/*
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
//create a pizza app
function Apps() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red" };
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
