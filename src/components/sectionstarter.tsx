export default function SectionStarter(props:any) {
    return (
        <div className="mb-[20px]">
            <p className="text-[14px] text-white inline-block font-[300] border-[1px] border-gray-600 mx-auto rounded-full py-[6px] px-[16px]">{props.section}</p>
        </div>
    )
}