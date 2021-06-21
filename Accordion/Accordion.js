 $( "#accordion" ).accordion({
   heightStyle: 'content',
   collapsible:true,
   active:false}

//#02C777
);$("body").append("<style>\
.ui-accordion-header{font-size:14px;font-weight:bold;color:white;background-image:linear-gradient(to right,#f79d00,#64f38c)}\
.ui-accordion-content{font-size:10px;background:#eeeeee;}\
</style>")

$( "#accordion" ).accordion({
  icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
});

$( "#accordion .ui-accordion-header" ).css(
"border","0px solid white"
)