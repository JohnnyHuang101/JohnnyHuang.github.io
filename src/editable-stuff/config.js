// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#ffe5e9, #ffc1cc, #ff99b3, #ff739a, #ff4c81",
  firstName: "Johnny",
  middleName: "",
  lastName: "Huang",
  message: "Interested in Computer Vision, Generative AI, NLP and Data Analysis.",
  icons: [
    {
      image: "fa-github",
          url: "https://github.com/JohnnyHuang101",
    },
    {
      image: "fa-linkedin",
        url: "https://www.linkedin.com/in/johnny-li-huang/",
      },
      {
          image: "fa-hackerrank",
          url: "https://leetcode.com/u/johnnybaguettes/",
      },
      {
        image: "fas fa-share-alt",
        url: "mailto:h.johnny@wustl.edu",
      },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/johnny_2024.jpg"),
  imageSize: 400,
  message:
        "Hi I'm Johnny, and welcome to my profile! 😄😄  I'm currently a Junior at Washington University in St. Louis, pursuing a B.S. in Computer Science + Mathematics. Originally from ShenZhen China, I moved to the U.S. at age 12 and grew up in the Bay Area (specifically around San Mateo & Foster City). Fun fact: I have an identical twin brother, Johnson, who’s also studying CS and Math at UC Berkeley! \n\nMy primary interests lie in computer vision and generative AI, and I’m enthusiastic about leveraging these fields to build tangible solutions. I have hands-on experience as a full-stack developer, where I deployed end-to-end ML tools using Python and framworks like OpenCV, Pytorch, Tensorflow, and Huggingface. Additionally, I have a strong background in data analytics, including work with databases including MariaDB, Postgre, NoSQL and financial analysis algorithms using tools like R and MATLAB. I also have experience with computing using tools like PySpark and Scala on the cloud using tools such as AWS, Docker, and Azure. \n\nI built this simple portfolio using JS, HTML, Node, and React to showcase a few of my projects. They're pretty cool, so please check them out on my GitHub! 😄",
  resume: require("../editable-stuff/Job-Resume-Oct-16th-2024-Johnny.pdf"),
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "JohnnyHuang101", 
  reposLength: 4,
    specificRepos: ["Halu--OpenBMB-4B-Tuned-and-Inference", "VAE_Debiasing_KLresampled_CeleryA", "UNET_inverse_solverandPnP",
        "RL_maze_pacman", "Smaller_projects_LSTMRNN-convGAN", "Petrichor_website_eventsApp", "Verizon-BlackScholes_CRR", "Raw_unet_implemented_byJohnny"],
};


const getInTouch = {
    show: true,
    heading: "Getting In Touch",
    message:
        "Please contact me at my email linked at the top of the website!"
};


export { navBar, mainBody, about, repos, getInTouch};
