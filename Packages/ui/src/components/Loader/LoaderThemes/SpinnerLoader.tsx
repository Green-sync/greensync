import "./loader.scss"
export const SpinnerLoader = ({msg}:any) => {
    return <>
     <div className="flex flex-col justify-center items-center">
                <span className="loader w-[70vw] h-[80vh]"></span>
                <p className=" mt-6 text-green-600 text-2xl">{msg}</p>
        </div>
    </>
}