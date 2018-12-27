<!DOCTYPE HTML>
<html>
<head>
<title>Tic Tac Toe</title>
<link rel="stylesheet" type="text/css" href="http://tictactoe.test/dist/css/game.min.css">
</head>

<body>
<div class="viewport">
    <div id="app">
        <h1 class="center">Tic Tac Toe</h1>
        <p class="center turn-teller">It's Player <span id="x-or-o"></span>'s turn!</span></p>
		<p class="center" id="alertBox"></p>
        <div class="flex-center flex-container board-container">
            <div class="flex-container flex-wrap board">
                <div class="square horizontal-1 vertical-1"></div>
                <div class="square horizontal-1 vertical-2"></div>
                <div class="square horizontal-1 vertical-3"></div>
                <div class="square horizontal-2 vertical-1"></div>
                <div class="square horizontal-2 vertical-2"></div>
                <div class="square horizontal-2 vertical-3"></div>
                <div class="square horizontal-3 vertical-1"></div>
                <div class="square horizontal-3 vertical-2"></div>
                <div class="square horizontal-3 vertical-3"></div>
            </div>
        </div>
		<div class="button-row">
			<a href="#" id="reset-button">RESET GAME!</a>
		</div>
    </div>
</div>

<script type="text/javascript" src="/dist/js/game.js"></script>
</body>
</html>
