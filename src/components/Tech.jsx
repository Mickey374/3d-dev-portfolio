import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Frameworks and Tech Tools</p>
        <h2 className={styles.sectionHeadText}>Tech Stacks I Use.</h2>
      </motion.div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
