---
layout: page
title: Projects
permalink: /projects/
description: A collection of projects I have done over time
nav: true
nav_order: 4
---

<div class="projects">
{% assign project_posts = site.posts | where_exp: "post", "post.tags contains 'projects'" | sort: "date" | reverse %}
{% for post in project_posts %}
<div class="paper-entry">
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p class="paper-meta">{{ post.date | date: "%B %Y" }}</p>
  <p>{{ post.description }}</p>
</div>
<hr>
{% endfor %}
</div>