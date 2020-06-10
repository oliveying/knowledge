
```html
<div id="example1"></div>
<style>
.pdfobject-container { width: 936px; height: 902px; }
</style>
```
```js
var options = {
      pdfOpenParams: {
        page: 1,
        toolbar: 0,
        navpanes: 0,
        statusbar: 0,
        view: "FitH",
        scrollbars: "0"
      }
    };
    
    PDFObject.embed("test.pdf", "#example1", options);
```