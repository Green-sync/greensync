import { CalendarComponent, FarmerCard } from ".."
import { CalendarStaticData } from "../.."

export const HomeComponent = () => {

    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    const GreetingMessage = () => {
        let greeting: string;

        if (currentHour < 12) {
            greeting = "Good morning!";
        } else if (currentHour < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }

        return greeting

    }
    return (
        <>

            <div className="text-lg font-semibold">
                {GreetingMessage()}
            </div>
            {/**This is the main container Div which will curry all the compoent in main  */}
            <div className="container p-10 ">


                {/** This Div controls all the section to be two an side by side */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">

                    <div className='grid grid-cols-1 gap-2 sm:grid-cols-1'>

                        <div className="rounded-lg shadow p-4 m-3 text-3xl">
                            <CalendarComponent days={CalendarStaticData.days} events={CalendarStaticData.events} ctype={'HomeView'} />

                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-2 sm:grid-cols-1'>

                        <div className="rounded-lg shadow p-4 m-3  text-3xl">
                            <FarmerCard />
                        </div>

                        <div className="rounded-lg shadow p-4 m-3 text-3xl">

                        </div>
                    </div>





                </div>


            </div>


        </>
    )
}