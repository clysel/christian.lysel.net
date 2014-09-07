---
layout: post
---
test3

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>


test4 {% for category in site.categories %}
      <li>{{ category }}
    {% endfor %}



test5 {% for category in site.categories %}
      <li>{{ category }}
    {% for item in site.categories.category %}
    {% endfor %}
    {% endfor %}


