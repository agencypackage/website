import Link from "next/link"
import SectionStarter from "./sectionstarter"

const pricingData = [
    {bundleName: "Starter", bundleDescription: "Test the contents of our work", price: "Free", paymentPlan: "In full", features: ["Full community access", "Full community access", "Full community access", "Full community access"], noFeatures: ["Full community access", "Full community access", "Full community access", "Full community access"]},
    {bundleName: "Growth", bundleDescription: "Everything to get you started", price: "$129", paymentPlan: "One time", features: ["Full community access", "Full community access", "Full community access", "Full community access"], noFeatures: ["Full community access", "Full community access", "Full community access", "Full community access"]},
    {bundleName: "Exclusive", bundleDescription: "Ready to kick-start your agency", price: "$189", paymentPlan: "/mo", features: ["Full community access", "Full community access", "Full community access", "Full community access", "Full community access", "Full community access", "Full community access", "Full community access"], noFeatures: []},
]

export default function Pricing() {
    return (
        <section className="py-[100px]">
            <div className="text-white w-[75%] mx-auto text-center">
                <SectionStarter section="packages" />
                <h1 className="text-[60px] leading-[70px] w-[80%] font-[500] mx-auto mb-[20px]">Pricing for <span className="bg-gradient-to-r from-blue-500 via-blue-400 via-blue-300 via-blue-400 to-blue-500 inline-block text-transparent bg-clip-text">everyone</span></h1>
                <p className="text-[20px] leading-[30px] w-[60%] mx-auto mb-[100px]">Course & community hosting, sales funnels & checkouts, automated email & sms marketing, Calendars, CRM systems & all AI-tools.</p>

                <div className="grid grid-cols-3 gap-[30px]">
                    {pricingData.map((v, index) => index === 1 ? <ModifiedPricingCard key={v} Obj={v} />:<PricingCard key={v} Obj={v} />)}
                </div>
            </div>
        </section>
    )
}

const PricingCard = (props:any) => {
    return (
        <div className="bg-transparent border-[1px] border-gray-800 text-left rounded-[10px] p-[40px] mt-[40px]">
            <h1 className="text-[30px]">{props.Obj.bundleName}</h1>
            <h2 className="text-[50px] bg-gradient-to-r from-blue-500 via-blue-400 via-blue-300 via-blue-400 to-blue-500 inline-block text-transparent bg-clip-text">{props.Obj.price} <span className="text-[20px]">{props.Obj.paymentPlan}</span></h2>
            <p>{props.Obj.bundleDescription}</p>

            <div className="mt-[40px] mb-[60px] flex flex-col gap-[14px]">
                {props.Obj.features.map((v:any) => <div key={v} className="flex items-center gap-[8px]"><img className="w-[20px]" src="/checklist.png"></img>{v}</div>)}
                {props.Obj.noFeatures.map((v:any) => <div key={v} className="flex items-center gap-[8px] text-gray-600"><img className="w-[20px]" src="/negativechecklist.png"></img>{v}</div>)}
            </div>

            <Link className="block text-center py-[14px] rounded-full bg-blue-600" href={"/apply"}>
                <p>Apply now</p>
            </Link>
        </div>
    )
}

const ModifiedPricingCard = (props:any) => {
    return (
        <div style={{background: "linear-gradient(338deg, rgba(4,4,133,1) 0%, rgba(4,4,93,1) 17%, rgba(3,3,83,1) 28%, rgba(0,0,40,1) 43%, rgba(0,0,40,1) 62%, rgba(0,0,40,1) 79%, rgba(1,1,96,1) 100%)"}} className="text-left rounded-[10px] p-[40px] border-[1px] border-gray-800">
            <h1 className="text-[30px]">{props.Obj.bundleName}</h1>
            <h2 className="text-[50px] bg-gradient-to-r from-blue-500 via-blue-400 via-blue-300 via-blue-400 to-blue-500 inline-block text-transparent bg-clip-text">{props.Obj.price} <span className="text-[20px]">{props.Obj.paymentPlan}</span></h2>
            <p>{props.Obj.bundleDescription}</p>
            <div className="mt-[40px] mb-[100px] flex flex-col gap-[14px]">
                {props.Obj.features.map((v:any) => <div key={v} className="flex items-center gap-[8px]"><img className="w-[20px]" src="/checklist.png"></img>{v}</div>)}
                {props.Obj.noFeatures.map((v:any) => <div key={v} className="flex items-center gap-[8px] text-gray-600"><img className="w-[20px]" src="/negativechecklist.png"></img>{v}</div>)}
            </div>

            <Link className="block text-center py-[14px] rounded-full bg-blue-600" href={"/apply"}>
                <p>Apply now</p>
            </Link>
        </div>
    )
}