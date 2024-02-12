import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="h-[90px] flex items-center border-b-[1px] border-gray-900 fixed w-full">
            <div className="text-white w-[94%] mx-auto flex items-center justify-between">
                <Link href={"/"}>agencypackage.com</Link>


                <div className="flex items-center gap-[40px] font-[500]">
                    <Link href={"/"}>
                    Features
                    </Link>
                    <Link href={"/pricing"}>
                    Pricing
                    </Link>
                    <Link href={"/"}>
                    Results
                    </Link>
                </div>
                
                <div className="flex items-center gap-[20px] font-[500]">
                    <Link href={"/"}>
                    Join community
                    </Link>
                    <Link className="bg-blue-600 rounded-full px-[20px] py-[10px]" href={"/apply"}>
                    Apply today
                    </Link>
                </div>
            </div>
        </nav>
    )
}