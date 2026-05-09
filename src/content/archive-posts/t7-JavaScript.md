---
title: "A Brief Comparison of JavaScript and Ruby"
subtitle: "We were spoiled..."
category: technical
publishedAt: 2015-08-02
originalSlug: t7-JavaScript
---

After working with Ruby for the past few weeks, I felt the switch into JavaScript for the first time these past few days was… interesting. It’s certainly a harder language to pickup intuitively as it lacks some of the natural language syntax that Ruby offers. However, it makes a huge difference going into JavaScript with a little bit of programming experience under your belt. You’re able to quickly recognize common syntax and still maintain an instinctive intuition of what you want the code to do. Here are some interesting differences between Ruby and JavaScript.

On a previous blog post, I briefly touched on the differences between OO (Object Oriented) languages and Functional programming languages. Now technically, JavaScript is indeed an OO language, but, interestingly enough it retains many properties of Functional languages. Some programmers like to think of it as a “happy medium” between the two, but as a whole it is still an OO language. So we’re on familiar grounds.

We are probably familiar with Ruby methods and the Enumerable (Ruby’s built-in data structures) by now, but I have to warn you, we were spoiled! JavaScript does not have any fancy built-in data structures, although it does still have ‘Objects’. JS Objects are basically self-defined data structures for any defined variable. This is an aside from the built in native structures such as the Boolean and String. They typically look like this:

meMyself = { height: 0, weight: 0, passTest: true }

If that looks familiar, it’s because the syntax is nearly identical to Object literal Hash formation in Ruby. In JS, it’s not a hash, not really at least, but it does act similar. They are both collections of references to other objects. In Ruby we use the key/value pair relationship, while in JS we use the property/value term. Pretty neat right?

Let’s also take a look at Ruby classes and JavaScript constructor functions. This is where the whole Object-oriented thing starts to come into focus. JS objects come into play through constructor functions; similar to Ruby classes that create ‘instances’ of objects. In Ruby we define the behavior of the instances within the class, while in JS, we use something called “prototype objects” which are responsible for defining the behavior of instances. It looks like this:

function dog (name, breed, age) { this.name = name; this.breed = breed; this.age = age; }

One last thing. DON’T FORGET THE SEMICOLONS! JavaScript uses semicolons to tell the computer that it has reached the end of a line of code or an instruction. Think of it like a period at the end of a sentence. They are important. Your code will run without them, but it will also start doing strange things without explanation the bigger your project gets. Don’t forget them (I did… a few times).
