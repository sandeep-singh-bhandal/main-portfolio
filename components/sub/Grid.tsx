import { gridItems } from "@/constants/data";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const Grid = () => {
  return (
    <motion.section initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.4)}>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </motion.section>
  );
};

export default Grid;
