import LeftAnimater from "@/components/animations/leftanimator";
import blogpanda from "../../../public/assets/images/blogs/blog-panda.png";
import RightAnimator from "@/components/animations/rightanimator";

const Herosection = () => {

    return (
        <section className="h-screen w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 bg-background-white overflow-hidden">
            <h1 className="font-chillax md:ml-[48px] text-5xl md:text-[65.57px] leading-tight md:leading-[68.31px] tracking-tighter md:tracking-[-3.72px]">
                <LeftAnimater>
                    View Insights <br /> On Latest{" "}
                    <span className="font-medium text-red-primary-400">Design</span> News
                </LeftAnimater>
            </h1>
            <div className="hidden md:flex h-full items-end justify-end relative">
                <RightAnimator>
                    <div className="relative md:w-[850px] md:h-[653px] md:right-[9%] md:top-0">
                        <img src={blogpanda} className="w-full h-full object-contain" alt="Red Panda Blog" />
                    </div>
                </RightAnimator>
            </div>
        </section >
    );
};

export default Herosection;
