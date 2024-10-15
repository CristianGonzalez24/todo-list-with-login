import { Link } from "react-router-dom"

const HomePage = () => {
    return (
    <div className="flex items-center h-[50vh] md:h-[80vh] max-w-[80%] md:my-[50px] my-[150px] mx-auto bg-white rounded-lg custom-background">
        <div className="max-w-[700px] md:p-12 p-4">
            <h1 className="text-4xl md:text-[6em] leading-[1.2em] font-bold text-[#002765]">
                Welcome to your <br/> Task Manager!
            </h1>
            <p className="text-lg md:text-xl font-semibold py-4 leading-8 text-gray-600">
                Add, organize and complete your daily tasks easily.
                <br/>
            To get started <Link to="/login" className="text-[#002765] font-bold hover:text-orange-500 transition-all">login</Link> or <Link to="/register" className="text-[#002765] font-bold hover:text-orange-500 transition-all">register</Link>.
            </p>
        </div>
    </div>
    )
}

export default HomePage