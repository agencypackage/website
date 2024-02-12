import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={{backdropFilter: "blur(10px)"}} className="h-[80px] bg-transparent flex items-center fixed w-full">
            <div className="text-white w-[94%] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-[220px]" src="/agencypackage.svg"></img>
                </Link>


                <div className="flex items-center gap-[40px] text-[15px] font-[500]">
                    <Link href={"/features"}>
                    Features
                    </Link>
                    <Link href={"/pricing"}>
                    Pricing
                    </Link>
                    <Link href={"/"}>
                    Results
                    </Link>
                </div>
                
                <div className="flex items-center gap-[20px] text-[15px] font-[400]">
                    <Link href={"/"}>
                    Join community
                    </Link>
                    <Link style={{background: "linear-gradient(338deg, rgba(4,4,133,1) 0%, rgba(4,4,93,1) 17%, rgba(3,3,83,1) 28%, rgba(0,0,40,1) 43%, rgba(0,0,40,1) 62%, rgba(0,0,40,1) 79%, rgba(1,1,96,1) 100%)"}} className="bg-transparent border-[1px] border-gray-800 rounded-full px-[20px] py-[10px]" href={"/apply"}>
                    Apply for free
                    </Link>
                </div>
            </div>
        </nav>
    )
}