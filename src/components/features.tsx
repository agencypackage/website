import Link from "next/link"
import SectionStarter from "./sectionstarter"

const featuresData = [
    {heading: "+45 Website templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+20 Logo presets", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "Zapier integrations", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "Community", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
]

export default function Features() {
    return (
        <section className="py-[100px]">
            <div className="text-white w-[75%] mx-auto text-center">
                <SectionStarter section="features" />
                <h1 className="text-[60px] leading-[70px] w-[80%] font-[500] mx-auto mb-[20px]">Built with <span className="bg-gradient-to-r from-blue-500 via-blue-400 via-blue-300 via-blue-400 to-blue-500 inline-block text-transparent bg-clip-text">passion</span></h1>
                <p className="text-[20px] leading-[30px] w-[60%] mx-auto mb-[100px]">Course & community hosting, sales funnels & checkouts, automated email & sms marketing, Calendars, CRM systems & all AI-tools.</p>
                <div className="grid grid-cols-2 gap-[30px]">
                    {featuresData.map(v => <FeatureCard key={v} Obj={v}/>)}
                </div>
            </div>
        </section>
    )
}


const FeatureCard = (props:any) => {
    return (
        <div style={{background: "linear-gradient(326deg, rgba(0,0,94,1) 0%, rgba(0,0,49,1) 49%, rgba(0,0,72,1) 100%)"}} className="border-[1px] border-gray-800 text-left rounded-[20px] p-[30px]">
            <h1 className="text-[24px] font-[500] mb-[20px]">{props.Obj.heading}</h1>
            <p className="text-[18px] font-[400] text-gray-200">{props.Obj.description}</p>
        </div>
    )
}