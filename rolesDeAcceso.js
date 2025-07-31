let rol = 'EDITOR';
let usuario = 'lUIS';

if (rol === 'ADMIN' && usuario === 'Pedro') 
    console.log('El usuario puede editar,eliminar y ver toda la informacion');
else if (rol === 'ADMIN' && usuario !== 'Pedro')
    console.log('El usuario puede editar y ver toda la informacion');
else if (rol === 'EDITOR') 
    console.log('El usuario solo puede editar sus registros');
else
    console.log('El usuario es visitante,solo puede ver la informacion');