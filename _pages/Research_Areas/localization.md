---
title: "Wireless Systems - Research"
layout: textlay
excerpt: "Wireless Systems -- Research"
sitemap: false
permalink: /research/localization/
---


{::nomarkdown}
<div class="container research-page-container">

  <!-- Main Title -->
  <h1>Localization and Navigation</h1>

  <p>Enabling Indoor positioning, localization, navigation, and tracking using wireless sensors.</p>

  <div style="margin: 30px 0;">
    <img src="{{ site.baseurl }}/images/Research_Pics/Localization/wireless_sensing.svg" alt="Localization and Navigation" class="img-responsive">
  </div>

  <p>Location services, fundamentally, rely on two components: a mapping system and a positioning system. The mapping system provides the physical map of the space, and the positioning system identifies the position within the map. Outdoor location services have thrived over the last couple of decades because of well-established platforms for both these components (e.g. Google Maps for mapping, and GPS for positioning). In contrast, indoor location services haven’t caught up because of the lack of reliable mapping and positioning frameworks, as GPS is known not to work indoors. There are many important problems to be solved to enable real-time positioning and tracking for INdoors that can enable aplications ranging from <strong>navigation and localization</strong> that demand sub-meter accuracy, to <strong>Robot Automation, tracking, and last-mile delivery</strong> that require sub-10cm accuracy to <strong>VR Tracking and other Mixed Reality</strong> systems that need sub-cm accurate tracking of either the users, user devices, robots or IoT devices.</p>

  <div style="margin: 30px 0;">
    <img src="{{ site.baseurl }}/images/Research_Pics/Localization/localization_issues-800.webp" alt="Localization and Navigation" class="img-responsive">
  </div>

  <p>Two of the major issues for localization and navigation using wireless-sensors is the need to overcome two major issues with wireless transmissions: Multipath and Non-Line of Sight issues. My research focuses on solving these issues to achieve accurate indoor localization and navigation for Wi-Fi devices in <a href="https://wcsng.ucsd.edu/dloc/" target="_blank">DLoc</a> and open-sourced the first largest dataset called <a href="https://wcsng.ucsd.edu/wild/" target="_blank">WILD</a>; also to achieve low-power localization using BLE devices in <a href="https://wcsng.ucsd.edu/bloc/" target="_blank">BLoc</a>; and UWB based industrial assets localization based on the upcoming industrial FiRa standards in <a href="https://wcsng.ucsd.edu/uloc/" target="_blank">ULoc</a> that achieves 14x better battery life while achiieving 5x times better localization accuracy and stability compared to the COTS devices.</p>
  <!-- Publications Section -->
  <h2>References</h2>
  
  <a href="https://wcsng.ucsd.edu/uloc/" class="research-box">
    <div class="row vertical-align">
      <div class="col-md-6">
        <img src="{{ site.baseurl }}/images/Research_Pics/Localization/uloc-images-large-800.webp" alt="Privacy for Sensing" class="img-responsive">
      </div>
      <div class="col-md-6">
        <h3>Uloc: Low-power, scalable and cm-accurate uwb-tag localization and tracking for indoor applications</h3>
        <p>Minghui Zhao, Tyler Chang, Aditya Arun, Roshan Ayyalasomayajula, Chi Zhang, and Dinesh Bharadia</p>
        <p><i>Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies</i>, 2021</p>
      </div>
    </div>
  </a>

  <a href="" class="research-box">
    <div class="row vertical-align">
      <div class="col-md-6">
        <img src="{{ site.baseurl }}/images/Research_Pics/Localization/dloc-800.webp" alt="Privacy for Sensing" class="img-responsive">
      </div>
      <div class="col-md-6">
        <h3>Sound source localization based on multi-task learning and image translation network</h3>
        <p>Yifan Wu, Roshan Ayyalasomayajula, Michael J Bianco, Dinesh Bharadia, and Peter Gerstoft</p>
        <p><i>The Journal of the Acoustical Society of America</i>, 2021</p>
      </div>
    </div>
  </a>

  <a href="https://doi.org/10.1109/ICASSP39728.2021.9415109" class="research-box">
    <div class="row vertical-align">
      <div class="col-md-6">
        <img src="{{ site.baseurl }}/images/Research_Pics/Localization/dloc-800.webp" alt="Privacy for Sensing" class="img-responsive">
      </div>
      <div class="col-md-6">
        <h3>Sslide: Sound source localization for indoors based on deep learning</h3>
        <p>Yifan Wu, Roshan Ayyalasomayajula, Michael J Bianco, Dinesh Bharadia, and Peter Gerstoft</p>
        <p><i>In ICASSP 2021-2021 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)</i>, 2021</p>
      </div>
    </div>
  </a>

  <a href="https://wcsng.ucsd.edu/dloc/" class="research-box">
    <div class="row vertical-align">
      <div class="col-md-6">
        <img src="{{ site.baseurl }}/images/Research_Pics/Localization/dloc-800.webp" alt="Privacy for Sensing" class="img-responsive">
      </div>
      <div class="col-md-6">
        <h3>Deep learning based wireless localization for indoor navigation</h3>
        <p>Roshan Ayyalasomayajula, Aditya Arun, Chenfeng Wu, Sanatan Sharma, Abhishek Rajkumar Sethi, Deepak Vasisht, and Dinesh Bharadia</p>
        <p><i>In Proceedings of the 26th Annual International Conference on Mobile Computing and Networking</i>, 2020</p>
      </div>
    </div>
  </a>

  <a href="https://wcsng.ucsd.edu/bloc/" class="research-box">
    <div class="row vertical-align">
      <div class="col-md-6">
        <img src="{{ site.baseurl }}/images/Research_Pics/Localization/bloc_3rd_contribution-800.webp" alt="Privacy for Sensing" class="img-responsive">
      </div>
      <div class="col-md-6">
        <h3>BLoc: CSI-based accurate localization for BLE tags</h3>
        <p>Roshan Ayyalasomayajula, Deepak Vasisht, and Dinesh Bharadia</p>
        <p><i>In Proceedings of the 14th International Conference on emerging Networking EXperiments and Technologies</i>, 2018</p>
      </div>
    </div>
  </a>
</div>
{:/nomarkdown}