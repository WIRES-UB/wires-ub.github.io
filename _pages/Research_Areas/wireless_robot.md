---
title: "Wireless Systems - Research"
layout: textlay
excerpt: "Wireless Systems -- Research"
sitemap: false
permalink: /research/robotics/
---

{::nomarkdown}
<div class="container research-page-container">

  <!-- Main Title -->
  <h1>Wireless for Robotics</h1>

  <p>Developing novel Wireless Sensor modalities to aid Robot Automation.</p>
  
  <p>A recent spur of interest in indoor robotics has increased the importance of robust simultaneous localization and mapping algorithms in indoor scenarios. This robustness is typically provided by the use of multiple sensors which can correct each others’ deficiencies. In this vein, exteroceptive sensors, like cameras and LiDAR’s, employed for fusion are capable of correcting the drifts accumulated by wheel odometry or inertial measurement units (IMU’s). However, these exteroceptive sensors are deficient in highly structured environments and dynamic lighting conditions. This letter will present WiFi as a robust and straightforward sensing modality capable of circumventing these issues.</p>

  <div style="margin: 30px 0;">
    <img src="{{ site.baseurl }}/images/Research_Pics/Robotics/localization-800.webp" alt="Localization and Navigation" class="img-responsive">
  </div>

  <p>The idea is to be able to readily integrate Wi-Fi as an alternative to GPS for indoor navigation for robotics as shown above. We have already demonstrated the use of WiFI for robotic navigation as shown above, where the robots movement over three timestamp are shown in the fiture at the center, and have also designed a toolbox that can readily integrate Wi-Fi for robotics into the existing SLAM algorithms.</p>


  <!-- Publications Section -->
  <h2>References</h2>
  
  <a href="https://wcsng.ucsd.edu/p2slam/" class="research-box">
    <div class="row vertical-align">
      <div class="col-md-6">
        <img src="{{ site.baseurl }}/images/Research_Pics/Robotics/p2slam-800.webp" alt="Privacy for Sensing" class="img-responsive">
      </div>
      <div class="col-md-6">
        <h3>P2slam: Bearing based wifi slam for indoor robots</h3>
        <p>Aditya Arun, Roshan Ayyalasomayajula, William Hunter, and Dinesh Bharadia</p>
        <p><i>IEEE Robotics and Automation Letters</i>, 2022</p>
      </div>
    </div>
  </a>

  <a href="https://wcsng.ucsd.edu/viwid" class="research-box">
    <div class="row vertical-align">
      <div class="col-md-6">
        <img src="{{ site.baseurl }}/images/Research_Pics/Robotics/viwid-800.webp" alt="Privacy for Sensing" class="img-responsive">
      </div>
      <div class="col-md-6">
        <h3>ViWiD: Leveraging WiFi for Robust and Resource-Efficient SLAM</h3>
        <p>Aditya Arun, William Hunter, Roshan Ayyalasomayajula, and Dinesh Bharadia</p>
        <p><i>arXiv preprint arXiv:2209.08091</i>, 2022</p>
      </div>
    </div>
  </a>

  <a href="https://wcsng.ucsd.edu/locap/" class="research-box">
    <div class="row vertical-align">
      <div class="col-md-6">
        <img src="{{ site.baseurl }}/images/Research_Pics/Digital_Twin/locap_deployed-800.webp" alt="Privacy for Sensing" class="img-responsive">
      </div>
      <div class="col-md-6">
        <h3>LocAP: Autonomous millimeter accurate mapping of WiFi infrastructure</h3>
        <p>Roshan Ayyalasomayajula, Aditya Arun, Chenfeng Wu, Shrivatsan Rajagopalan, Shreya Ganesaraman, Aravind Seetharaman, Ish Kumar Jain, and Dinesh Bharadia</p>
        <p><i>In 17th USENIX Symposium on Networked Systems Design and Implementation (NSDI 20)</i>, 2020</p>
      </div>
    </div>
  </a>

</div>
{:/nomarkdown}