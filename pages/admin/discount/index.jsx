import Sidebar from "../../../components/Admin_components/Sidebar";
const Cupon = () => {
  return (
    <div className="flex flex-col h-full bg-white text-black">
      <div className="h-full flex flex-row justify-start ">
        <Sidebar className="static " />
        <div className="flex-col  m-10 w-full">
          <div className="font-bold">
            <h1>CREATE CUPON</h1>
          </div>
          <div className="text-lg text-teal-500">Create a New Cupon</div>
          <div>
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6 ">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 border-2 max-w-1/2">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p class="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Password
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    placeholder="******************"
                  />
                  
                </div>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cupon;
