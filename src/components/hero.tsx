import SectionStarter from "./sectionstarter"

export default function Hero() {
    return (
        <section className="py-[100px]">
            <div className="text-white w-[75%] mx-auto text-center">
            <SectionStarter section="Book a 100% non-binding discovery call to learn more about your opportunities" />
                <h1 className="text-[70px] leading-[70px] w-[80%] font-[500] mx-auto mb-[20px]">We scale tomorrow's online  <span className="bg-gradient-to-r from-blue-500 via-blue-400 via-blue-300 via-blue-400 to-blue-500 inline-block text-transparent bg-clip-text">education companies</span></h1>
                <p className="text-[20px] text-gray-200 leading-[30px] w-[60%] mx-auto mb-[40px]">Let's fill your calendar with qualified prospects on a pay-for-results basis by leveraging our deep industry know-how and a results-first philosophy.</p>
                <div className="flex items-center justify-center gap-[30px] mb-[80px]">
                <div className="flex items-center gap-[8px] text-[20px]"><img className="w-[22px]" src="/checklist.png"></img>Fuld vækst</div>
                <div className="flex items-center gap-[8px] text-[20px]"><img className="w-[22px]" src="/checklist.png"></img>Performance</div>

                </div>
                <img className="rounded-[40px] w-full" src="/hero.png"></img>
            </div>
        </section>
    )
}