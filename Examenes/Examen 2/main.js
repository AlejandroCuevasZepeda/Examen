class Ruta{
    constructor(nombre){
        this._nombre = nombre;
        this._tiempo = 0;
        this._base1 = new Base("Base 1", 10, 10);
        this._base2 = new Base("Base 2", 30, 30);
        this._base3 = new Base("Base 3", 50, 50);
        this._base4 = new Base("Base 4", 70, 70);
        this._base5 = new Base("Base 5", 90, 90);
    }

    get nombre(){
        return this._nombre;
    }

    get tiempo(){
        return this._tiempo;
    }
}


class Base{
    constructor(nombre, latitud, longitud){
        this._nombre = nombre;
        this._latitud = latitud;
        this._longitud = longitud;
    }

    get nombre(){
        return this._nombre;
    }

    get latitud(){
        return this._latitud;
    }

    get longitud(){
        return this._longitud;
    }
}

class Salida{
    constructor(orden, horaInicio, horaFin){
        this._orden = orden;
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
    }

    get orden(){
        return this._orden;
    }

    get horaInicio(){
        return this._horaInicio;
    }

    get horaFin(){
        return this._horaFin;
    }
}