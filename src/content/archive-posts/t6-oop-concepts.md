---
title: "Functional Programming v. Object Oriented"
subtitle: "Like Peas and Carrots"
category: technical
publishedAt: 2015-07-26
originalSlug: t6-oop-concepts
---

As we most likely already know, OO (Object-oriented) programming takes advantage of the human mind’s ability to see things as objects (nouns and verbs). Objects exist in a natural state and can hold information about themselves. We can create ways of manipulating those objects and we can also create relationships between one object and another object.

Functional programming, on the other hand, is best thought of as a fixed set of objects and our duty as programmers is to add new actions (operations) to these existing objects. We do this by adding ‘functions’ which iterate through existing data.

So essentially, OO programming is the computation of objects around actions and functional programming is the computation of actions around objects. So are they basically just complete opposites?

An interesting fact is that Ruby, an OO language, is written in C (a ‘regular’/functional language). Amazingly, Ruby’s code execution is run through C parameters as data. It then figures out what you want to do and does it. Functional languages are great, because you can easily manipulate data without changing inherit object structure. The only real issue with that is that’s not exactly how we organize our thoughts and actions, which are largely based around objects.

class Phone end -->

There really isn’t a superior method or language process as they serve different purposes and different styles of programming. Ruby would be considered superior for organization, and a functional language like C, would be superior for data manipulation.

class Cat def initialize(breed, lives) @breed = breed @lives = lives end --> To analogize, what if you want to build a castle? You can use sand or bricks. This is just an analogy so ignore physics for a second. With sand you can build your castle exactly how you want, etching out the finest of details and shapes. With the bricks, they are all a standard size and fit well together, you could potentially move one brick section to another with relative ease. But lets say you want to change the color of your castle. Yes, you can change the color of sand, but it will be difficult; your castle is already built and I don’t know how it will interact by adding paint into the mixture. How will I be able to paint without risking a collapse of the entire building? With bricks, it’s easy to slap some paint on, see how you like the color, and then change it again if you want. With bricks you can visually see what fits where, and where a new set of bricks will or won’t fit. With sand it’s hard to gauge. You would be better off designing your sand castle from the ground up and adding details as you go along.

As I’m sure you’ve guessed, functional code, is our sand, and OO code is our brick. They suit different purposes and a working knowledge of both is very useful for any new programmer.
