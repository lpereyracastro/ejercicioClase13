const cortar = (ingrediente) => {
    console.log('Cortar ' + ingrediente)
}

function mezclarIngredientes(n){
    if (n <=0) {
        return
    } else {
        console.log('Mezclar #' + n);
        mezclarIngredientes(n-1);
    }
}

function comer() {
    console.log("Comer");
    
}

function hacerEnsaladaMixta(){
    cortar('Cebolla');
    cortar('Lechuga');
    cortar('Tomate');
    mezclarIngredientes(5);
    comer();
}

hacerEnsaladaMixta();