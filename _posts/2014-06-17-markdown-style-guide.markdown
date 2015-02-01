---
layout: post
title:  "Markdown Style Guide"
author: Bryan
date:   2014-06-16 04:07:49
categories: Frontend Development
---

This is a simple markdown styleguide. I shows basic elements and how they are styled in this layout

<!--more-->

# This is an example of Heading 1 #

A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## This is an example of Heading 2 ##

A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### This is an example of Heading 3 ###

A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

#### This is an example of Heading 4 ####

A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

##### This is an example of Heading 5 #####

A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

###### This is an example of Heading 6 ######

A simple paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Some inline examples. <strong>This is strong text</strong>, consectetur adipisicing elit, <em>this is text with emphasis</em> ut labore et dolore magna aliqua. [Bryan Lokey](http://bryanlokey.com/) veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

* An unordered list
* With another item
* One more item


1. An order list
2. With another item
3. One more item


> This is a blockquote and is amazing

Here is a horizontal rule

***

This is an example of a code tag `index.html` wasn't it great?


Here is a longer code section:

{% highlight javascript %}

var cachedScriptPromises = {};

$.cachedGetScript = function( url, callback ) {
    if ( !cachedScriptPromises[ url ] ) {
        cachedScriptPromises[ url ] = $.Deferred(function( defer ) {
            $.getScript( url ).then( defer.resolve, defer.reject );
        }).promise();
    }
    return cachedScriptPromises[ url ].done( callback );
};
{% endhighlight %}


Here is a longer code section with line numbers:

{% highlight css linenos %}

.wrapper {
  margin: 0 auto;
  width: 80%;
}

hr {
  border-bottom: 1px solid #b3beb1;
  margin: 2rem 0 2.5rem;
  clear: both;
}

{% endhighlight %}


Here is a responsive video:

<iframe src="//www.youtube.com/embed/fi8A-GHOo8c" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


Here is an image with caption:

{% include image_caption.html imageurl="//placehold.it/1200X500" title="GruntJS" description="Grunt is built on Node.js, and it’s available as a package via the Node package manager (npm)." %}



Here is code with an annotation:

<div class="container">
	{% highlight javascript %}
	var cachedScriptPromises = {};

	$.cachedGetScript = function( url, callback ) {
   	 if ( !cachedScriptPromises[ url ] ) {
    	    cachedScriptPromises[ url ] = $.Deferred(function( defer ) {
      	      $.getScript( url ).then( defer.resolve, defer.reject );
        	}).promise();
    	}
    	return cachedScriptPromises[ url ].done( callback );
	};
	{% endhighlight %}

	<div class="reference">
		<strong>Code Annotation Example</strong>
		<p>This is an example of a basic javascript principle.</p>
	</div>
</div>
