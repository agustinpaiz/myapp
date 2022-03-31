function Logo() {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/
    React.createElement("div", { className: "logo-wrap" }, /*#__PURE__*/
    React.createElement("div", {
      id: "logo",
      className: "logo",
      alt: "Marca logo" }, "Marca")))));







}

function Navbar() {
  return /*#__PURE__*/(
    React.createElement("nav", null, /*#__PURE__*/
    React.createElement("ul", { className: "navbar" }, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Productos")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Servicios")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Sobre Nosotros")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "#" }, "Contactos")), /*#__PURE__*/

    React.createElement("button", { className: "btn" }, "Log In"), /*#__PURE__*/
    React.createElement("button", { className: "btn" }, "Sign Up"))));



}

function Header() {
  return /*#__PURE__*/(
    React.createElement("header", null, /*#__PURE__*/
    React.createElement("div", { className: "h-container" }, /*#__PURE__*/
    React.createElement(Logo, null), /*#__PURE__*/
    React.createElement(Navbar, null))));



}


function App() {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement(Header, null)));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));