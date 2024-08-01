<?php
session_start();
$isInvalidCredentials = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $school_id = htmlspecialchars($_POST['school_id']);
    $password = htmlspecialchars($_POST['password']);
    
    include_once '../../php/plugins/authLogin.php';
    
    $result = authenticate($school_id, $password);
    
    if ($result === true) {
        // Credentials are valid, set session variable and redirect to welcome page
        $_SESSION['school_id'] = $school_id;
        header("Location: ../../php/pages/welcome.php");
        exit();
    } else {
        // Set error message
        $isInvalidCredentials = $result;
    }
}
?>

<section class="popup">
    <div class="modal">
        <div class="topTool">
            <div class="left">

            </div>
            <div class="mid">
                <p class="modal-title">LOGIN</p>
            </div>
            <div class="right">
                <button class="nav-mobile" id="btnPopupLoginClose">
                    <span class="icon material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
        <br>
        <form class="form-login" method="POST">
            <div>
                <p class="title">School ID:</p>
                <input class="modal-inputbox" type="text" name="school_id" placeholder="Enter school id" title="School"
                    required>
            </div>
            <div>
                <p class="title">Password:</p>
                <input class="modal-inputbox" type="password" name="password" placeholder="Enter password" required>
            </div>
            <div>
                <input type="checkbox" name="remember_me" id="login_remember_me">
                <label for="login_remember_me">Remember me</label>
            </div>
            <input type="submit" value="LOGIN" class="btn-primary2 form-button btnLogin">
            
            <?php
                if (!empty($isInvalidCredentials) && $isInvalidCredentials) {
                    echo '<p class="form-textResult">Invalid username or password. Please try again.</p>';
                    echo '<script>$(".popup").fadeIn(100);</script>';
                }
            ?>

        </form>
    </div>
</section>