# COR Question 1

## Question

> I have a panel on my web page that should be made visible when displayed
> in a browser on the desktop and it should be invisible when displayed in 
> a smartphone. How do I achieve that? What would be one or two libraries
> I can use use not to have to implement this panel from scratch?

## Answer

1. JQuery
2. detect browser type using user-agent (navigator.userAgent)
   the mobile browser has an unqiue signature and used that to determine if this is a mobile device. This method is more accurate than css media checking using screen size.
3. To hide a DOM element, we can i) use CSS and add css class (.hide), or ii) use JQuery hide method to manipulate the DOM (demonstrated in sample)
4. Since JQuery need to downloaded from web. It will not work before JQuery is initialized and DOM/Document is rendered. Therefore, a CSS hide element is put in place, to cover the JQuery boot-strapping period.

Solution deployed in AWS S3
at

[COR Question 1 ](https://s3-us-west-2.amazonaws.com/kt-cor/question1/index.html)
