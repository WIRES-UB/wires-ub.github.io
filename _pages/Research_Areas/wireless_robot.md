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
  <hr>
  <div class="publications-list">
    {% for publi in site.data.publist %}
      {% if publi.category == "localization" %}
        <div class="publication-item">
          <p class="pub-title">{{ publi.title }}</p>
          <p class="pub-authors"><em>{{ publi.authors }}</em></p>
          <a href="{{ publi.link.url }}" target="_blank">{{ publi.link.display }}</a>
        </div>
      {% endif %}
    {% endfor %}
  </div>

</div>
{:/nomarkdown}