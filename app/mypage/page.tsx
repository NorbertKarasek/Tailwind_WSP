import Link from "next/link";
import Image from "next/image";

export default function page() {
    return (
        <div className="mypage-background h-screen flex items-center justify-center">
            <div className="z-10 flex flex-col items-center justify-center angled-scroll">
                <h1 className="gold-border">Norbert Karasek</h1>
                <h1 className="black-border"> Nr albumu: 119190</h1>
                <p className="black-border">Praca na zaliczenie przedmiotu </p>
                <p className="black-border">WYBRANE ŚRODOWISKA PROGRAMOWANIA </p>
                <p className="black-border">wykonana przy użyciu framework'u Tailwind</p>
            </div>
        </div>
    );
}