

export const StockProfile = () => {

    return(
        <>
        <div className="flex flex-col flex-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
            <h2 className="text-2xl mb-4 font-extrabold">Sales Report</h2>
            <img className="h-90" src="https://snov.io/glossary/wp-content/uploads/2020/04/Blog_how_to_do_a_weekly_sales_report_graph_3.png" alt="Sales Report" />
            </div>
            <div>
            <h2 className="text-2xl mb-4 font-extrabold">Earnings</h2>
            <img className="h-80" src="https://i.pinimg.com/736x/01/9f/92/019f92535d55d96362d41e9f43926d5b.jpg" alt="Earnings" />
            </div>
        </div>
        </div>

        <div>
            <h1 className="text-2xl mb-4 font-extrabold">Recent Orders</h1>
            </div>
        </>
    )
}