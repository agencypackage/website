import Link from "next/link";
import { Play } from "lucide-react";

export default function Navbar() {
    return (
        <nav style={{backdropFilter: "blur(10px)"}} className="h-[80px] bg-transparent flex items-center fixed w-full">
            <div className="text-white w-[94%] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <h1 className="text-[30px]">AVCI</h1>
                </Link>



                
                <div className="flex items-center gap-[20px] text-[15px] font-[400]">
                    <Link className="flex items-center gap-[6px]" href={"/"}>
                        <Play size={20} />
                    Watch demo
                    </Link>
                    <Link className="bg-blue-600 rounded-full px-[20px] font-[500] py-[10px]" href={"/apply"}>
                    Book meeting
                    </Link>
                </div>
            </div>
        </nav>
    )
}