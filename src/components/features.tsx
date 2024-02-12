import Link from "next/link"
import SectionStarter from "./sectionstarter"

const featuresData = [
    {heading: "+45 Website templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
    {heading: "+45 Templates", description: "Course & community hosting, sales funnels & checkouts, automated email & sms marketing"},
]

export default function Features() {
    return (
        <section className="py-[100px]">
            <div className="text-white w-[75%] mx-auto text-center">
                <SectionStarter section="features" />
                <h1 className="text-[60px] leading-[70px] w-[80%] font-[500] mx-auto mb-[20px]">Build with <span className="bg-gradient-to-r from-blue-500 via-blue-400 via-blue-300 via-blue-400 to-blue-500 inline-block text-transparent bg-clip-text">passion</span></h1>
                <p className="text-[20px] leading-[30px] w-[60%] mx-auto mb-[60px]">Course & community hosting, sales funnels & checkouts, automated email & sms marketing, Calendars, CRM systems & all AI-tools.</p>
                <div className="grid grid-cols-2 gap-[30px]">
                    {featuresData.map(v => <FeatureCard Obj={v}/>)}
                </div>
            </div>
        </section>
    )
}


const FeatureCard = (props:any) => {
    return (
        <div style={{background: "linear-gradient(338deg, rgba(4,4,133,1) 0%, rgba(4,4,93,1) 17%, rgba(3,3,83,1) 28%, rgba(0,0,40,1) 43%, rgba(0,0,40,1) 62%, rgba(0,0,40,1) 79%, rgba(1,1,96,1) 100%)"}} className="border-[1px] border-gray-800 text-left rounded-[10px] p-[30px]">
            <h1 className="text-[24px] font-[500] mb-[20px]">{props.Obj.heading}</h1>
            <p className="text-[18px] font-[400] text-gray-200">{props.Obj.description}</p>
        </div>
    )
}