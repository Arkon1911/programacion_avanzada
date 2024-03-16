// Prototipo para un animal
function Animal(a, leon) {
    this.a = a;
    this.leon = leon;
  }

  function Animal(b, lobo) {
    this.b = b;
    this.lobo = lobo;
  }

  function Animal(c, oso) {
    this.c = c;
    this.oso = oso;
  }

  function Animal(d, serpiente) {
    this.d = d;
    this.serpiente = serpiente;
  }

  function Animal(e, aguila) {
    this.e = e;
    this.aguila = aguila;
  }

   
  // Método para que el animal emita un sonido
  Animal.prototype.emitirSonido = function() {
    console.log(`¡${this.a} dice rugir!`);
  };
  
  Animal.prototype.emitirSonido = function() {
    console.log(`¡${this.b} dice aullar!`);
  };
  Animal.prototype.emitirSonido = function() {
    console.log(`¡${this.c} dice gruñir!`);
  };
  Animal.prototype.emitirSonido = function() {
    console.log(`¡${this.d} dice sisear!`);
  };
  Animal.prototype.emitirSonido = function() {
    console.log(`¡${this.e} dice chillar!`);
  };
 
  // Crear una instancia de un leon
  const a = new Animal("a", "leon");
  
  // Llamar al método para que emita un sonido
  a.emitirSonido(); // Imprimirá "¡a dice rugir!"