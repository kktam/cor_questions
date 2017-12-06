# COR Question 9

## Question

> Write a React web app to display a list of calendar events in list view, 
> and when tapped/clicked, display the selected event in a card. The list of 
> calendar events should be retreived by the app using the REAT API with empty body.
> You must use the Material-ui 1.0 library as your UI framework.

## Answer

- to run locally, use the command ` npm run start `
- to generate published scripts, use the command ` npm run build `

- During the development of this answer, the API is tested using PostMan to determine to the configuration. Here is the screenshot.

![API testing screenshot with PostMan](https://github.com/kktam/cor_questions/blob/master/question9/doc/API-trial-1.png)

Solution deployed in AWS S3
at

[COR Question 9 ](https://s3-us-west-2.amazonaws.com/kt-cor/question9/index.html)  , <--- currently not working


### Things still not working

- CORS api in the code is still not fully working. The current version is demo'ed using the test data downloaded using PostMan. 
- Testing using test data is turned on using the private member ` test ` in the CalendarList class.
