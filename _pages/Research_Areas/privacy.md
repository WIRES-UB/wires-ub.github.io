---
title: "Wireless Systems - Research"
layout: textlay
excerpt: "Wireless Systems -- Research"
sitemap: false
permalink: /research/privacy/
---

{::nomarkdown}
<div class="container research-page-container">

  <!-- Main Title -->
  <h1>Privacy for Sensing
  </h1>

  <p>Ensuring that the Sensor information from Wireless Sensors does not reveal any user or device information.</p>
  
  <p>Working with RF sensors assisted systems for the past few years, I have come to realize their great strengths in sensing objects passively. But it also means someone else can use RF-sensors to invade my privacy by passively listening in to the RF-signals I am transmitting. And so, I have come to realize the beast I have created by enabling acurate and deployable RF location and context systems. My latest interests in developing security and privacy solutions for RF sensors. Where like I said anyone can passively listen in to compromise one’s privacy. Where I specifically want to start by looking at more physical layer information aided solutions for privacy at the edge and also look into privacy and security at the cloud which let’s say is running Dloc to predict user’s location. Where more solutions along the lines of federated learning ad differential privacy would be needed</p>

  <div style="margin: 30px 0;">
    <img src="{{ site.baseurl }}/images/Research_Pics/Privacy/mirage-800.webp" alt="Localization and Navigation" class="img-responsive">
  </div>

  <p>The attacker can either passively listen through a passive device or even compromise the sensor network to compromise the user sensed information like localization and other aspects. So, I worked towards developing a RF-privacy system that when turned ON can confuse the attacker or the snooper regarding the device’s location in [MIRAGE](https://wcsng.ucsd.edu/mirage/). We can further develop differential-privacy and authentication systems enabled byt federated-learning approaches to enable privacy for wireless sensors and learning based wireless sensing systems.</p>


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