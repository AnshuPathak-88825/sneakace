
import SideBar from "../../components/SiderBar"
import OrdersList from "../../components/OrdersList"
const  my_order=()=> {

  return (
    <div className="w-full min-h-screen flex bg-slate-100">
      <div className="max-w-[350px] w-full p-8">
        <SideBar />
        
      </div>
      <div className="flex-1 p-8 pl-0">
        <OrdersList />

      </div>
    </div>
  )
}

export default my_order