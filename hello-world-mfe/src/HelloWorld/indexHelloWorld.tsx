import ReactDOM from "react-dom/client";
import HelloWorldComponent from "./HelloWorldComponent";


const mount = (el:Element)=>{
   const root:ReactDOM.Root = ReactDOM.createRoot(el);
   root.render(<HelloWorldComponent />)
}
export default mount