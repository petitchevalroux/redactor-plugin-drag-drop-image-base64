(function($R)
{
    $R.add('plugin', 'drag-drop-image-base64', {
        init: function(app)
        {
            this.app = app;
        },
        insertImage(src) {
            this.app.api('module.image.insert', {image:{url:src}});
        },
        readFile(file, callback) {
            var fileReader = new FileReader();
            fileReader.addEventListener("load", function() {
                callback(null, fileReader.result);
            });
            fileReader.readAsDataURL(file);
        },
        ondrop: function(event)
        {
            if(event
                && event.dataTransfer
                && event.dataTransfer.files
                && event.dataTransfer.files.length) {
                for(var fileIndex = 0; fileIndex <  event.dataTransfer.files.length; fileIndex ++) {
                    var self = this;
                    var file = event.dataTransfer.files[fileIndex];
                    if(file.type
                        && file.type.substring(0,6) ==='image/') {
                            this.readFile(
                            file,
                            function(error, src) {
                                if(error) {
                                    console.log(error);
                                    return;
                                }
                                self.insertImage(src);
                            }
                        );
                    }
                }
            }
        }
    });
})(Redactor);