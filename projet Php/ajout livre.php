<?php
@inonnect("connect.php");
$ref = $_POST['ref'];
$nombre_de_page = $_POST['$nombre_de_page'];
$auteur = $_POST['auteur'];
$date_de_publication = $_POST['date_de_publication'];
$genre = $_POST['genre'];
$disponibilite = $_POST['disponibilite'];
$nombre_d_emprunt = $_POST['nombre_d_emprunt'];
$etat = $_POST['etat'];
$nombre_d_exemplaire = $_POST['nombre_d_exemplaire'];

$requete = "INSERT INTO livre VALUES ('$ref','$nombre_de_page','$auteur','$date_de_publication','$genre','$disponibilite',
'$nombre_d_emprunt','$etat','$nombre_d_exemplaire')";
$rl=mysqli_query($conn,$requete);
echo "<center><P>Ajout Ok</P></center>";
echo '<center><a href="index.html">Retour</a></center>';
mysqli_close($conn)
?>