// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/layout/AppLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
    // const [count, setCount] = useState(0)
    // const [ variable , functionToEffect  ] = useState(false) // always return array

    // html + js => jsx
    // each tag must have a closing tag
    // empty tag => <></> called fragment
    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path="/cart" element={<Cart/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
