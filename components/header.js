export default function Header() {
    return (
        <div className="flex justify-center w-full mb-[-100px]">
            <div className="flex flex-row items-center justify-between w-[1280px] h-[100px] font-medium text-[16px] z-[100]">
                <div className="w-[100px] h-[100px] bg-amber-300"></div>
                <ul className="flex flex-row gap-20 text-white">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
                <button className="py-2 px-6 bg-[#810CA8] hover:bg-[#740B97] rounded-[20px]">Button</button>
            </div>
        </div>
    )
}
// #810CA8