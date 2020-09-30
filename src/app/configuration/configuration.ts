export const configuration = {
   bussinesServer:{
    url:'https://198.27.127.186:8000'
   },
   initComponent:{
    login:'Entrar',
    register:'Registrar',
    quicksales:'Gestión de Proyectos',
    },
    loginComponent:{
     titlte:'INICIO DE SESIÓN',
     placeholderUser:'Usuario',
     placeholderPassword:'Contraseña',
     textLogin:'Iniciar sesión' 
    },
    registerComponent:{
      placeholderDocument:'Número de documento',
      placeholderType:'Tipo',
      placeholderName:'Nombres',
      placeholderSurName:'Apellidos',
      placeholderGender:'Genero',
      placeholderAdress:'Dirección',
      placeholderPhone:'Celular',
      placeholderEmail:'Correo',
      placeholderUser:'Usuario',
      placeholderPassword:'Contraseña',
      placeholderRepeatPassword:'Repetir Contraseña',
      accept:'Aceptar',
      yes:'Si',
      no:'No'
    },
    typedocuments:{
      documents:[
        { id:1, type: 'Cedula' },
        { id:2, type: 'Nit' },
        { id:3, type: 'Tarjeta de identidad' }
      ]
    },
    typegender:{
      female:'5c342fd24f5fbf23e32dc8e1',
      male:'5c342fd24f5fbf23e32dc8e2' 
    },
    typerol:{
      documents:[
        { type: 'administrador' },
        { type: 'root' },
        { type: 'secretaria' },
        { type: 'trabajador' }
      ]
    },
    typerolvalidate:{
      admin: 1,
      root: 4,
      secretaria: 2,
      trabajador: 3
    },
    imgSearch:
      { img:'../assets/sigma7.jpeg' }
  }