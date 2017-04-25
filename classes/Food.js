function Food( x, y, g ) {

    // pega por referencia
    var _this = this;

    // largura
    this.width = 10;

    // altura
    this.height = 10;

    // posicao x
    this.xPosition = x;

    // posicao y
    this.yPosition = y;

    // cor do quadrado
    this.color = 'white';

    // quadrado principal
    this.square = g.square;

    // pega o array de comidas
    this.foods = g.foods;

    // pega o mundo
    this.world = g.world;

    // desenha o quadrado no canvas
    this.draw = function( world ) {

        // desenha o quadrado
        world.ctx.fillStyle = _this.color;
        world.ctx.fillRect( _this.xPosition, _this.yPosition, _this.width, _this.height );
    }

    this.hit = function() {
        
        // verifica se o quadradinho bateu verticalmente
        if( _this.square.yPosition > _this.yPosition && _this.square.yPosition < ( _this.yPosition + _this.height ) ) {
            if( _this.square.xPosition > _this.xPosition && _this.square.xPosition < ( _this.xPosition + _this.width ) ) {
                _this.square.changeHorizontalDirection();
                return true;
            }
        }

        // verifica se o quadradinho bateu verticalmente
        var pos = _this.square.yPosition + _this.square.height;
        if( pos > _this.yPosition && pos < ( _this.yPosition + _this.height ) ) {
            if( _this.square.xPosition > _this.xPosition && _this.square.xPosition < ( _this.xPosition + _this.width ) ) {
                _this.square.changeVerticalDirection();
                return true;
            }
        }

        // retorna falso por padrao
        return false;

    }

    // função chamada na atualizacao do mundo
    this.update = function( world ) {

        if ( !_this.hit() ) {

            // desenha o quadrado
            _this.draw( world );
        } else {
            
            if ( _this.world.bodies.indexOf( _this ) !== -1 ) {
                _this.world.bodies.splice( _this.world.bodies.indexOf( _this ), 1 );
                _this.foods.splice( _this.foods.indexOf( _this ), 1 );
                delete _this;
            }

        }
    } 
}