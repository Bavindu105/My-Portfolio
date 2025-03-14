export default function Header() {
    return (
        <div className="flex justify-center w-full mb-[-100px] text-white">
            <div className="flex flex-row items-center justify-between w-[1280px] h-[100px] font-medium text-[16px] z-[100]">
                <div className="flex items-center font-bold text-white text-[30px]">LOGO</div>
                <ul className="flex flex-row items-center justify-center gap-20 text-white">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Porfolio</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className="py-2 px-6 bg-[#810CA8] hover:bg-[#740B97] rounded-[20px]">Download Resume</button>
            </div>
        </div>
    )
}
// #810CA8