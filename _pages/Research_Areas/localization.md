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