const cipher = {
  encode: function (desplazamiento, mensajeUsuario) {
    let menUsuario = "";
    mensajeUsuario = mensajeUsuario.toUpperCase();
    desplazamiento = parseInt(desplazamiento);
    if (mensajeUsuario !== "" && desplazamiento > 0) {
      for (let i = 0; i < mensajeUsuario.length; i++) {
        const codigoAscii = mensajeUsuario.charCodeAt(i);
        if (codigoAscii >= 65 && codigoAscii <= 90) {
          const formula = ((codigoAscii + desplazamiento - 65) % 26) + 65;
          const letraCifrado = String.fromCharCode(formula);
          menUsuario+=letraCifrado;
        }else{
          menUsuario += " ";
        }
      }
    }
    return menUsuario;
  },

  decode: function (desplazamiento, mensajeUsuario) {
    let menUsuario = "";
    mensajeUsuario = mensajeUsuario.toUpperCase();
    desplazamiento = parseInt(desplazamiento);
    if (mensajeUsuario !== "" && desplazamiento > 0) {
      for (let i = 0; i < mensajeUsuario.length; i++) {
        const codigoAscii = mensajeUsuario.charCodeAt(i);
        if (codigoAscii >= 65 && codigoAscii <= 90) {
          const formula =((codigoAscii - desplazamiento + 65) % 26) + 65;
          const letraDescifradO = String.fromCharCode(formula);
          menUsuario += letraDescifradO;
        }else{
          menUsuario += " ";
        }
      }
    }
    return menUsuario;
  },
};

export default cipher;
