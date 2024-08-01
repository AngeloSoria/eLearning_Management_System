<?php
    session_start();

    // Check if the user is logged in
    if (!isset($_SESSION['school_id'])) {
        // User is not logged in, redirect to login page
        header("Location: home.php");
        exit();
    }

?>

<h2>Welcome, <?php echo htmlspecialchars($_SESSION['school_id']); ?>!</h2>
<a href="../plugins/process_Logout.php">
    <button>Log Out</button>
</a>