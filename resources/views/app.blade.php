<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RWEREZXJET"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RWEREZXJET');
    </script>

    <meta
    name="description"
    content="Business process automation that saves time and cuts costs. I eliminate tedious manual work by building systems that automate repetitive tasks, streamline operations, and accelerate growth—without expensive agency fees."
    />

    <meta name="robots" content="index,follow" />
    <title>Business Process Automation | Strider White</title>
      <!-- Vite React entry -->
      @viteReactRefresh
      @vite('resources/js/app.jsx')
</head>

<body class="font-sans antialiased">
    <div id="app"></div>
</body>

</html>
