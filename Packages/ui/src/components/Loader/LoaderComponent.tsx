import "./loader.scss"
export const LoaderComponent = ({ msg }: any) => {
    return <>
        <div className="flex flex-col justify-center items-center">
                <span className="loader w-[70vw] h-[80vh]"></span>
                <p className="text-green-600 text-2xl">{msg}</p>
        </div>

    </>
}

export default { LoaderComponent }