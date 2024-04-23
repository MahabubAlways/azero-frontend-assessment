import { useCharLimit } from "../../hooks/useCharLimit";
import { Post } from "../../types/posts";

function PostCard({ title, body, tags }: Post) {
  return (
    <div className="flex flex-col justify-between w-full py-4 lg:py-0 sm:w-[48%] md:w-[48%] lg:w-[24%] min-h-[400px]">
      <div>
        <span className=" inline-block font-extralight uppercase bg-color-primary text-white text-md leading-5 px-2 py-1">
          {tags[0]}
        </span>
        <img
          src="https://api.lorem.space/image/dashboard?w=370&h=240"
          alt={title}
        />
        <h3 className="my-2 sm:min-h-[55px]">{title}</h3>
        <p className="mb-2">{useCharLimit(body)}</p>
      </div>
      <a href="#" className="underline block">
        Read More
      </a>
    </div>
  );
}

export default PostCard;
