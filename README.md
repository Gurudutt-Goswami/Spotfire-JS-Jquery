# Spotfire-JS-Jquery

1. Most of the following screenshots have some animations in them which you will find once you will replicate them in TIBCO SPOTFIRE TEXTAREA ONLY. 
2. Feel free to play with it to create to something more productive.

### Some Important JS Libararies from Visualisations perspective
  1) https://d3js.org/
  2) https://plotly.com/javascript/
  3) https://www.zingchart.com/
  4) https://developers.google.com/chart/interactive/docs/gallery
  5) https://www.amcharts.com/javascript-charts/

### Dashboard Links
1) [Airline Circle](#Airline-Circle)
2) [Box Toggle](#Box-Toggle)
3) [Accordion](#Accordion)
4) [Left Panel](#Left-Panel)
5) [Hierarchy Diagram](#Hierarchy-Diagram)
6) [Mac Doc](#Mac-Doc)
7) [Pencils](#Pencils)
8) [Other Basic Things](#Other-Basic-Things)

### Airline Circle
![Airline Circle](https://user-images.githubusercontent.com/86184439/122722877-de7fb600-d28f-11eb-86eb-95104d2be4a3.PNG)

### Box Toggle
![Box Toggle](https://user-images.githubusercontent.com/86184439/122724419-88ac0d80-d291-11eb-94c2-84ff6f276e79.PNG)

### Accordion
![Accordion](https://user-images.githubusercontent.com/86184439/122727073-459f6980-d294-11eb-9a93-abd55b5a1c8b.PNG) 

### Left Panel 
##### Code for all the 3 left Panels mentioned below are available separately in this repository.
| Left Panel | Left Panel (2)| Left Panel + Accordion
---|---|---
|![Left Panel](https://user-images.githubusercontent.com/86184439/122728794-18ec5180-d296-11eb-8e6b-759a3934183e.PNG)|![Left Panel (2)](https://user-images.githubusercontent.com/86184439/122735600-cfebcb80-d29c-11eb-8a82-9d6722702551.PNG)|![Left Panel + Accordion](https://user-images.githubusercontent.com/86184439/122737875-18a48400-d29f-11eb-8613-dd74e07f9a82.PNG)|

### Hierarchy Diagram 
The following diagram is from the Spotfire textarea only, it doesn't have any resemblance with hierarchiral visualisation as far the code is concern, although it appears to be static at first glance but it includes a beautiful animation in it. I hope you will like it. You will find the code to replicate this, above.

![Hierarchy Diagram](https://user-images.githubusercontent.com/86184439/122730622-0d018f00-d298-11eb-94a8-7cefe70c26b7.PNG)


### Mac Doc
![Mac Doc](https://user-images.githubusercontent.com/86184439/122739989-2c50ea00-d2a1-11eb-8988-fafee8f773a0.PNG)

### Pencils
![Pencils](https://user-images.githubusercontent.com/86184439/122752999-3d085c80-d2af-11eb-9c41-ed7bdb3b7cbe.PNG)

### Other Basic Things
```
$( "#hover" ).hover(
function() {$( this ).css("background-color","orange");}, 
function() {$( this ).css("background-color","#FCD5CE");});

$("#click").click(
function(){ alert("You clicked this button !")	})

$("#animate").click(function(){
$("#animate_this").animate({height:"toggle"});});

$("#animate_hori").click(function(){
$("#animate_horizontally").animate({width:"toggle"});});
```
