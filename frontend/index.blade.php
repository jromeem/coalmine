<!DOCTYPE html>
<html>
<head>
    <title>Canny</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="apple-touch-icon" sizes="57x57" href="/dist/images/fav/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/dist/images/fav/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/dist/images/fav/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/dist/images/fav/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/dist/images/fav/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/dist/images/fav/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/dist/images/fav/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/dist/images/fav/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/dist/images/fav/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/dist/images/fav/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/dist/images/fav/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/dist/images/fav/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/dist/images/fav/favicon-16x16.png">
    <link rel="manifest" href="/dist/images/fav/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/dist/images/fav/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="/dist/fonts/font-awesome/css/font-awesome.min.css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="/dist/styles/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/dist/styles/index.css">
</head>
<body>
    <section id="header-section">
        <div class="row">
            <div class="col-xs-12">
                <div class="pull-left logo-contain">
                    <img src="/dist/images/canny-logo.png" height="70" width="70">
                    <h4 class="logo-title">CANNY</h4>
                </div>
                <dir class="pull-right menu-contain">
                    <div class="menu-img" height="15" width="25"></div>
                </dir>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 text-center">
                <div class="header-contain">
                    <h1 class="title">Taking the Leg Work out of <span class="black-color">Online Shopping</span></h1>
                    <h5 class="subtitle">Always know when and where to buy</h5>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="subscribe-button text-center">Subscribe</div>
        </div>

        <div class="row">
            <div class="text-center">
                <img class="laptop-image" src="/dist/images/laptop.png">
            </div>
        </div>
    </section>

    <section id="service-section">
        <div class="row">
            <div class="col-xs-12">
                <h1 class="title">
                    Want to be <span class="canny-color">Canny</span>?
                </h1>
                <h5 class="subtitle text-center">*CANNY = HAVING GOOD JUDGMENT, ESPECIALLY IN MONEY OR BUSINESS MATTERS</h5>
            </div>
        </div>

        <div class="row service-row-contain text-center">
            <div class="col-md-4 service-contain">
                <div class="service-icon-contain">
                    <img class="service-icon" src="/dist/images/shop.png">
                </div>
                <h5 class="service-title">Savvy Shopping</h5>
                <h5 class="service-desc">We rate products using Canny Rating™. Higher ratings = better deals.</h5>
            </div>
            <div class="col-md-4 service-contain">
                <div class="service-icon-contain">
                    <img class="service-icon" src="/dist/images/files.png">
                </div>
                <h5 class="service-title">No Legwork</h5>
                <h5 class="service-desc">We find the best site to buy from based on price and site policies.</h5>
            </div>
            <div class="col-md-4 service-contain">
                <div class="service-icon-contain">
                    <img class="service-icon" src="/dist/images/chart.png">
                </div>
                <h5 class="service-title">Sale Prediction</h5>
                <h5 class="service-desc">If we think there's a better time to buy a product, we'll let you know!</h5>
            </div>
        </div>
    </section>

    <section id="signup-section">
        <div class="row">
            <h1 class="title">Early Sign Up</h1>
            <h5 class="subtitle">Subscribe now to gain early acess to great deals</h5>
            <div class="row subscribe-contain">
                <div class="subscribe-input-contain">
                    <input class="subscribe-input" type="email" name="email">
                </div>
                <div class="subscribe-button">Subscribe</div>
            </div>
        </div>
    </section>

    <footer id="footer">
        <div class="row">
            <div class="col-xs-12">
                <div class="pull-left copy">Copyright © 2016 Canny LLC,. All rights reserved.</div>
                <div class="pull-right social-contain">
                    <ul class="social">
                        <li>
                            <a class="fa fa-twitter social-icon" target="_blank" href="#"></a>
                        </li>
                        <li>
                            <a class="fa fa-facebook social-icon" target="_blank" href="https://www.facebook.com/CannyMe"></a>
                        </li>
                        <li>
                            <a class="fa fa-instagram social-icon" target="_blank" href="#"></a>
                        </li>
                        <li>
                            <a class="fa fa-envelope social-icon" target="_blank" href="#"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://www.gstatic.com/firebasejs/3.2.0/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBflzvd_CC46jhXeYey9xOcUbpnixtj5pY",
        authDomain: "canny-landing.firebaseapp.com",
        databaseURL: "https://canny-landing.firebaseio.com",
        storageBucket: "",
      };
      firebase.initializeApp(config);
    </script>
    <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/3.1.0/firebase-database.js"></script>
    <script type="text/javascript" src="/dist/scripts/main.min.js"></script>
    
</body>
</html>
