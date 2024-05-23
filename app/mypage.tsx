import Link from "next/link";
import Image from "next/image";

export default function mypage() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <p className="text-5xl text-orange-500 font-bold">Druga strona</p>
                <Link href="/public">Strona główna</Link>
            </div>
        </div>
    );
}