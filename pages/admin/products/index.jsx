import Sidebar from "../../../components/Admin_components/Sidebar"
import ProductLists from "../../../components/Admin_components/ProductLists"
const Products=()=>{
    return (
        <>
            <div className="w-full flex flex-col min-h-screen bg-white text-black">
                <div className="w-full min-h-screen flex flex-row justify-start">
                <Sidebar/>
                <div className="w-full flex-1 p-10  "><ProductLists/></div>
                
                </div>
            </div>
            
        </>
    )
}
export default Products;