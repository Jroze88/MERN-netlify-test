/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "JRoze",
  logo_name: "{Full Stack // Mobile Apps}",
  nickname: "JRoze88 / Jroze",
  full_name: "Jano Roze",
  subTitle:
    "Full Stack Developer, React-Native App Deployment, Servers, Storage, Solutions.",
  resumeLink:
    "https://drive.google.com",
  mail: "mailto:JR@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/JRoze88",
  linkedin: "https://www.linkedin.com/in/JRoze- -ba8476140/",
  gmail: "JRoze 99@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "https://twitter.com/JRoze_55",
  instagram: "https://www.instagram.com/jroze/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🌀 Helping build and launch your big idea or tech solution",
        "🌀 Implementing quality, scalable website or mobile app UI/UX Design",
        "🌀 Creating application Back-End functionality web servers",
        "🌀 Creating mobile apps for use on PC, Android and Apple devices",        
        "🌀 Applying efficient design principles to save time and money on upkeep and development",
        "🌀 Using a wide range of industry leading technologies",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "Ubuntu",
          fontAwesomeClassname: "simple-icons:ubuntu",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "fa-linux",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Visual Basic",
          fontAwesomeClassname: "simple-icons:dot-net",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android App Development",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "iPhone",
          fontAwesomeClassname: "simple-icons:apple",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    // {
    //   title: "Crushin' Bugs",
    //   fileName: "Deez"
    // },
    {
      title: "Cloud Hosting",
      fileName: "CloudInfraImg",
      skills: [
        "☁️ Real-World experience deploying and managing services on many different popular platforms",
        "☁️ Using cloud based services and automation to meet needs and facilitate overhead",
        "☁️ Customizing Tech stack and flow to integrate with any given Cloud"
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Columbia Engineering",
      subtitle: "Executive Education in Engineering",
      logo_path: "sal.png",
      alt_name: "CU",
      duration: "2017 - 2019",
      descriptions: [
        "🌀 I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "🌀 I have also completed various online courses for ML/DL, Web Development, Mobile App Development, etc.",
        "🌀 I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
      ],
      website_link: "https://www.sal.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google Code-In Student",
      subtitle: "2014-2017",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Google Summer of Code Mentor",
      subtitle: "2017 / 2018 / 2020",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "InOut 4.0 Winner #2",
      subtitle: "2017",
      logo_path: "ino.png",
      certificate_link: " ",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
    {
      title: "Google Code-In Mentor",
      subtitle: "2017 / 2018 / 2019",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#b190b0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Code",
  subtitle: "Scripts, Apps, Snippets and Functions",
  description:
    "Hobbyist and production code for everything from processing information, automating content creation or simplifying data to 3D Printing",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Recent Work",
      experiences: [
        {
          title: "App Developer",
          company: "HelloHannahGroup",
          company_url: "https://github.com/Jroze88/React-Native-Personal-Finance",
          logo_path: "beispiel2.gif",
          duration: "June 2020 - October 2021",
          location: "New York, NY",
          description:
            "Solo developer on a team launching a personal finance app with p2p functionality. React-Native client for Apple and Android, AWSBeanstalk + Node server and Storage",
          color: "#2962FF",
        },
      ],
    },
  
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "JRoze2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "https://medium.com/@JRoze 99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "50",
      name: "Automated Content Creation for Gaming Site Community",
      url: "https://github.com/Jroze88/wordpress-node-server-ottg",
      description: "Wordpress site with Node server that periodically checks and automatically scrapes websites/youtube videos of all content creators in the community, automates article/thumbnail/tagging and post creation to the main page",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "PHP",
          iconifyClass: "logos-PHP"
        },
        {
          name: "Apache",
          iconifyClass: "logos-apache"
        }
      ],
    },
    {
      id: "51",
      name: "Game of Thrones Tabletop Tournament Tracker",
      url: "https://github.com/Jroze88/tournament-tracking-methods",
      description: "Client for entering results of tabletop tournaments, registered users are tracked and ranked globally. Automated pairings and tournament management.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },

     {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "52",
      name: "3D Scanning with Xbox Kinect",
      url: "https://github.com/Jroze88/3D-STL-KINECTV2",
      description: "Attempts to build 3d image mathematically from a point cloud generated by an Xbox Kinect as an object turns on a rotating platform",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python"
        },
      ]
    },
    {
      id: "0",
      name: "Portfolio",
      url: "https://github.com/JRoze88/portfolio-2022",
      description: "This site!",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs"
        }
      ],
    },
    {
      id: "5",
      name: "Project Health Card",
      url: "",
      description:
        "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "6",
      name: "Fly in Soup",
      url: " ",
      description:
        "App that pulls info from a surprisingly well maintained municipal health inspection API and populates it to a map",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    }
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
