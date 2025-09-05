---
title: "Wireless Systems - Research"
layout: textlay
excerpt: "Wireless Systems -- Research"
sitemap: false
permalink: /research/digital-twins/
---

{::nomarkdown}
<div class="container research-page-container">

  <!-- Main Title -->
  <h1>Digital-Twins for Sensing</h1>

  <p>Enabling Wireless Sensors via deisgning simulators, and novel perception models for aiding Next Generation Wireless Digital Twin models.</p>
  
  <p>To facilitate the seamless integration of wireless sensors into our everyday applications, a critical element currently lacking is the availability of expansive datasets and real-time integrations within simulators tailored for large-scale deployments and assessments. Drawing inspiration from recent strides in Digital-Twin technologies across diverse domains, my research is poised to take the next leap forward. This involves crafting a sophisticated framework for efficient perception, simulator design, and the delivery of real-time feedback from the digital twin of the simulator to real-world environments.</p>

  <div style="margin: 30px 0;">
    <img src="{{ site.baseurl }}/images/Research_Pics/Digital_Twin/digital_twin-800.webp" alt="Localization and Navigation" class="img-responsive">
  </div>

  <p>For localization across all kinds of different environments for example we would need large models and larger datasets, Which demands for readily available RF-simulators, and the current simulators are still lacking. So, I would like to develop physics inspired ML models like the diffusion models to create wireless simulators that are closer to the real world scenarios. Which could help for a more wider deployment of these sensors by the design of ML-based digital twins by making them readily integrable into simulators like unity and gazebo</p>


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