<?php
function authenticate($school_id, $password) {
    require_once 'DBConnection.php';

    // Get database connection
    $dbConnection = new DBConnection();
    $conn = $dbConnection->getConnection();

    if ($conn) {
        // Prepare and execute SQL query to check credentials
        $query = "SELECT * FROM user WHERE school_id = :school_id AND password = :password";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':school_id', $school_id);
        $stmt->bindParam(':password', $password);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            // Credentials are valid, return success
            return true;
        } else {
            // Invalid credentials, set error message
            return "Invalid username or password. Please try again.";
        }
    } else {
        return "Database connection error.";
    }
}
?>
