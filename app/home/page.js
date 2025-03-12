import Image from "next/image"

export default function HomePage() {
    return (
        <>
            {/* Hero section */}
            <div className="flex flex-col justify-center items-center w-full h-screen z-0">
                <div className="flex absolute bottom-0 justify-center items-center w-[1280px] h-screen">
                    <h1 className="text-[280px] font-bold text-[#4b4b4b8e]">Bavindu</h1>
                    <div className="flex w-full h-[80vh] absolute bottom-0">
                        <Image
                            src="/images/dummy-person.png"
                            alt=""
                            fill
                            objectFit="contain"

                        />
                    </div>
                </div>
            </div>

            {/* About section */}
            {/* <div>aaa</div> */}
        </>
    )
}