"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/anh.png"
                alt="About"
                className="dark:hidden mt-12"
                width={600} // Điều chỉnh theo mong muốn
                height={300} // Điều chỉnh theo mong muốn
              />
              <Image
                src="/images/about/anh.png"
                alt="About"
                className="hidden dark:block mt-12"
                width={600} // Điều chỉnh theo mong muốn
                height={300} // Điều chỉnh theo mong muốn

              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">


              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Nguyên tắc giải quyết vấn đề tôn giáo trong
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  thời kỳ quá độ lên CNXH
                </span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Khắc phục dần những ảnh hưởng tiêu cực của tôn giáo
                  </h3>
                  <p>phải gắn liền với quá trình cải tạo xã hội cũ xây dựng xã hội mới. Đây là yêu cầu khách quan của sự nghiệp xây dựng chủ nghĩa xã hội..</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Tôn trọng, bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng của nhân dân.

                  </h3>
                  <p>Tôn trọng, bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng của nhân dân, đồng thời đấu tranh chống mọi hành vi lợi dụng tôn giáo để phá hoại khối đại đoàn kết toàn dân tộc.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Thực hiện đoàn kết

                  </h3>
                  <p>Những người có tôn giáo với người không có tôn giáo, đoàn kết các tôn giáo với nhau. Nghiêm cấm mọi hành vi chia rẽ cộng đồng vì lý do tín ngưỡng tôn giáo.

                  </p>
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Phân biệt 2 mặt chính trị và tư tưởng của tôn giáo

                  </h3>
                  <p> Mặt tư tưởng thể hiện sự tín ngưỡng trong tôn giáo.
                    Mặt chính trị là sự lợi dụng tôn giáo chống lại sự nghiệp cách mạng, sự nghiệp
                    xây dựng chủ nghĩa xã hội.

                  </p>

                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    05
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Quan điểm lịch sử cụ thể trong giải quyết vấn đề tín ngưỡng, tôn giáo

                  </h3>
                  <p> Mỗi thời kỳ lịch sử, vai trò và sự tác động của từng tôn giáo đối với đời sống xã hội là khác nhau. Quan điểm, thái độ của các giáo hội, giáo sĩ, giáo dân về các lĩnh vực, các vấn đề của xã hội có sự khác biệt

                  </p>

                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >


                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/anh-triet.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/anh-triet.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
