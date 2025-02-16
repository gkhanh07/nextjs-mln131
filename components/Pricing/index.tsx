"use client";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: ``,
              subtitle: `Định hướng giải quyết mối quan hệ dân tộc và tôn giáo ở Việt Nam hiện nay`,
              description: `Đảng Cộng sản Việt Nam yêu cầu “nghiêm trị những âm mưu, hành động chia rẽ, phá hoại khối đại đoàn kết dân tộc… Đồng thời chủ động phòng ngừa, kiên quyết đấu tranh với những hành vi lợi dụng tín ngưỡng, tôn giáo để chia rẽ, phá hoại khối đại đoàn kết dân tộc haocjw những hoạt động tín ngưỡng, tôn giáo trái quy định của pháp luật”.`,
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="absolute -bottom-15 -z-1 h-full w-full">
          <Image
            fill
            src="./images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
          {/* Card Component */}
          <PricingCard
            title="Tăng cường mối quan hệ giữa dân tộc và tôn giáo"
            shortContent={[
              "Trong lịch sử phát triển, Đảng luôn khẳng định: xây dựng, củng cố khối đại đoàn kết dân tộc và đoàn kết tôn giáo là vấn đề chiến lược.",
            ]}
            fullContent={[
              "Để thúc đẩy đổi mới đất nước, xã hội chủ nghĩa phải tạo điều kiện thuận lợi cho tất cả các dân tộc và tôn giáo.",
              "Thực tiễn này cũng yêu cầu giải quyết mối quan hệ dân tộc và tôn giáo phù hợp với từng giai đoạn lịch sử.",
            ]}
          />

          <PricingCard
            title="Giải quyết mối quan hệ dân tộc và tôn giáo"
            shortContent={[
              "Tôn giáo và dân tộc là hai vấn đề rất nhạy cảm, cần tuân thủ nguyên tắc giải quyết trên cơ sở vấn đề dân tộc.",
            ]}
            fullContent={[
              "Không lợi dụng vấn đề tôn giáo để ly khai dân tộc hay gây chia rẽ.",
            ]}
          />

          <PricingCard
            title="Một số biện pháp cụ thể"
            shortContent={[
              "Giải quyết tốt mối quan hệ dân tộc và tôn giáo nhằm đảm bảo quyền con người, nhưng vẫn phải tuân thủ pháp luật.",
            ]}
            fullContent={[
              "Tăng cường an ninh quốc phòng, đẩy mạnh công tác tuyên truyền phòng chống tội phạm.",
              "Xây dựng quy chế phối hợp giữa lực lượng công an, quân đội với các đoàn thể trong công tác dân tộc, tôn giáo.",
              "Tranh thủ, vận động chức sắc, chức việc, nhà tu hành và tín đồ các tôn giáo xây dựng cuộc sống “tốt đời, đẹp đạo”.",
              "Chủ động vạch trần âm mưu của các thế lực thù địch, ngăn chặn “tôn giáo hoá dân tộc”.",
              "Kiên quyết đấu tranh, xử lý các tổ chức, cá nhân có hành vi vi phạm đến mối quan hệ dân tộc và tôn giáo.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, shortContent, fullContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
      <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
        {title}
      </h4>

      <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
        <ul>
          {shortContent.map((text, index) => (
            <li
              key={index}
              className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee"
            >
              {text}
            </li>
          ))}

          {isExpanded &&
            fullContent.map((text, index) => (
              <li
                key={index}
                className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee"
              >
                {text}
              </li>
            ))}
        </ul>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-primary font-medium transition-all duration-300 dark:text-white dark:hover:text-primary"
      >
        {isExpanded ? "Thu gọn ▲" : "Xem thêm ▼"}
      </button>
    </div>
  );
};

export default Pricing;
