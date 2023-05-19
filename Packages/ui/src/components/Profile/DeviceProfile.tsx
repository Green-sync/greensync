
const dougnut = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"    width="40" height="40"
viewBox="0 0 110 110" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" 
font-family="Roboto" font-size="14" text-anchor="middle"><defs>
</defs><use xlinkHref="#A" x="5" y="5"/><symbol id="A" overflow="visible"><circle cx="50" cy="50" stroke="#2196f3" stroke-width="10" stroke-dasharray="2041.8000000000002 3141.6000000000004" fill="none" stroke-opacity=".3" r="50"/><path d="M50 0c27.7 0 50 22.3 50 50s-22.3 50-50 50S0 77.7 0 50 22.3 0 50 0z" fill="none" stroke-dasharray="204.17963469846285 314.1592653589793" stroke="green" stroke-width="10"/>
<text fill="#000" stroke="none"><tspan x="50" y="54.62">65.0%</tspan></text></symbol></svg>

export const DeviceProfile = () => {

    return(
        <>
            <h1 className="text-2xl font-extrabold mb-4">Overview</h1>
{/* ============================cards=================================================================== */}
            <div className="flex justify-between gap-2">
                    {/* Card content */}
                <div className="w-1/3 bg-white cursor-pointer overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 flex">
                       <span className="h-10 w-10 m-2">{dougnut}</span>
                       <span>
                            <p className="font-2xl text-md">Daily Usage</p>
                            <p className="text-gray-400 text-lg font-bold">8h 41m</p></span>

                </div>
                </div>
                    {/* Card content */}
                <div className="w-1/3 bg-white cursor-pointer overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6 flex">
                    <span className="h-10 w-10 m-2">{dougnut}</span>
                    <span>
                            <p className="font-2xl text-md">Average Usage</p>
                            <p className="text-gray-400 text-lg font-bold">4h 32m</p></span>
                    </div>
                </div>
                    {/* Card content */}
                <div className="w-1/3 bg-white cursor-pointer overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6  flex">
                        <span className="h-10 w-10 m-2">{dougnut}</span> 
                        <span>
                            <p className="font-2xl text-md">Total Usage</p>
                            <p className="text-gray-400 text-lg font-bold">18h 38m</p></span>
                        </div>
                </div>
            </div>
            {/* =================================================================================================== */}

            <div className="m-4">
                <h1 className="text-2xl font-extrabold">Daily Usage</h1>
                <img src="https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/vhp_img141.jpeg" alt="" />

                <div>
                <h1 className="text-2xl font-extrabold mb-4">Features</h1>
                <div className="flex justify-between gap-2">
                <div className="w-1/3 bg-white cursor-pointer overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 flex">Connectivity</div></div>
                {/* ========================================================================================= */}
                <div className="w-1/3 bg-white cursor-pointer overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 flex">Battery</div></div>
                {/* ==================================================================================== */}
                <div className="w-1/3 bg-white cursor-pointer overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 flex">Security</div></div>
                {/* =============================================================== */}
                <div className="w-1/3 bg-white cursor-pointer overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 flex">Scale</div></div>
                {/* ============================================================================================ */}
                </div>
                </div>
            </div>

        </>
    )
}