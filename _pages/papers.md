---
layout: page
title: papers
permalink: /papers/
description: A collection of cool and interesting papers I have read over time
nav: true
nav_order: 3
---

<div class="papers">
{% assign paper_posts = site.posts | where_exp: "post", "post.tags contains 'papers'" | sort: "date" | reverse %}
{% for post in paper_posts %}
<div class="paper-entry">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p class="paper-meta">{{ post.date | date: "%B %Y" }} &nbsp;·&nbsp; {{ post.authors }}</p>
  <p>{{ post.description }}</p>
</div>
<hr>
{% endfor %}
</div>