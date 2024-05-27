import Link from "next/link";
import Image from "next/image";

export default function page() {
    return (
        <div className="mypage-background h-screen flex items-center justify-center">
            <div className="z-10 flex flex-col items-center justify-left angled-scroll">
                <h1 className="black-border">Wybrane Środowiska Programowania</h1>
                wykonano przy użyciu Next.js oraz tailwindcss
            </div>
            <div className="z-10 flex flex-col items-center justify-center angled-scroll">
                <h1 className="gold-border">Norbert Karasek</h1>
                <p>Nr albumu: 119190 </p>
            </div>
            <div className="z-10 flex flex-col items-center justify-right angled-scroll">
                <p className="black-border ">Podziękowania dla Chat GPT</p>
                oraz GitHub Copilot
            </div>
        </div>
    );
}