---
title: "The #map Method"
category: technical
publishedAt: 2015-07-12
originalSlug: t4-enumerable-methods
---

Before reading this blog post, I must mention that I am writing this to help further my own understanding of the topic, so if there are errors: 1) I will fix them — 2) It’s a work in progress.

The #map Method

#Map is an extremely useful method in Ruby. Think of it as the ‘collector’ method (I suppose that’s why you can also call it with `.collect`). When you’re doing a collection operation in Ruby, you are working over a set of collected data through iteration, transformation, ordering/sorting, or even filtering. Each has a specific purpose or duty when performing an action on a collection.

The #map method is one such “collection-transformation” operation. It will transform one collection into another collection. In this case, #map always returns an array. The reason for that is because it is a defined #enumerable. When using the class Enumerable, the class must define an instance of `each` which is the crux of the Enumerable class. The objects that fall within are tasked with various collection behaviors (as mentioned above).

So getting back to the #map method, perhaps it makes more sense now why it is considered the ‘transformation’ operation. As it will return the exact same input it received, except, as an array. It won’t change the positions, or sizing, or even the font. It essentially just… maps it. It’s useful because you can call #map and run it through a block, because #map takes blocks as an argument. You can then call another method on your #map block to return a new array. For example I can call the (.upcase) method (an easy example to understand) with:

.map(&:join) A collection of data (a set of street addresses for example) and map will iterate through each name and return an array, then #map will call the .upcase method which would ‘transform’ the data into all capital letters. There’s countless other things that #map can do, but I hope this brief introduction made sense. Thanks for reading!
