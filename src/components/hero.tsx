import SectionStarter from "./sectionstarter"

export default function Hero() {
    return (
        <section className="py-[100px]">
            <div className="text-white w-[75%] mx-auto text-center">
            <SectionStarter section="we have released a new demo on copywriting - Get it for free today" />
                <h1 className="text-[60px] leading-[70px] w-[80%] font-[500] mx-auto mb-[20px]">All software you'll need to start your own <span className="bg-gradient-to-r from-blue-500 via-blue-400 via-blue-300 via-blue-400 to-blue-500 inline-block text-transparent bg-clip-text">digital agency</span></h1>
                <p className="text-[20px] text-gray-200 leading-[30px] w-[60%] mx-auto mb-[100px]">Get all the software and tools needed to start, run and scale an agency in 2024</p>
            </div>
        </section>
    )
}