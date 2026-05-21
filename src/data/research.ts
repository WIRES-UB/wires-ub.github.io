import { ResearchArea } from "@/types";

export const researchAreas: ResearchArea[] = [
  {
    slug: "localization",
    title: "Localization and Navigation",
    shortTitle: "Localization & Navigation",
    cardDescription:
      "Enabling indoor positioning, localization, navigation, and tracking using wireless sensors.",
    heroImage: "/images/research/Localization_and_Navigation.gif",
    bodyText: [
      "Enabling Indoor positioning, localization, navigation, and tracking using wireless sensors.",
      "Location services, fundamentally, rely on two components: a mapping system and a positioning system. The mapping system provides the physical map of the space, and the positioning system identifies the position within the map. Outdoor location services have thrived over the last couple of decades because of well-established platforms for both these components (e.g. Google Maps for mapping, and GPS for positioning). In contrast, indoor location services haven't caught up because of the lack of reliable mapping and positioning frameworks, as GPS is known not to work indoors. There are many important problems to be solved to enable real-time positioning and tracking for INdoors that can enable aplications ranging from navigation and localization that demand sub-meter accuracy, to Robot Automation, tracking, and last-mile delivery that require sub-10cm accuracy to VR Tracking and other Mixed Reality systems that need sub-cm accurate tracking of either the users, user devices, robots or IoT devices.",
      "Two of the major issues for localization and navigation using wireless-sensors is the need to overcome two major issues with wireless transmissions: Multipath and Non-Line of Sight issues. My research focuses on solving these issues to achieve accurate indoor localization and navigation for Wi-Fi devices in DLoc and open-sourced the first largest dataset called WILD; also to achieve low-power localization using BLE devices in BLoc; and UWB based industrial assets localization based on the upcoming industrial FiRa standards in ULoc that achieves 14x better battery life while achiieving 5x times better localization accuracy and stability compared to the COTS devices.",
    ],
    detailImages: [
      "/images/research/localization/wireless_sensing.svg",
      "/images/research/localization/localization_issues-800.webp",
    ],
    references: [
      {
        title:
          "ULoc: Low-power, Scalable and cm-accurate UWB-tag Localization and Tracking for Indoor Applications",
        authors:
          "Minghui Zhao, Tyler Chang, Aditya Arun, Roshan Ayyalasomayajula, Chi Zhang, and Dinesh Bharadia",
        venue:
          "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies",
        year: 2021,
        url: "https://wcsng.ucsd.edu/uloc/",
        image: "/images/research/localization/uloc-images-large-800.webp",
      },
      {
        title:
          "Sound Source Localization Based on Multi-task Learning and Image Translation Network",
        authors:
          "Yifan Wu, Roshan Ayyalasomayajula, Michael J Bianco, Dinesh Bharadia, and Peter Gerstoft",
        venue: "The Journal of the Acoustical Society of America",
        year: 2021,
        url: "https://doi.org/10.1121/10.0005352",
        image: "/images/research/localization/dloc-800.webp",
      },
      {
        title:
          "SSLIDE: Sound Source Localization for Indoors based on Deep Learning",
        authors:
          "Yifan Wu, Roshan Ayyalasomayajula, Michael J Bianco, Dinesh Bharadia, and Peter Gerstoft",
        venue:
          "ICASSP 2021 — IEEE International Conference on Acoustics, Speech and Signal Processing",
        year: 2021,
        url: "https://doi.org/10.1109/ICASSP39728.2021.9415109",
        image: "/images/research/localization/dloc-800.webp",
      },
      {
        title: "Deep Learning Based Wireless Localization for Indoor Navigation",
        authors:
          "Roshan Ayyalasomayajula, Aditya Arun, Chenfeng Wu, Sanatan Sharma, Abhishek Rajkumar Sethi, Deepak Vasisht, and Dinesh Bharadia",
        venue:
          "26th Annual International Conference on Mobile Computing and Networking (MobiCom)",
        year: 2020,
        url: "https://wcsng.ucsd.edu/dloc/",
        image: "/images/research/localization/dloc-800.webp",
      },
      {
        title: "BLoc: CSI-based Accurate Localization for BLE Tags",
        authors:
          "Roshan Ayyalasomayajula, Deepak Vasisht, and Dinesh Bharadia",
        venue:
          "14th International Conference on emerging Networking EXperiments and Technologies (CoNEXT)",
        year: 2018,
        url: "https://wcsng.ucsd.edu/bloc/",
        image: "/images/research/localization/bloc_3rd_contribution-800.webp",
      },
    ],
  },
  {
    slug: "digital-twins",
    title: "Digital-Twins for Sensing",
    shortTitle: "Digital-Twins",
    cardDescription:
      "Enabling wireless sensors via designing simulators and novel perception models for next-generation wireless digital twin systems.",
    heroImage: "/images/research/digital_twin.jpg",
    bodyText: [
      "Enabling Wireless Sensors via deisgning simulators, and novel perception models for aiding Next Generation Wireless Digital Twin models.",
      "To facilitate the seamless integration of wireless sensors into our everyday applications, a critical element currently lacking is the availability of expansive datasets and real-time integrations within simulators tailored for large-scale deployments and assessments. Drawing inspiration from recent strides in Digital-Twin technologies across diverse domains, my research is poised to take the next leap forward. This involves crafting a sophisticated framework for efficient perception, simulator design, and the delivery of real-time feedback from the digital twin of the simulator to real-world environments.",
      "For localization across all kinds of different environments for example we would need large models and larger datasets, Which demands for readily available RF-simulators, and the current simulators are still lacking. So, I would like to develop physics inspired ML models like the diffusion models to create wireless simulators that are closer to the real world scenarios. Which could help for a more wider deployment of these sensors by the design of ML-based digital twins by making them readily integrable into simulators like unity and gazebo",
    ],
    detailImages: [
      "/images/research/digital-twins/digital_twin-800.webp",
    ],
    references: [
      {
        title:
          "LocAP: Autonomous Millimeter Accurate Mapping of WiFi Infrastructure",
        authors:
          "Roshan Ayyalasomayajula, Aditya Arun, Chenfeng Wu, Shrivatsan Rajagopalan, Shreya Ganesaraman, Aravind Seetharaman, Ish Kumar Jain, and Dinesh Bharadia",
        venue:
          "17th USENIX Symposium on Networked Systems Design and Implementation (NSDI)",
        year: 2020,
        url: "https://wcsng.ucsd.edu/locap/",
        image: "/images/research/digital-twins/locap_deployed-800.webp",
      },
    ],
  },
  {
    slug: "robotics",
    title: "Wireless for Robotics",
    shortTitle: "Wireless for Robotics",
    cardDescription:
      "Developing novel wireless sensor modalities to aid robot automation and enable robust indoor SLAM.",
    heroImage: "/images/research/wireless_for_robotics.jpg",
    bodyText: [
      "Developing novel Wireless Sensor modalities to aid Robot Automation.",
      "A recent spur of interest in indoor robotics has increased the importance of robust simultaneous localization and mapping algorithms in indoor scenarios. This robustness is typically provided by the use of multiple sensors which can correct each others' deficiencies. In this vein, exteroceptive sensors, like cameras and LiDAR's, employed for fusion are capable of correcting the drifts accumulated by wheel odometry or inertial measurement units (IMU's). However, these exteroceptive sensors are deficient in highly structured environments and dynamic lighting conditions. This letter will present WiFi as a robust and straightforward sensing modality capable of circumventing these issues.",
      "The idea is to be able to readily integrate Wi-Fi as an alternative to GPS for indoor navigation for robotics as shown above. We have already demonstrated the use of WiFI for robotic navigation as shown above, where the robots movement over three timestamp are shown in the fiture at the center, and have also designed a toolbox that can readily integrate Wi-Fi for robotics into the existing SLAM algorithms.",
    ],
    detailImages: [
      "/images/research/robotics/localization-800.webp",
    ],
    references: [
      {
        title: "P2SLAM: Bearing Based WiFi SLAM for Indoor Robots",
        authors:
          "Aditya Arun, Roshan Ayyalasomayajula, William Hunter, and Dinesh Bharadia",
        venue: "IEEE Robotics and Automation Letters",
        year: 2022,
        url: "https://wcsng.ucsd.edu/p2slam/",
        image: "/images/research/robotics/p2slam-800.webp",
      },
      {
        title: "ViWiD: Leveraging WiFi for Robust and Resource-Efficient SLAM",
        authors:
          "Aditya Arun, William Hunter, Roshan Ayyalasomayajula, and Dinesh Bharadia",
        venue: "arXiv preprint arXiv:2209.08091",
        year: 2022,
        url: "https://wcsng.ucsd.edu/viwid",
        image: "/images/research/robotics/viwid-800.webp",
      },
      {
        title:
          "LocAP: Autonomous Millimeter Accurate Mapping of WiFi Infrastructure",
        authors:
          "Roshan Ayyalasomayajula, Aditya Arun, Chenfeng Wu, Shrivatsan Rajagopalan, Shreya Ganesaraman, Aravind Seetharaman, Ish Kumar Jain, and Dinesh Bharadia",
        venue:
          "17th USENIX Symposium on Networked Systems Design and Implementation (NSDI)",
        year: 2020,
        url: "https://wcsng.ucsd.edu/locap/",
        image: "/images/research/digital-twins/locap_deployed-800.webp",
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy for Sensing",
    shortTitle: "Privacy for Sensing",
    cardDescription:
      "Ensuring that the Sensor information from Wireless Sensors does not reveal any user or device information.",
    heroImage: "/images/research/privacy_for_sensing.jpg",
    bodyText: [
      "Ensuring that the Sensor information from Wireless Sensors does not reveal any user or device information.",
      "Working with RF sensors assisted systems for the past few years, I have come to realize their great strengths in sensing objects passively. But it also means someone else can use RF-sensors to invade my privacy by passively listening in to the RF-signals I am transmitting. And so, I have come to realize the beast I have created by enabling acurate and deployable RF location and context systems. My latest interests in developing security and privacy solutions for RF sensors. Where like I said anyone can passively listen in to compromise one's privacy. Where I specifically want to start by looking at more physical layer information aided solutions for privacy at the edge and also look into privacy and security at the cloud which let's say is running Dloc to predict user's location. Where more solutions along the lines of federated learning ad differential privacy would be needed",
      "The attacker can either passively listen through a passive device or even compromise the sensor network to compromise the user sensed information like localization and other aspects. So, I worked towards developing a RF-privacy system that when turned ON can confuse the attacker or the snooper regarding the device's location in MIRAGE. We can further develop differential-privacy and authentication systems enabled byt federated-learning approaches to enable privacy for wireless sensors and learning based wireless sensing systems.",
    ],
    detailImages: [
      "/images/research/privacy/mirage-800.webp",
    ],
    references: [
      {
        title:
          "Users are Closer than they Appear: Protecting User Location from WiFi APs",
        authors:
          "Roshan Ayyalasomayajula, Aditya Arun, Wei Sun, and Dinesh Bharadia",
        venue:
          "24th International Workshop on Mobile Computing Systems and Applications (HotMobile)",
        year: 2023,
        url: "https://wcsng.ucsd.edu/mirage/",
        image: "/images/research/privacy/mirage-800_1.webp",
      },
    ],
  },
];
