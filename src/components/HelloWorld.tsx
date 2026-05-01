function HelloWorld() {
  const nombreSitio = 'ReactStore'
  const descripcion = 'Tu tienda de productos favorita'
  const fechaActual = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>{nombreSitio}</h1>
      <p>{descripcion}</p>
      <p style={{ color: '#888', fontSize: '0.9rem' }}>
        {fechaActual}
      </p>
    </div>
  )
}

export default HelloWorld