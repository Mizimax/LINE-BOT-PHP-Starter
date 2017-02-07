<?php
if (Request::server('HTTP_X_FORWARDED_PROTO') == 'https'){
	echo "https";
}
?>