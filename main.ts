import { formatHtml } from "./mod.ts";

console.log(formatHtml(/*html*/`<!DOCTYPE html>
<html>
    <head>
                        <title>Test</title>
                <style>
                    body {
                        color: white;
                            background: black;
                            } </style>
</head>
<body>      <h1>Test</h1>
                    <script>
console.log("Test, test!"
    );
                        </script>
                </body>
                </html>`));
/*
<!DOCTYPE html>
<html>

<head>
	<title>Test</title>
	<style>
		body {
			color: white;
			background: black;
		}
	</style>
</head>

<body>
	<h1>Test</h1>
	<script>
		console.log("Test, test!");
	</script>
</body>

</html>
*/
