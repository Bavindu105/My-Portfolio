"use client"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {

    const [rotate, setRotate] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        setRotate({
            x: ((y - centerY) / centerY) * 5,
            y: ((centerX - x) / centerX) * 5
        })
    }

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 })
    }

    return (
        <>
            {/* Hero section */}
            <div className="flex flex-col justify-center items-center w-full h-screen z-0">

                {/* parallax tilt */}
                <div className="flex absolute bottom-0 justify-center items-center w-[1280px] h-screen">
                    <div

                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                            transition: 'transform 0.1s'
                        }}
                    >
                        <h1 className="text-[280px] font-bold text-[#4b4b4b8e]">Bavindu</h1>
                    </div>
                    <div className="flex w-full h-[80vh] absolute bottom-0 pointer-events-none">
                        <Image
                            src="/images/dummy-person.png"
                            alt=""
                            fill
                            objectFit="contain"
                        />
                    </div>
                </div>

                {/* Static */}
                <div className="flex flex-row items-top justify-between h-[55%] w-[1280px] z-2 pointer-events-none">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-[80px] mt-[-20px]">Bavindu</h1>
                        <div className="flex flex-row items-center gap-4 mt-[-25px]">
                            <span className="bg-[#810CA8] h-[3px] w-full" />
                            <h1 className="font-bold text-[50px]">Ashan</h1>
                        </div>
                        <button className="flex flex-col items-center justify-center py-3 border-2 rounded-tl-[15px] rounded-br-[15px] border-[#810CA8] font-semibold text-[16px] hover:bg-[#810CA8] transition duration-300 pointer-events-auto">
                            My Projects
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-[30px]">Software</h1>
                        <h1 className="font-bold text-[50px] mt-[-10px]">Engineer</h1>
                        <p className="font-medium text-[18px] w-[400px]">
                            Lorem ipsum dolor sit amet, loren to la lconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        </p>
                    </div>
                </div>
            </div>

            {/* About section */}
            <div className="flex justify-center w-full h-auto bg-[#810CA8]">
                <div className="flex flex-col items-center justify-center w-[1280px] py-13 gap-4">
                    <h1 className="font-bold text-[30px] mt-[-10px]">Profile</h1>
                    <p className="font-medium text-[18px] text-center w-full">
                        Lorem ipsum dolor sit amet, loren to la lconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, loren to la lconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, loren to la lconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, loren to la lconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    </p>
                </div>
            </div>
        </>
    )
}