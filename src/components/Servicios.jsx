
const Servicios = () => {
  return (
    <>
        <h2>Mis Servicios</h2>
        <div className="servicios">
            <section className="servicio">
                <h3>Diseño WEB</h3>
                <div className="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-palette" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" > 
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                        <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
                        <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
                        <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
                    </svg>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam ab dolor id sapiente quaerat aliquid possimus,</p>
            </section>
            
            <section className="servicio">
                <h3>Aplicaciones WEB</h3>
                <div className="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-android" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="10" x2="4" y2="16" />
                        <line x1="20" y1="10" x2="20" y2="16" />
                        <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
                        <line x1="8" y1="3" x2="9" y2="5" />
                        <line x1="16" y1="3" x2="15" y2="5" />
                        <line x1="9" y1="18" x2="9" y2="21" />
                        <line x1="15" y1="18" x2="15" y2="21" />
                    </svg>
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
                        <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
                    </svg>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam ab dolor id sapiente quaerat aliquid possimus,</p>
            </section>

            <section className="servicio">
                <h3>E-Commerce</h3>
                <div className="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="3" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                        <line x1="7" y1="15" x2="7.01" y2="15" />
                        <line x1="11" y1="15" x2="13" y2="15" />
                    </svg>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quisquam ab dolor id sapiente quaerat aliquid possimus,</p>
            </section>
        </div>    
    </>
  )
}

export default Servicios