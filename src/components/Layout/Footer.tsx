import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-white text-center py-[60px] pb-[20px]">
            <h1>agencypackage - a Gazella Team product</h1>
            <p>© {new Date().getFullYear()}</p>
            
        </footer>
    )
}