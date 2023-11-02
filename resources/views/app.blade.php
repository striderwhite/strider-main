<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;900&family=Work+Sans&display=swap" rel="stylesheet">



    <meta
    name="description"
    content="Edmonton-based software developer and website developer. Available for hire for software projects. Contact me to chat!"
    />

    <meta name="robots" content="index,follow" />
    <title>Strider White | Software Developer</title>
        <!-- Scripts -->
    @routes
    @vite('resources/js/app.js')
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
