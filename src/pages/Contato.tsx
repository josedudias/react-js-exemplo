import Menu from "../components/Menu";

export default function Contato() {
    return (
        <>
            <div className="flex">
                <div className="flex-col">
                    <Menu />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <div className="max-w-md mx-10 my-5 mb-4">
                    Página de contato
                </div>
            </div>
        </>
    )
}