import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, LinkUrl } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  url,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 justify-end flex m-3 card-img_hover">
            <div
              className="mr-1 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(url, "_blank")}
            >
              <img
                src={LinkUrl}
                alt="LinkUrl"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag)  => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
            ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Workspace</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This section of my Portfolio highlights some selected projects I am
          working on. These projects are with regards to some clients I have
          personally worked for them on their use-cases and needs. I have
          briefly described them with links to the repository(some may be
          private though). These real-world projects highlights my capabilities
          in turning ideas & mockups into real-projects leveraging on different
          technologies available.
        </motion.p>
      </div>
      <div className="gap-7 flex flex-wrap mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
