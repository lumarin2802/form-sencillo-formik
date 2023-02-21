import React, {useState, useContext} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {

	const [formularioEnviado, cambiarFormularioEnviado]=useState(false);
  return (
    <>
      {/* Para validar el formulario tenemos que obtener los valores del input, para eso primeor instalamos formik. Entonces debemos instalar formik, luego llamar el componente formik y poner el form dentro de las etiquetas formik. Pero ademas debemos dentro de formik crear una arrow function y poner todo el form dentro de la funcion. Esto significa que vamos a renderizar este frmulario , pero como lo estamos poneindo dentro de una funcion, a esta le podemos inyectar valores de Formik. HandleSubmit es la funcion que se encarga de enviar el formulario. OnBlur esta función lo que hace es que cuando el usuario de un click fuera del form, va a ejecutar esa funcion y ella lo que hace es validar el campo. La propiedad tiuched me va a indicar cuando un elemento del input fue tocado. Osea solamente quiero mostrar mensaje de error cuando el input haya sido tocado. Quiero accedera touched.nombre en caso de que exista y en caso de que tengamos un error en el nombre  */}

      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(valores) => {
			
          let errores = {};
		  //Validacion para el nombre 
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
			errores.nombre = 'El nombre solo puede contener letras y espacios'
		  }

		  //Validacion para el correo 
		  if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo electronico";
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
			errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones  y guion bajo'
		  }
          return errores;
        }}
        onSubmit={(valores, {resetForm}) => {
			resetForm();
          console.log('Formulario enviado');
		  cambiarFormularioEnviado(true);
		  setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="formulario" >
            {console.log(errors)}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="John Doe"
                
              />
			  
        <ErrorMessage name="nombre" component={() => (
                <div className="error">{errors.nombre}</div>
              )}/>
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="email"
                id="correo"
                name="correo"
                placeholder="correo@correo.com"
              
              />
              <ErrorMessage name="correo" component={() => (
                <div className="error">{errors.correo}</div>
              )}/>
             
            </div>
            
            <button type="submit">Enviar</button>
			{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
          </Form>
        )}

{/* Si quiero hacer un select por ejemplo para elegir pais seria algo asi:
<Field name="pais" as="select">
<option value="uruguay">Uruguay</option>
<option value="argentina">Argentina</option>
<option value="brasil">Brasil</option>
</Field>

Si quiero usar radio botons seria algo asi:
<div> 
<label>
<Field type="radio" name="sexo" value="hombre"/>Hombre
</label>
<label> 
<Field type="radio" name="sexo" value="mujer"/>Mujer
</label>
</div>
*/}
		{/* { values, errors, touched, handleSubmit, handleChange, handleBlur } */}
        {/* {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form className="formulario" onSubmit={handleSubmit}>
            {console.log(errors)}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="John Doe"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
			  
              {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="correo@correo.com"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
            </div>
            <button type="submit">Enviar</button>
			{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
          </Form>
        )} */}
      </Formik>
    </>
  );
};

export default Formulario;
