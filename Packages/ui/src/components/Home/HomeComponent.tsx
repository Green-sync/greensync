import { CalendarComponent, CardComponent } from ".."

export const HomeComponent = () => {
    return (
        <>
            {/**This is the main container Div which will curry all the compoent in main  */}
            <div className="container ">


                {/** This Div controls all the section to be two an side by side */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">



                    {/** This is the left sin */}
                    <div>

                        <div className="rounded-lg shadow p-4 m-3 text-3xl">
                           <CalendarComponent days={[]} events={[]}/>
                        </div>
                    </div>


                    {/** This is the right side of the section */}
                    <div  className="">
                        <div className=" p-4 m-3 text-3xl">
                            <CardComponent image={""} title={""}/>
                        </div>
                    </div>

                </div>


            </div>


        </>
    )
}