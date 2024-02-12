const pricingData = [
    {bundleName: "Starter", bundleDescription: "Everything to get you started", price: "$89", paymentPlan: "In full"},
    {bundleName: "Growth", bundleDescription: "Everything to get you started", price: "$129", paymentPlan: "In full"},
    {bundleName: "Exclusive", bundleDescription: "Everything to get you started", price: "$189", paymentPlan: "In full"},
]

export default function Pricing() {
    return (
        <section className="py-[100px]">
            <div className="text-white w-[75%] mx-auto text-center">
                <h1 className="text-[60px] leading-[70px] w-[80%] font-[500] mx-auto mb-[40px]">Pricing for <span className="text-blue-500">everyone</span></h1>
                <p className="text-[20px] leading-[30px] w-[60%] mx-auto mb-[100px]">Course & community hosting, sales funnels & checkouts, automated email & sms marketing, Calendars, CRM systems & all AI-tools.</p>

                <div className="grid grid-cols-3 gap-[30px]">
                    {pricingData.map(v => <PricingCard key={v} Obj={v} />)}
                </div>
            </div>
        </section>
    )
}

const PricingCard = (props:any) => {
    return (
        <div className="bg-blue-900 text-left rounded-[10px] p-[30px]">
            <h1 className="text-[30px]">{props.Obj.bundleName}</h1>
            <h2 className="text-[50px]">{props.Obj.price}</h2>
            <p>{props.Obj.bundleDescription}</p>
        </div>
    )
}