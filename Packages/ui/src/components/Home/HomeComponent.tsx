import { CalendarComponent, DataAnalysisComponent, FarmerCard } from ".."

export const HomeComponent = () => {
    return (
        <>
            {/**This is the main container Div which will curry all the compoent in main  */}
            <div className="container ">


                {/** This Div controls all the section to be two an side by side */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">




                    <div>

                        <div className="rounded-lg shadow p-4 m-3 text-3xl">
                            <CalendarComponent days={[]} events={[]} />
                        </div>
                    </div>


                    <div className="rounded-lg shadow p-4 m-3 text-3xl">
                        <FarmerCard />
                    </div>
                    <div className="rounded-lg shadow p-4 m-3 text-3xl">
                        <DataAnalysisComponent />
                    </div>


                </div>


            </div>


        </>
    )
}