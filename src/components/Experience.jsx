import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { FaDownload } from 'react-icons/fa';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div
        className="flex justify-center items-center w-full h-full"
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%]"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-semibold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// onClick={() => window.open(source_code_link, "_blank")}

const Experience = () => {

  const downloadCV = () => {
    // Replace the URL below with the location of your CV file
    const fileUrl = 'https://drive.google.com/file/d/18w0-EzsHu2NhOb3MQV14eBhTOCBIQL5S/view?usp=share_link';

    // Use the window.location.href property to initiate the download
    // window.location.href = fileUrl;
    window.open(fileUrl, "_blank")
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Projects and Expertise</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <div className="mt-10 flex flex-col">
        <button
          onClick={downloadCV}
          className='border border-solid border-gray-300 bg-transparent font-bold p-4 rounded flex justify-center'
        >
          <FaDownload className="mr-20" />
          Check My CV
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
