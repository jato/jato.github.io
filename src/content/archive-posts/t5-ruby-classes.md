---
title: "Defining Classes in Ruby"
subtitle: "Class is in session..."
category: technical
publishedAt: 2015-07-19
originalSlug: t5-ruby-classes
---

Before getting into classes in Ruby, I will take a brief minute to go over one of the most important aspects of Ruby’s design — Object-oriented programming (OOP). Before object orientation, traditional programming would involve a human writing a list of instructions for a machine to follow. Object orientation is similar but based on the different human premise that we see things and interact with them differently; much more… tangibly. We see things, places, and… objects. We interact with these objects and perform functions with these objects. The objects can maintain relationships with other objects. They have parents and children, and like such, can inherit characteristics of their parent object. So when programming, we can model the world based off of strings of text instructions, or, we could model it off of the objects and how we perceive them.

Now, a class, is the “blueprint” from witch individual objects are created. Inside the blueprint you can assign different values and data structures that create your new object. If I created a class “Phone” (note the capitalization) an instance of phone would be your iPhone or your Android phone. The sub-variables would be its functions, i.e., the phone has a camera, a glass capacitive display, and 3000mAh battery. What’s the point? Well, imagine you have a very large coding project that tracks a ton of different data points that you want to perform a consistent action. Are you going to write a bunch of instructions for each data point? That could be tedious and hazardous to your code. Just make a class that stores the data and instructions and then call it when you need it.

So, how do we make one of these ‘class’ things?

We define it! A class in Ruby always starts with the keyword ‘class’ followed by the name of the class that you want to create, e.g., Phone, Bills, Cards, etc.

class Phone end

Inside the class, we can place our variables. For our purposes, we will most likely start off with local variables and instance variables. Local variables are defined in the method and belong to that method, they will not be accessible outside. An instance variable however (denoted with the @sign) is available across methods and also subject to change between objects.

class Cat def initialize(breed, lives) @breed = breed @lives = lives end When working with instance variables, it’s important to remember that they belong to objects once the objects are created using the class. Each object has individual attributes and does not share any value with other objects. While accessible within the class using the @ operator, to access them outside the class we would use a set of public methods called the accessor methods. If you use attr_ methods within your class, it would create variable methods for you use to use anywhere else with the @ symbol. For read only, you use “attr_reader”, write only would be “attr_writer”, and finally “attr_accessor” would allow for both functions.

So, using the sample code above, we initialized a method that takes two arguments, breed and lives. Let’s say we are categorizing a new species of feline, and we want to compile the data of their breed and how many lives they have (I know that’s not scientifically accurate, but it was what came to my mind first). We can call on our ‘Cat’ class by typing “Cat.new” and categorize a new find named Mittens by typing “mittens = Cat.new(Fluffling, 9)” and thereby create a new object (Mittens) that is a breed of (Fluffling) and happens to have (9) lives.

There’s so much more we can do and so much more I could write about when talking about Ruby’s classes. However, I think that’s enough for now.
