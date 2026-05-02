---
title: "My Internship Experience at FOX 📺"
description: ""
date: "April 18, 2026"
readTime: "15 min read"
image: "/blogs/fox.JPG"
slug: "intern-experience-fox"
author: "Luan Nguyen"
tags:
  [
    "FOX",
    "Internship",
    "Software Engineering",
    "FOX Tech",
    "FOX Sports",
    "Career",
  ]
category: "Career & Experience"
excerpt: ""
---

_Note: I did sign an NDA, so I can’t go too deep into certain details, but I’ll do my best to capture the essence of it._

## Internship Search

The FOX internship found me more than I found it. When the email from the campus team showed up, I had completely forgotten I applied. It turned out the role was actually for Spring 2026. I got advice from a friend, spent two weeks reading up on the company, and ended up with an offer on December 23rd, the day before Christmas, for the Broadcast Engineering team. 

The interview itself was relaxed and focused on practical experience. We spent most of it talking about my AWS project and how it mapped to the work at FOX. A few technical questions came up in the mix, but it felt more like a vibe check than a coding interview.

After coming back from Seattle, I’d planned to spend the spring heads-down on school and personal projects. Taking this on meant stacking a full-time commitment on top of a full course load, and it was the first time I’d really had to decide what I was willing to sacrifice to keep everything moving. It stretched me in a way since there was no clean container for it - just overlapping priorities I had to sort out week by week.

## FOX Technology Office

The FOX Technology office handles the entire company’s media infrastructure. It sits inside [ASU Research Park](https://asuresearchpark.com/), about twenty minutes from my house. During the interview I mentioned I’d gone fishing nearby and noticed the building from outside, and I think my managers liked that.

On my first day, my manager walked me around the office and introduced me to the other interns on the team. It’s an open, modern space with lots of amenities: foosball, a PS5, a gym, a coffee machine, a Starbucks. Broadcast interns received an HP laptop, which was its own adjustment since I hadn’t touched a Windows machine since 2018. 

I tried sparkling water for the first time that week, and it became one of my favorite drinks.

![FOX Tech office](/blogs/foxtech.jpeg)

## Social life

Like at AWS, the best part of the internship was the meeting other interns. There were four of us on Broadcast Engineering and four more on Video and Distribution Engineering. We’d meet up for lunch every day, play foosball, and wander around the Research Park. They all go to ASU too, so it didn’t take long for us to click.

My days usually started around 9AM and wrapped up by 2PM, with the rest of the afternoon split between school and other things. The team had a lot in common outside of work. We talked constantly about whatever new AI tool had dropped that week, along with hackathons and personal life. We'd also meet up outside of work - going fishing at [McCormick Ranch](https://en.wikipedia.org/wiki/McCormick_Ranch) in Scottsdale and playing pickleball every night.

![Pickleballing](/blogs/picklr.jpg)


## Project

Here’s the motivation behind the project: On a Sunday football game, FOX broadcasts a national feed out to its affiliate stations across the country. With 200+ affiliates airing the same game at the same time, if one of them shows the wrong content, there’s no automated way to catch it. We usually only find out once a customer complains, and by then we’ve already lost money.

The question our team was trying to answer: _how do we verify content correctness across affiliates, independent of ad insertions and latency differences, instead of just measuring signal health?_ And it had to be automated and scalable, because FOX’s infrastructure spans 15+ stations and 200+ affiliates.

So we built an automated system to do exactly that. At a high level, it ingests both the upstream FOX feed and the downstream affiliate feeds in parallel, runs a series of analyses across video, audio, and auxiliary data, and decides whether they line up. Everything is containerized with Docker and deployed as a set of services, which lets us iterate on the matching logic without bringing the system down.

The hard part isn’t telling whether a feed is broken. It’s telling whether two valid feeds are actually showing the same thing. Two affiliates can air the same game, cut to different local ads, sit a few seconds apart in latency, and still be "correct." A naïve pixel comparison falls apart immediately. So instead of relying on one signal, we compared across four.

CLIP neural embeddings handle the semantic side - does this look like the same scene, even if framed or compressed differently. Perceptual hashing (pHash) handles the opposite end, checking for near pixel-level similarity between individual frames. Chromaprint audio fingerprinting verifies that the audio track lines up with the upstream feed. And CEA-608/708 caption extraction checks whether the closed captions are saying the same thing. Each signal has its own blind spots, but together they’re hard to fool.

The system weighs them and emits a structured verdict - MATCH, MISMATCH, or UNCERTAIN - along with a confidence score, measured latency in milliseconds, and fault flags for things like black frames or freezes. The architecture supports 1:N comparisons, where one upstream source can be checked against many downstream feeds at once, which is what makes it usable across FOX’s 200+ affiliates instead of collapsing under the scale.

![Project Architecture](/blogs/content_verification_system_architecture.png)

By the end of the internship, the system was positioned to become a 24/7 monitoring service with REST endpoints that other internal tools can consume. The matching engine is proven accurate on both file-based recordings and live stream inputs. What’s left for full production readiness is mostly the connective tissue: integration with Slack , persistent storage of verification history, scale testing across more affiliate feeds, and data center deployment.

![Control Plane](/blogs/control_plane.PNG)

![Broadcast Stream Viewer](/blogs/stream_viewer.PNG)

![Analysis Dashboard](/blogs/verification_dashboard.PNG)

## Conclusion

We closed out the internship with a final presentation to my team and future manager. I covered what we shipped and what still felt unsolved about the project.

Both managers were satisfied with the project. We received offers to return in the Summer. On the last day we went to The Cheesecake Factory. I handed out copies of my [100 Chats](https://chatgpt.com/use-cases/students/) to everyone and said my goodbyes.

Personally, I felt that the culture at FOX is very positive. I felt safe to show up at my best. If I had to distill the most useful advice I got from the experience, it would be this: _never cut corners_, and _be easy to work with_. Managers care a lot more about someone who can acknowledge their flaws than someone trying to impress. How you look at yourself is how you look at the world.

Being humbled and being trusted both ask different things of you. Combined with the rhythm of balancing FOX with school, I’m leaving this spring with a clearer sense of how I want to work: sustainably, collaboratively, without needing to prove anything to anyone in the room.

_Thank you to my team at FOX for a spring of learning and growth._

![Rocky Mountain National Park, Colorado](/blogs/rmnp.JPG)
