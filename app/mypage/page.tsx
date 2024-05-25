import Link from "next/link";
import Image from "next/image";

export default function page() {
    return (
        <div className="mypage-background h-screen flex items-center justify-center">
            <div className="mypage-background h-screen flex items-center justify-center"></div>

            <div className="z-10 flex flex-col items-center justify-center">
                <h1 className="gold-border">Norbert Karasek</h1>
                <h1 className="text-3xl text-white font-bold"> Nr albumu: 119190</h1>
                <p className="text-white">Strona 2</p>
            </div>
            <div className="text-center">
                <p className="text-5xl text-orange-500 font-bold">Druga strona</p>
            </div>
        </div>
    );
}