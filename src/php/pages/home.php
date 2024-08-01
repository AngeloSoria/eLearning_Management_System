<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "../templates/public/header.php" ?>
    <link rel="stylesheet" href="../../css/landingPage.css">
    <link rel="stylesheet" href="../../css/landingPage-mobile.css">
</head>

<body data-bs-theme="light">

    <!-- NAVBAR -->
    <nav>
        <section class="nav-content">
            <a href="home.php">
                <img class="logo" src="../../img/Secondary-Logo-2.png" alt="Unida Christian College Logo">
            </a>

            <section class="nav-links">
                <ul>
                    <li>
                        <a href="#">
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            PLACEHOLDER
                        </a>
                    </li>
                    <li class="btn-primary btnLogin" id="btnLogin">
                        <span>Login</span>
                    </li>
                </ul>
            </section>

        </section>
        <button class="nav-mobile btn-menu">
            <span class="icon material-symbols-outlined">menu</span>
        </button>
    </nav>

    <!-- IMAGE CAROUSEL -->
    <div class="bgCarousel">
        <div class="imgContent"></div>
        <div class="paginator">
            <button class="controls" id="control-left">
                <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <div class="bullets">
                <div class="bullet">
                    <span class="material-symbols-outlined">radio_button_checked</span>
                </div>
                <div class="bullet">
                    <span class="material-symbols-outlined">radio_button_unchecked</span>
                </div>
                <div class="bullet">
                    <span class="material-symbols-outlined">radio_button_unchecked</span>
                </div>
                <div class="bullet">
                    <span class="material-symbols-outlined">radio_button_unchecked</span>
                </div>
            </div>
            <button class="controls" id="control-right">
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    </div>

    <section class="vhPage">
        <h1>HELLO1 WOLRD</h1>
        <?php
        for ($i = 0; $i < 10; $i++) {
            echo "<h2>Test " . $i . "</h2>";
        }
        ?>
    </section>

    <!-- LOGIN FORM (POPUP) -->
    <?php include_once "../templates/public/popup_formLogin.php" ?>

    <!-- FOOTER -->
    <?php include "../templates/public/footer.php" ?>
</body>
<script src="../../js/landingPage_Manager.js"></script>

</html>