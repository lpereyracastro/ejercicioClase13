const autosImportados = require('./autos')

let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function(patente){
      let buscarPatente = this.autos.find( (auto) => {
         return patente === auto.patente
      })

      if (buscarPatente){
         return buscarPatente
      } else {
         return null
      }
   },
}


console.log(concesionaria.buscarAuto('APL123'));