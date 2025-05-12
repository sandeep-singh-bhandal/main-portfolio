import { FiLinkedin, FiGithub } from "react-icons/fi";
import { RiBracesFill } from "react-icons/ri";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

export const NavbarData = {
  title: "< Sandeep Singh />",
  navItems: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1MTpbxo-N56lWV18XPbsg7EiXb3Xr9Exr/view?usp=drive_link",
    },
    { name: "Contact", link: "/contacts" },
  ],
  socials: [
    {
      name: "LinkedIn",
      src: "/linkedin.svg",
      link: "https://www.linkedin.com/in/sandeep-singh-bhandal-a4804932b/",
    },
    {
      name: "Github",
      src: "/github.svg",
      link: "https://github.com/sandeep-singh-bhandal",
    },
  ],
};

export const HeroSectionData = {
  greeting: "Hi, I'm Sandeep Singh",
  description:
    "I'm a passionate frontend developer with a keen interest in creating dynamic and responsive web applications. I have a strong foundation in HTML, CSS, JavaScript, and React, and I am always eager to learn new technologies and improve my skills. My goal is to build user-friendly interfaces that provide an exceptional user experience.",
  buttonTitle: "Download Resume",
};

export const SkillSectionData = {
  title: "My Skills",
  subtitle1: "Making apps with modern technologies",
  subtitle2: "Never miss a task, deadline or idea",
  Skill_data: [
    {
      skill_name: "Html 5",
      Image: "/html.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Css",
      Image: "/css.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Java Script",
      Image: "/js.png",
      width: 65,
      height: 65,
    },
    {
      skill_name: "Tailwind Css",
      Image: "/tailwind.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "React",
      Image: "/react.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Type Script",
      Image: "/ts.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Next js 13",
      Image: "/next.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Framer Motion",
      Image: "/framer.png",
      width: 80,
      height: 80,
    },
  ],
};

export const ProjectsData = {
  title: "My Projects",
  projects: [
    {
      src: "/admin-dashboard.png",
      title: "Admin Dashboard",
      description:
        "A fully responsive admin dashboard template built with React and Tailwind CSS. It includes various charts, tables, and UI components to manage and visualize data effectively. The design is modern and user-friendly",
      link: "https://admin-dashboard-black-nine-17.vercel.app/ecommerce",
    },
    {
      src: "/loves-cuisine-yummy.png",
      title: "Food Catering Website",
      description:
        "A Live Hosted Food Catering Website delivered to USA client built with Next.js and Tailwind CSS. It features a modern design, responsive layout, and showcases various food items and services offered by the catering business. ",
      link: "https://www.lovescuisine.com",
    },
    {
      src: "/modern-landing-page.png",
      title: "Modern Landing Page",
      description:
        "A modern landing page template built with React and Tailwind CSS. It includes sections for showcasing features, pricing, faq and download links. The design is clean and user-friendly, making it suitable for various applications.",
      link: "https://modern-landing-page-pied.vercel.app/",
    },
  ],
};

export const FooterData = {
  icon: RiBracesFill,
  about:
    "I am a Frontend Developer crafting smooth interfaces and occasionally arguing with CSS.",
  ending: "Thanks for stopping by!",
  social: [
    {
      icon: FiLinkedin,
      link: "https://www.linkedin.com/in/sandeep-singh-bhandal-a4804932b/",
    },
    {
      icon: FiGithub,
      link: "https://github.com/sandeep-singh-bhandal",
    },
  ],
  links:[
    {
      heading: "Quick Links",
      links: [
        {
          icon: "",
          name: "Home",
          href: "/",
        },
        {
          icon: "",
          name: "About",
          href: "/about",
        },
        {
          icon: "",
          name: "Projects",
          href: "/projects",
        },
        {
          icon: "",
          name: "Contact",
          href: "/contact",
        },
      ],
    },
    {
      heading: "Let's Connect!",
      links: [
        {
          icon: FaPhoneAlt,
          name: "Phone",
          href: "/",
        },
        {
          icon: IoIosMail,
          name: "Email",
          href: "/",
        },
        {
          icon: FaLocationDot,
          name: "Raipur, Chattisgarh, India",
          href: "/",
        },
      ],
    },
    {
      heading: "Follow Me",
      links: [
        {
          icon: FaInstagram,
          name: "_sunny_310",
          href: "https://www.instagram.com/_sunny_310/",
        },
        {
          icon: FaXTwitter,
          name: "_sunny_3_10",
          href: "https://x.com/Sunny_3_10",
        },
      ],
    },
  ],
};
export const experiences = [
  {
    title: "Demo",
    company_name: "Demo",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
    ],
  },
  {
    title: "Demo",
    company_name: "Demo",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
    ],
  },
  {
    title: "Demo",
    company_name: "Demo",
    // icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
    ],
  },
  {
    title: "Demo",
    company_name: "Demo",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sint odio quod itaque iusto doloremque officia modi, est libero dolor accusantium nihil expedita delectus, commodi quia. Quo recusandae perferendis debitis!",
    ],
  },
];
export const services = [
  {
    title: "Web Developer",
    // icon: web,
  },
  {
    title: "React Native Developer",
    // icon: mobile,
  },
  {
    title: "Backend Developer",
    // icon: backend,
  },
  {
    title: "Content Creator",
    // icon: creator,
  },
];
