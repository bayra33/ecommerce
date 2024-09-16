import { FaRegHeart } from "react-icons/fa6";
import { Size, Sv, Star } from "@/components/sv";

export const Product = () => {
    return (
        <div className="mt-12">
            <div className="flex">
                {/* Left section for images */}
                <div className="flex gap-2">
                    <div className="gap-2 flex flex-col mt-12">
                        <img className="rounded-lg" src="/jzurag.png" alt="Product Thumbnail 1" />
                        <img className="rounded-lg" src="/jzurag.png" alt="Product Thumbnail 2" />
                        <img className="rounded-lg" src="/jzurag.png" alt="Product Thumbnail 3" />
                        <img className="rounded-lg" src="/jzurag.png" alt="Product Thumbnail 4" />
                    </div>
                    <div>
                        <img className="w-[422px] h-[521px] rounded-xl" src="/promt.png" alt="Main Product" />
                    </div>
                </div>

                {/* Right section for product details */}
                <div className="flex flex-col mx-4 gap-4 mb-20">
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
                    <div className="mt-2">Хэмжээний заавар</div>
                    <div className="flex gap-2">
                        <Size />
                        <Size />
                        <Size />
                        <Size />
                    </div>
                    <div className="flex gap-4">
                        <p className="flex items-center">1</p>
                    </div>
                    <div>
                        <p className="text-xl">120’000₮</p>
                    </div>
                    <div><Star /></div>
                    <div className="mt-20 flex gap-4">
                        <p>Үнэлгээ</p>
                        <p className="text-blue-400">бүгдийг харах</p>
                    </div>
                    <div><Sv /></div>
                </div>
            </div>
        </div>
    );
};
