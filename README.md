# redactor-plugin-drag-drop-image-base64

[Redactor 3](https://imperavi.com/redactor/) Plugin inserting Drag & Dropped images with src as dataUrl.

# Usage
```html
<!DOCTYPE html>
<html>
<head>
    <title>Redactor</title>
    <meta charset="utf-8">
    <!--css -->
    <link rel="stylesheet" href="/your-folder/redactor.css" />
</head>
<body>
    <textarea id="content"></textarea>
    <!-- js -->
    <script src="/your-folder/redactor.js"></script>
    <script src="/your-folder/drag-drop-image-base64.js"></script>
    <!-- call -->
    <script>
		$R('#redactorJs',{ plugins: ['drag-drop-image-base64'] });
    </script>
</body>
</html>
```