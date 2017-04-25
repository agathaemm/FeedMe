function Game( l ) {

    // pega o this por referencia
    var _this = this;

    // quantidade de linhas
    this.lines = l;

    // o mundo do novo jogo
    this.world;

    // comidinha
    this.foods = new Array();

    // quadrado principal
    this.square = new Square( 10, 10, function( sq ){

    });

    // inicia um novo jogo
    this.NewGame = function() {

        // cria o mundo
        _this.world = new World( 400, 600 );

        // cria o retangulo
        _this.world.add( _this.square );
    }
    this.NewGame();

    // preenche a tela com as comidinhas
    this.Fill = function() {

        //percorre as linhas do canvas
        for ( var l = 1; l <= _this.lines; l++ ) {

            // declara a posicao inicial
            var xPosition = 15;

            // enquanto nao chegar no final da linha
            while ( xPosition < ( _this.world.width - 10 ) ) {
                
                // cria as comidas e adiciona no mundo
                var food = new Food( xPosition, ( l * 20 ), _this );
                _this.world.add( food );
                _this.foods.push( food );

                // incrementa mais 20
                xPosition += 20;
            }
        }
    }

    // inicia o jogo
    this.Start = function() {
        _this.world.stop();
        _this.world.destroy();
        delete _this.world;
        _this.NewGame();
        _this.Fill();
        _this.world.start();
        _this.GameStatus( 'Jogando ...' );
    }

    // pausa o jogo
    this.Pause = function() {

        // muda o status do mundo
        if ( _this.world.running ) {
            _this.GameStatus( 'Jogo pausado' );
            _this.world.stop(); 
        } else {
            _this.GameStatus( 'Jogando ...' );
            _this.world.start();
        }
    }

    // seta o status do jogo
    this.GameStatus = function( status ) {
        document.getElementById('GameStatus').innerHTML = status;
    }
}