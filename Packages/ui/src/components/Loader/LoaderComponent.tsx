import "./loader.scss"
export const LoaderComponent = ({ msg }: any) => {
    return <>
        <div className="flex justify-center items-center">
            <div className="d">
                <span className="loader"></span>
                <p>{msg}</p>
            </div>
        </div>

    </>
}

export default { LoaderComponent }