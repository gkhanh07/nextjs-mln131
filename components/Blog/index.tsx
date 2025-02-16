import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";

const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: ``,
              subtitle: `Định hướng giải quyết mối quan hệ dân tộc và tôn giáo ở Việt Nam hiện nay`,
              description: `Đảng Cộng sản Việt Nam yêu cầu “nghiêm trị những âm mưu, hành động chia rẽ, phá hoại khối đại đoàn kết dân tộc… Đồng thời chủ động phòng ngừa, kiên quyết đấu tranh với những hành vi lợi dụng tín ngưỡng, tôn giáo để chia rẽ, phá hoại khối đại đoàn kết dân tộc haocjw những hoạt động tín ngưỡng, tôn giáo trái quy định của pháp luật”.
`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
