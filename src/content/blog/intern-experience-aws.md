---
title: "My Internship Experience at AWS ☁️"
description: ""
date: "August 14, 2025"
readTime: "9 min read"
image: "/blogs/aws.jpeg"
slug: "intern-experience-aws"
author: "Luan Nguyen"
tags:
  ["AWS", "Internship", "Software Engineering", "Bedrock", "Seattle", "Career"]
category: "Career & Experience"
excerpt: "From onboarding challenges to building a proof-of-concept that increased throughput by 10%, here's my complete AWS internship journey including project details, Seattle adventures, and key learnings."
---

_Note: I did sign an NDA, so I can’t go too deep into certain details—but I’ll do my best to capture the essence of it._

## Internship Search

I received my SDE Intern offer on January 1st, 2025, and accepted it just three days later, even though I was still in the middle of interviews with other companies. A few more offers came in afterward, but in the end, I chose _Amazon_.

Previously, I’ve had a mix of experiences working at startups and in a research lab at ASU, but never what I’d call a truly “formal” internship. At previous companies, I contributed heavily to their source code, but I was never given a defined project or paired with a mentor the way I was at Amazon.

At Amazon, you don’t get to pick your team. I was lucky to be placed in [Amazon Bedrock](https://aws.amazon.com/bedrock/), a Generative AI service that offers foundational models (FMs) and tools to deploy and operate agents, specifically on the [Bedrock Data Automation](https://aws.amazon.com/bedrock/bda/) team—a newly launched service with huge potential in the AI space.

![Office view](/blogs/nitro.jpeg)

## Seattle

Seattle was beautiful in the summer. It felt like a city built for exploration. Without a housing stipend, I wouldn’t have been able to afford living there. I ended up choosing a college summer housing option just five minutes from the office, sharing a room with another intern. It honestly felt like freshman year of college all over again.

As for expenses, I burned through my housing stipend faster than expected. I told myself that avoiding cooking and doing dishes would free up time for other things. I tried [Haidilao](https://www.haidilao-inc.com/us) hotpot for the first time. Some of my favorite places were [Pho So Mot](https://www.yelp.com/biz/pho-so-1-seattle), [Chengdu Memory](https://www.chengdumemory.com/), and [Beecher's Handmade Cheese](https://beechershandmadecheese.com/).

## Social life

The best part of the internship for me was meeting other interns. Living in university housing, I met so many people from different backgrounds—all of them kind, humble, and genuinely fun to be around. I had to step out of my comfort zone to connect with so many new faces, but it was absolutely worth it.

Our friend group ended up being about 16 people. Together, we went out explored every part of Seattle, bar-hopping in Capitol Hill and Udistrict, caught comedy shows, hiked Mount Rainier, and even took a weekend trip to Olympic National Park. By the end of the internship, I was genuinely sad to leave. But seeing everyone receive positive feedback from their managers gave me hope that our paths will cross again one day.

I also met interns from Google, Meta, Microsoft, Snowflake, etc. The stereotype that Amazon interns work very hard is definitely true. I think the work culture here naturally pushes us to spend more of our life in the office.

![Olympic National Park](/blogs/olympic.jpeg)

## Project

Here’s the juicy part of the experience:

I was the first intern out of four to join the team, and each of us had our own independent project. According to my mentor, mine was one of the most difficult. That came with plenty of roadblocks to figure out—but also meant I could share my solutions to help the interns who joined after me.

It took me about four weeks just to get fully onboarded. That includes learning the codebase, setting up my personal environment, and essentially recreating the team’s workflow in my own AWS account. Since I didn’t have full permissions as an intern, I spent a lot of time tracking down the right people and asking for access. Eventually, I decided to write an onboarding guide for interns, which ended up being adopted by multiple teams and is now one of the standardized docs used org-wide.

The Bedrock Data Automation workflow operates through a series of discrete steps involving multiple Amazon S3 operations to transfer data between services. My project was to combine two existing services—parallel frame processing and inference—into a single host, so data would be sent directly via HTTPS instead of going through intermediate storage.

While the concept sounded straightforward, the biggest challenge was navigating over 10 different code packages across Java, Python, and TypeScript. Our team didn’t own the inference package, meaning we had very limited knowledge of how it worked. The abstractions within the codebase were intense, but that turned out to be one of the reasons I got much better at reading and understanding complex code. Internal AI tools helped a bit, but they could never give me the full picture.

I had to do a lot of tweaking to get everything working. My mentor, possibly the most cracked engineer I’ve ever met, guided me through the project’s trickiest parts. During my midpoint feedback, I still hadn’t fully delivered the original goals, but my manager reassured me that navigating roadblocks is part of the job. I never received negative feedback from my team—they knew my project was one of the hardest.

At one point, I was working 60-hour weeks. Along the way, I even fixed a bug in our team’s Lambda function that was blocking a new resource from updating in our infrastructure. Finally, on the Friday of my second-to-last week, I successfully made the first inference call. I spent that weekend load testing, refining the project, and preparing for my final presentation.

The intern project ultimately served as a solid [Proof of Concept](https://www.atlassian.com/work-management/project-management/proof-of-concept) (POC). Previously, due to S3 throttling limits on how much data could be uploaded, many heavy workloads failed to complete. This forced the team to implement complex workarounds to stay within rate limits. My project fully solved this by eliminating the need to transfer data through intermediate storage, while also increasing throughput efficiency by roughly 10%.

![Where my project sits in the system](/blogs/project.png)

## Conclusion

I wrapped up my internship with a final presentation to my team and adjacent sister teams. It was around 50 people in total. Instead of focusing on the roadblocks I’d faced, I decided to highlight the different approaches we explored and ensure the audience understood the high-level design of the project.

The feedback was overwhelmingly positive. Both my manager and mentor expressed their interest in having me join full-time. In my last week, we held several working sessions with other engineers to push out additional results—proof that the project could actually be production-ready. I had been told early on that most intern projects never make it to production, so hearing that mine might was incredibly rewarding.

On my final day, I sent out thank-you messages on Slack to my team and the recruiting HR team, gave my last hugs, and returned my laptop.

_Thank you to my team at AWS for an incredible summer of learning and growth._

![Mt. Rainier](/blogs/rainier.jpeg)
