interface CardProps {
    title: string
    img: string
    price: number
}

function FoodCard({ img, title, price}: CardProps) {
    return (
        <div className="px-5">
            <div className="bg-slate-500 h-70 p-6 rounded-lg text-white items-center">
                <img className="max-w-25 top-0" src={img} alt="" />
                <h1 className="text-xl font-bold">{title}</h1>
                <p><b>Valor: </b> {price}</p>
            </div>
        </div>
    );
}
export default FoodCard;