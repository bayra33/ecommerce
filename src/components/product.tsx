import { FaRegHeart } from "react-icons/fa6";

export const Product = () => {
    return(
        <div className="mt-12 flex ">
            <div className="flex gap-2">
                <div className="gap-2 flex flex-col mt-12 ">
                <img src="jzurag.png"></img>
                <img src="jzurag.png"></img>
                <img src="jzurag.png"></img>
                <img src="jzurag.png"></img>
                </div>
                <div>

               
                <img className="w-[422px] h-[521px] rounded-lg" src="promt.png"></img>
                </div>
            </div>
            <div className="flex flex-col mx-4 gap-2">
                    <div className="w-[52px] h-[22px] border-2 rounded-lg flex justify-center items-center">Шинэ</div>
                    <div className="flex">
                        <p>Wildflower Hoodie</p>
                        <div className="flex items-center mx-2">
                        <FaRegHeart />
                        </div>
                        </div>
                        <div>
                       <p>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</p> 
                        </div>
                        <div className="mt-2">
                        Хэмжээний заавар
                        </div>

            </div>
        </div>
    )
}