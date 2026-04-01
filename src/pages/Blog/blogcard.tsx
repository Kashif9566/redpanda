import JourneyBadge from '../../components/journeys/journeybadge';
import { ArrowUpRight } from "lucide-react";
import type { Blog } from '../../types/blog';
import { useNavigate } from "react-router"

const Blogcard = (props: Blog & { lastitem?: boolean }) => {
    const { title, category, badges, image, lastitem } = props;
    const navigate = useNavigate();

    return (
        <div className={`p-3 md:p-10 flex md:flex-row flex-col-reverse md:w-[1341px] md:h-[644px] justify-between border-[1px] border-black blog-card md:rounded-[28px] rounded-2xl ${lastitem ? "mb-0" : "mb-5"} mx-auto my-0`}>
            <div className='flex flex-col-reverse md:justify-between md:flex-col gap-5 md:gap-5 w-full'>
                <div className="flex gap-2 2xl:gap-5 flex-wrap md:max-w-[70%] lg:max-w-[60%]">
                    {badges.map((badge) => {
                        return (
                            <JourneyBadge
                                key={badge}
                                text={badge}
                                className="py-1 px-4"
                            />
                        );
                    })}
                </div>
                <div>
                    <p className='font-chillax mb-1 font-semibold text-red-primary-400 text-sm md:text-[20px] md:leading-[57px] tracking-tighter'>{category}</p>
                    <div className='flex gap-2 md:gap-15 md:flex-row flex-col items-center md:w-[45.073vw]'>
                        <h1 dangerouslySetInnerHTML={{ __html: title }} className='text-2xl md:text-[37.5px] md:leading-[57px] md:tracking-[-2px] font-chillax' />
                        <div
                            onClick={() => navigate(`/blog-detail/${props.id}`)}
                            className={"w-10 h-10 md:w-[65px] md:h-[65px] cursor-pointer shrink-0 select-none flex items-center justify-center rounded-full bg-red-primary-400"}
                        >
                            <ArrowUpRight color='white' className='w-[23px] h-[23px] md:w-[39px] md:h-[39px]' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:rounded-[16px] rounded-lg overflow-hidden md:w-[546px] md:h-[546px] flex justify-end shrink-0'>
                <img src={image} className='h-full w-full object-cover' alt={title} />
            </div>
        </div>
    )
}

export default Blogcard