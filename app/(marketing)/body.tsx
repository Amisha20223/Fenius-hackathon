import Image from "next/image";

export const Body = () => {
    return ( 
        <section className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 bg-orange-100">
            <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
                <Image
                    src="/asset-management.png" 
                    alt="Financial Management"
                    width={350} 
                    height={350} 
                />
            </div>
            <div className="flex flex-col font-bold items-center gap-y-8">
                <h1 className="text-xl lg:text-3xl max-w-[400] text-center">
                    <span className="text-neutral-600 shadow-xl" >
                        Learn, practice, and master about Finance
                    </span>
                </h1>
            </div>
        </section>
    );
};
